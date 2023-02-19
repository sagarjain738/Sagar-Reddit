import React, { useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import TabItem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";

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
export type TextInputs = {
  title: string;
  body: string;
};

const NewPostForm: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(formTable[0].title);
  const [textInputs, setTextInputs] = useState<TextInputs>({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = useState<string>();

  const handleCreatePost = async () => {};

  const onSelectImage = () => {};

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { value, name },
    } = event;
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
            loading={false}
          />
        )}
      </Flex>
    </Flex>
  );
};
export default NewPostForm;
