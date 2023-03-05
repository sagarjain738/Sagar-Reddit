import { firestore, storage } from "@/Firebase/clientApp";
import useSelectFile from "@/Hooks/useSelectFile";
import { Post } from "@/atoms/postsAtom";
import { Alert, AlertIcon, Flex, Icon, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import ImageUpload from "./PostForm/ImageUpload";
import TextInputs from "./PostForm/TextInputs";
import TabItem from "./TabItem";

type NewPostFormProps = {
  user: User;
  communityImageURL?: string;
};

export type Tabitem = {
  title: string;
  icon: typeof Icon.arguments;
};

const formTable: Tabitem[] = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
  {
    title: "Images & Video",
    icon: IoImageOutline,
  },
  {
    title: "Link",
    icon: BsLink45Deg,
  },
  {
    title: "Poll",
    icon: BiPoll,
  },
  {
    title: "Talk",
    icon: BsMic,
  },
];

export type TextInput = {
  title: string;
  body: string;
};

const NewPostForm: React.FC<NewPostFormProps> = ({
  user,
  communityImageURL,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedTab, setSelectedTab] = useState(formTable[0].title);
  const [textInputs, setTextInputs] = useState<TextInput>({
    title: "",
    body: "",
  });
  console.log("checking if image URL exist", communityImageURL);
  const { onSelectFile, setSelectedFile, selectedFile } = useSelectFile();

  const handleCreatePost = async () => {
    const { CommunityId } = router.query;
    // Create a new post object
    const newPost: Post = {
      communityId: CommunityId as string,
      communityImageURL: communityImageURL || "",
      creatorId: user.uid,
      creatorDisplayName: user.email!.split("@")[0],
      title: textInputs.title,
      body: textInputs.body,
      numberOfComments: 0,
      voteStatus: 0,
      createdAt: serverTimestamp() as Timestamp,
    };
    setLoading(true);
    try {
      // Store the post in DB
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      // check for selected file
      if (selectedFile) {
        // store in storage => getDownURL(return imageURL)
        const imageRef = ref(storage, `posts/${postDocRef.id}/image`); // ref to upload file
        await uploadString(imageRef, selectedFile, "data_url"); // uploading data as string
        // & that returned image URL we will store to post DB

        const downloadURL = await getDownloadURL(imageRef);
        // Update POST doc by adding imageURL
        await updateDoc(postDocRef, {
          imageURL: downloadURL as string,
        });
      }
      // Redirect user back to the Community Page using the router
      router.back();
    } catch (error: any) {
      console.log("handleCreatePost error", error.message);
      setError(error.messege);
    }
    setLoading(false);
  };

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value, name },
    } = event;

    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Flex direction="column" bg="white" borderRadius={4} mt={2}>
      <Flex width="100%">
        {formTable.map((item) => (
          <TabItem
            item={item}
            selected={item.title === selectedTab}
            key={item.title}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Flex>
      <Flex p={4}>
        {selectedTab == "Post" && (
          <TextInputs
            textInputs={textInputs}
            handleCreatePost={handleCreatePost}
            onChange={onTextChange}
            loading={loading}
          />
        )}
        {selectedTab == "Images & Video" && (
          <ImageUpload
            selectedFile={selectedFile}
            onSelectImage={onSelectFile}
            setSelectedTab={setSelectedTab}
            setSelectedFile={setSelectedFile}
          />
        )}
      </Flex>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <Text>Error while creating post</Text>
        </Alert>
      )}
    </Flex>
  );
};
export default NewPostForm;
