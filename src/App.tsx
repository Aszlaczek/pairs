import { useState } from "react";
import "./css/App.css";
import Buttons from "./components/Buttons";
import List from "./components/List";

function App() {
  const a = ["a", "b", "c", "d", "e", "f"];
  const [again, setAgain] = useState<number>(1);
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(false);
  g;
  const shuffle = (list: string[]) => {
    const value = list.concat(list);
    let current = value.length;

    while (current != 0) {
      let random = Math.floor(Math.random() * current);
      current--;
      [value[current], value[random]] = [value[random], value[current]];
    }
    return value;
  };

  return (
    <>
      <header>
        <span>You're counter: {count}</span>
        <br />
        {again > 1 ? <span>It's you're {again} try</span> : ""}
      </header>

      <main>
        <Buttons
          list={shuffle(a)}
          again={again}
          action={setAgain}
          countF={setCount}
          count={count}
        />
        <List list={a}></List>
      </main>
    </>
  );
}

export default App;
