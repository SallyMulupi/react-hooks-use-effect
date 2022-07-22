import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
    useEffect(() => {
        console.log("useEffect called");
    });

    console.log("Component rendering");

    return <button > Click Me < /button>;
}

export default App;