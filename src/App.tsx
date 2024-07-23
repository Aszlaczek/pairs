import { useEffect, useState } from "react";
import "./css/App.css";
import Buttons from "./components/Buttons";
import List from "./components/List";

function App() {
  const [again, setAgain] = useState<number>(1);
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(false);

  let a = ["a", "b", "c", "d", "e", "f"];
  const [changeValue, setChangeValue] = useState(a);

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
      <div id="app">
        <header>
          <span>You're counter: {count}</span>
          <br />
          {again > 1 ? <span>It's you're {again} try</span> : ""}
        </header>

        <main>
          <Buttons
            list={shuffle(changeValue)}
            again={again}
            action={setAgain}
            countF={setCount}
            count={count}
            values={changeValue}
          />
          <button className="openPopup" onClick={() => setChange(!change)}>
            Change attribute?
          </button>
          {change ? (
            <List
              list={a}
              action={setChange}
              state={change}
              values={setChangeValue}
            />
          ) : (
            ""
          )}
        </main>
      </div>
    </>
  );
}

export default App;
