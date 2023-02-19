import { Flex, Input, Stack, Textarea, Button } from "@chakra-ui/react";
import React from "react";

function TextInputs() {
  return (
    <Stack background="red" width="100%">
      <Input />
      <Textarea />
      <Flex>
        <Button>Post</Button>
      </Flex>
    </Stack>
  );
}

export default TextInputs;
