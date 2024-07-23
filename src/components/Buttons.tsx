import { useEffect, useState } from "react";
import Button from "./Button";
import "../css/Buttons.css";
interface Card {
  id: string;
  attribute: string;
  done: boolean;
  clicked: boolean;
}
const Buttons = (props: {
  list: string[];
  again: number;
  action: Function;
  countF: Function;
  count: number;
  values: string[];
}) => {
  const [active, setActive] = useState(false);
  const [one, setOne] = useState<Card | null>(null);
  const [items, setItems] = useState<Card[]>();

  useEffect(() => {
    const listOfValue: Card[] = [];
    props.list.map((e, i) => {
      let card: Card = {
        id: i.toString(),
        attribute: e,
        done: false,
        clicked: false,
      };
      listOfValue.push(card);
    });
    setItems(listOfValue);
  }, [props.again, props.values]);

  const goodChoise = (second: Card) => {
    let listValue = [...items!];
    listValue.map((e) => {
      e.id === one!.id || e.id === second.id ? (e!.done = true) : "";
    });
    setItems(listValue);
  };

  const chose = (card: Card) => {
    let updateItem = items!.map((e) => {
      return e.id === card.id ? { ...e, clicked: true } : e;
    });
    setItems(updateItem);
    if (one === null) {
      setOne({ ...card, clicked: true });
      setActive(!active);
    }
    if (one !== null) {
      props.countF(props.count + 1);
      one.attribute === card.attribute && one.id !== card.id
        ? goodChoise(card)
        : setTimeout(() => {
            updateItem = updateItem.map((e) => {
              return e.id === card.id || e.id === one.id
                ? { ...e, clicked: false }
                : e;
            });
            setItems(updateItem);
          }, 500);
      setActive(!active);
      setOne(null);
    }
  };

  const reset = () => {
    props.action(props.again + 1);
    props.countF(0);
  };

  const makeGame = () => {
    return items?.every((e) => e.done === true) ? (
      <span>
        <h1>Koniec Gry</h1>{" "}
        <button type="button" onClick={() => reset()}>
          Play again?
        </button>
      </span>
    ) : (
      items?.map((e, i) => {
        return (
          <div
            key={i}
            className={`item ${
              active && one!.id === i.toString() ? "check" : ""
            }`}
          >
            <Button
              card={e}
              action={() => chose(e)}
              pick={active}
              first={one}
            />
          </div>
        );
      })
    );
  };
  return <div className="tableButton">{makeGame()}</div>;
};

export default Buttons;
