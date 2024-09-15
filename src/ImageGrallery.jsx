// rafce と入力後タブキーを押してください🤗
import React from "react";

// cssを読み込みます🤗
import "./ImageGrallery.css";

// propsを受け取る方法は、目印名を記述してあげます🤗
const ImageGrallery = ({ fetchData }) => {
  return (
    <div>
      {/* この中に書く */}
      {/* .images-wrapperと入力後タブキーを押してください🤗 */}
      <div className="images-wrapper">
        {/* fetchDataを表示する処理を書きます🤗 */}

        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
      {/* この中に書く */}
    </div>
  );
};

export default ImageGrallery;
