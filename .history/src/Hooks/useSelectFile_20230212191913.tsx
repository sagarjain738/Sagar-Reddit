import React, { useState } from "react";

const useSelectFile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>();

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  return {
    onSelectFile,
    setSelectedFile,
    selectedFile,
  };
};
export default useSelectFile;
