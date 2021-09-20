import React, { useState } from "react";
import Img1 from "../../../Image/hinh1.jpg";
import Img2 from "../../../Image/hinh2.jpg";
import Img3 from "../../../Image/hinh3.jpg";
import Img4 from "../../../Image/hinh4.jpg";
import Img5 from "../../../Image/hinh5.jpg";
import Img6 from "../../../Image/hinh6.jpg";
import "./gallery.css";
import CloseIcon from "@material-ui/icons/Close";
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, i) => {
          return (
            <div className="pics" key={i} onClick={() => getImg(item.imgSrc)}>
              <img
                src={item.imgSrc}
                alt=""
                style={{ width: "100%", alignItems: "center" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
