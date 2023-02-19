import React, { useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/atoms/postsAtom";
import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { Timestamp, serverTimestamp } from "firebase/firestore";

type NewPostFormProps = {
  user: User;
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

const NewPostForm: React.FC<NewPostFormProps> = ({ user }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(formTable[0].title);
  const [textInputs, setTextInputs] = useState<TextInput>({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = useState<string>();
  const handleCreatePost = async () => {
    const { CommunityId } = router.query;
    // Create a new post object
    const newPost: Post = {
      id: "", // CHeck if this is optional in Post Type
      communityId: CommunityId as string,
      creatorId: user.uid,
      creatorDisplayName: user.email!.split("@")[0],
      title: textInputs.title,
      body: textInputs.body,
      numberOfComments: 0,
      voteStatus: 0,
      createdAt: serverTimestamp() as Timestamp,
    };
    // Store the post in DB
    try {
      // check for selected file
      // store in storage => getDownURL(return imageURL)
      // & that returned image URL we will store to post DB
      // Update POST doc by adding imageURL
      // Redirect user back to the Community Page using the router
    } catch (error: any) {
      console.log("handleCreatePost error", error.message);
    }
  };

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const selectedImage = event.target.files?.[0];
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target?.result as string);
      }
    };
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
            onSelectImage={onSelectImage}
            setSelectedTab={setSelectedTab}
            setSelectedFile={setSelectedFile}
          />
        )}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
