import React, { useState } from "react";

type useSelectedFileProps = {};

const useSelectedFile: React.FC<useSelectedFileProps> = () => {
  const [selectedFile, setSelectedFile] = useState<string>();

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  return <div>Have a good coding</div>;
};
export default useSelectedFile;
