import React, { useEffect, useRef, useState } from "react";
//!Setting--> npm i --save @tensorflow-models/mobilenet @tensorflow/tfjs-converter  @tensorflow/tfjs-core node-sass
import * as mobilenet from "@tensorflow-models/mobilenet";

import "./UrlImage.css";
const UrlImages = () => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [results, setResults] = useState([]);

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  };

  const uploadTrigger = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
    setResults([]);
  };

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
    return <h2 style={{ textAlign: "center" }}>Initializing</h2>;
  }

  const detectImage = async () => {
    textInputRef.current.value = "";
    const results = await model.classify(imageRef.current);
    setResults(results);
  };

  return (
    <>
      <div className="img-url">
        <h1 className="header">Image Detection</h1>
        <div className="inputField">
          <input
            type="file"
            accept="image/*"
            capture="camera"
            className="uploadInput"
            onChange={uploadImage}
            ref={fileInputRef}
          />
          <button className="uploadImage" onClick={uploadTrigger}>
            Upload Image
          </button>
          <span className="or">OR</span>
          <input
            type="text"
            placeholder="Enter Image URL"
            ref={textInputRef}
            onChange={handleInputChange}
          />
        </div>
        <div className="imageWrapper">
          <div className="imageContent">
            <div className="imageArea">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Image Preview"
                  crossOrigin="anonymous"
                  ref={imageRef}
                />
              )}
            </div>
            {results.length > 0 && (
              <div className="imageResult">
                {results.map((result, index) => {
                  return (
                    <div className="result" key={result.className}>
                      <span className="name">{result.className}</span>
                      <span className="accuracy">
                        Accuracy Level: {(result.probability * 100).toFixed(2)}%{" "}
                        {index === 0 && (
                          <span className="bestGuess">Best Guess</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {imageUrl && (
            <button className="button" onClick={detectImage}>
              Detect Image
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UrlImages;
