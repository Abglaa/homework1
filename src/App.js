import React, { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>dfbhfhebffjdfjfsadf</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
function MyButton({ count, onClick}) {
  return <button onClick={onClick}>Cliclked {count} times!</button>;
}