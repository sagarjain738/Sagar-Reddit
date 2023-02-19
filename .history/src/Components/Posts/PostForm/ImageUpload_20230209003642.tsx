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
        padding={35}
      >
        <Button>Upload</Button>
      </Flex>
    </Flex>
  );
};
export default ImageUpload;
