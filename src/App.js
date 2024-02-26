import React, { useState } from "react";
import "./App.css";
import WishList from "./Component/WishList";
import Wish from "./Component/Wish"
export default function App() {
  const [pass, setPass] = useState([]);
  function add({ updata }) {
    if(updata.trim() === ""){
      alert("Please enter a wish Item before updating the list");
      return;
    }
    setPass([...pass, updata]);
  }
  function clearAll(clear) {
    if (clear) {
      setPass([]);
    }
  }
  function DeleteItem(index) {
    let temp = [...pass];
    temp.splice(index, 1);
    setPass(temp);
  }
  return (
    <>
      <div id="parent">
        <h1 id="h1">Wish List ManagementApp</h1>
        <WishList addtothelist={add} clearAll={clearAll} />
        <Wish sendData={pass} DeleteItem={DeleteItem} />
      </div>
    </>
  );
}