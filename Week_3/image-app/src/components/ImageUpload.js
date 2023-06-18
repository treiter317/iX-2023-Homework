import React, {useState} from "react";

import FileService from '../services/file-service';

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');

  async function onImageUpload(e) {
    e.preventDefault();

    try {
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload Progress:" + progress);
      });
      setUrl(downloadUrl);
      alert('Image uploaded.');
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container-sm mt-4 text-center">
      <div className="card card-body">
        <h1> Upload a Movie! </h1>

        <form onSubmit={onImageUpload}>
          <div className="mb-3">
            <input
              onChange={onFileSelected}
              type="file"
              placeholder="Submit an Image"
              className="form-control"
              multiple
            ></input>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">
              Upload Image
            </button>
          </div>
            {
                (url) ? 
                <div className="py-3">
                    <img src={url} alt='Your Uploaded Image' height='300'></img>
                    <h4>Nice Image!</h4>
                </div>
                : 
                <></>
            }
        </form>
      </div>
    </div>
  );
}
