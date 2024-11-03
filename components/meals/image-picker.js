"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const imagepickref = useRef();
  const [imagePicked, setImagePicked] = useState();
  function handlePicClick() {
    imagepickref.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePicked(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!imagePicked ? (
            <p>no image is picked</p>
          ) : (
            <Image src={imagePicked} alt="image" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imagepickref}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePicClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
