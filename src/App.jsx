import { useState, useEffect, useRef } from "react";
import "./App.css";
import ImageGrallery from "./ImageGrallery";

// API keyの設定を読み込んでおく🤗
const API_KEY = "xxxここは独自のものを設定する";

function App() {
  // APIのデータを保持するuseStateを準備しましょう🤗
  const [fetchData, setFetchData] = useState([]);

  // useRefを使えるように設定する🤗
  const ref = useRef();

  // https://pixabay.com/api/?key=39490495-744225afd017971aac7bbdb34&q=yellow+flowers&image_type=photo
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + "cat"; //appleという場所は初期検索のワード

  // useEffectというおまじないを使って、画面が表示された直後に実行する🤗
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits, "中身をチェック");
        setFetchData(data.hits);
      });
  }, []);

  const handleSubmit = (e) => {
    // formタグを使うと、buttonタグ or submit or エンターキーを押すとページがリロードされる仕組みです🤗
    // jsの機能を使って、その「リロードを」制御します🤗
    e.preventDefault(); //このおまじないを使うために「e」というのが必要になります🤗

    // ref=useRef()の挙動を確認しましょう🤗 これを使わない場合はuseStateとonChangeの組み合わせが必要になります🤗
    // どっちでやればいいですか？？ 答え=どっちでやっても同じです🤗
    console.log(ref.current.value, "refの中身");

    const SEARCH_URL =
      "https://pixabay.com/api/?key=" + API_KEY + "&q=" + ref.current.value;

    console.log(SEARCH_URL, "検索のワード");

    fetch(SEARCH_URL) //URLだとダメです！なのでここを変更します🤗
      .then((res) => {
        console.log(res, "aaaaaaa");
        return res.json();
      })
      .then((data) => {
        console.log(data.hits, "中身をチェック");
        setFetchData(data.hits);
      });
  };

  return (
    <>
      {/* この中に書く */}

      {/* .containerと入力後タブキーを押してください🤗 */}
      <div className="container">
        <h2>写真API</h2>
        {/* formタグを使って、input入力欄のエンターキー or 検索されたらAPI通信 */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="画像を探す" ref={ref} />
        </form>

        {/* useEffectを使ってfetchDataにAPIのデータが収納されています🤗それをImageGalleryに渡します🤗 */}
        <ImageGrallery fetchData={fetchData} />
      </div>
      {/* この中に書く */}
    </>
  );
}

export default App;
