import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";

type NewPostFormProps = {};

const formTable = [
  {
    title: "Post",
    icon: IoDocumentText,
  },
];

const NewPostForm: React.FC<NewPostFormProps> = () => {
  return <div>Have a good coding</div>;
};
export default NewPostForm;
