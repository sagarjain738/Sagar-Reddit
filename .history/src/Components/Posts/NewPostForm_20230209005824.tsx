import React, { useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";
import ImageUpload from "./PostForm/ImageUpload";

type NewPostFormProps = {};

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

const NewPostForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(formTable[0].title);
  const [textInputs, setTextInputs] = useState<TextInput>({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = useState<string>();

  const handleCreatePost = async () => {};

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
        {selectedTab == "Images & Video" && <ImageUpload />}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
