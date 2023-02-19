import { Button, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";

type ImageUploadProps = {
  selectedFile?: string;
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => {};
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ImageUpload: React.FC<ImageUploadProps> = () => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
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
        <Button
          variant="outline"
          height="30px"
          onClick={() => selectedFileRef.current?.click()}
        >
          Upload
        </Button>
        <input ref={selectedFileRef} type="file" hidden />
      </Flex>
    </Flex>
  );
};
export default ImageUpload;
