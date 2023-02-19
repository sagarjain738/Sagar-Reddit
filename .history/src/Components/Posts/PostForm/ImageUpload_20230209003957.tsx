import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type ImageUploadProps = {};

const ImageUpload: React.FC<ImageUploadProps> = () => {
  return (
    <Flex justify="center" align="center" width="100%">
      <Flex
        justify="center"
        align="center"
        border="1px dashed"
        borderColor="gray.200"
        padding="20"
        width="100%"
        borderRadius={4}
      >
        <Button variant="outline" height="48px" onClick={() => {}}>
          Upload
        </Button>
      </Flex>
    </Flex>
  );
};
export default ImageUpload;
