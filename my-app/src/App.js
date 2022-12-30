import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [img, setImg] = useState("");
  useEffect(() => {
    const getImg = async () => {
      await axios
        .get("https://random-d.uk/api/v1/random")
        .then(function (response) {
          // handle success
          console.log(response.data);
          setImg(response.data.url);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    getImg();
  }, []);
  return (
    <div className="App">
      <img src={img} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
