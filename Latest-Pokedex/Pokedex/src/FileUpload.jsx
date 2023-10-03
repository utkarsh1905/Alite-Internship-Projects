import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useUploadImageMutation } from "./fileUploadReducer";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [uploadImage, { isLoading, isError, error }] = useUploadImageMutation();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const formdata = new FormData();
      formdata.append("file", file);

      try {
        await uploadImage(formdata)
          .unwrap()
          .then((res) => {
            console.log("res", res);
          });
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isLoading || !file}>
        Upload
      </button>
      {isLoading && <p>Uploading...</p>}
      {isError && <p>Error: {error}</p>}
    </div>
  );
};

export default FileUpload;
