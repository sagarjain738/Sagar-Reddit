import { Flex, Input, Stack, Textarea, Button } from "@chakra-ui/react";
import React from "react";

function TextInputs() {
  return (
    <Stack width="100%" spacing={3}>
      <Input />
      <Textarea />
      <Flex>
        <Button>Post</Button>
      </Flex>
    </Stack>
  );
}

export default TextInputs;
