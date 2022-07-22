import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
    useEffect(() => {
      // side effect function
    () => {
      setTimeout(() => setCount(0), 5000);
    },[]
  );
        console.log("useEffect called");
    });

    console.log("Component rendering");

    return <button > Click Me < /button>;
}

export default App;