import { useState } from "react";
import "./css/App.css";
import Buttons from "./components/Buttons";

function App() {
  const a = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];
  const [again, setAgain] = useState<number>(1);
  const [count, setCount] = useState(0);
  const shuffle = (list: string[]) => {
    let current = list.length;

    while (current != 0) {
      let random = Math.floor(Math.random() * current);
      current--;
      [list[current], list[random]] = [list[random], list[current]];
    }
    return list;
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
      </main>
    </>
  );
}

export default App;
