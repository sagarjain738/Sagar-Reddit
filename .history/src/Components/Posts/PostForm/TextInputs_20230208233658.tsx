import { Flex, Input, Stack, Textarea, Button } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function TextInputs() {
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
      />
      <Flex justifyContent="flex-end">
        <Button
          height="34px"
          padding="0 30px"
          disabled={false}
          onClick={() => {}}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
}

export default TextInputs;
