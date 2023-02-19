import { Flex, Input, Stack, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import { TextInputs } from "../NewPostForm";

type TextInputsProps = {
  textInputs: TextInputs;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  textInputs,
  onChange,
  handleCreatePost,
  loading,
}) => {
  if (textInputs.title) {
    console.log("Hello");
  }

  return (
    <Stack width="100%" spacing={3}>
      <Input
        name="title"
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
        _placeholder={{
          color: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        onChange={onChange}
        value={textInputs.title}
      />
      <Textarea
        name="body"
        height="100px"
        fontSize="10pt"
        borderRadius={4}
        placeholder="Text (Optional)"
        _placeholder={{
          color: "gray.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "black",
        }}
        onChange={onChange}
        value={textInputs.body}
      />
      <Flex justifyContent="flex-end">
        <Button
          height="34px"
          padding="0 30px"
          disabled={textInputs.title ? true : true}
          isLoading={loading}
          onClick={handleCreatePost}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};

export default TextInputs;
