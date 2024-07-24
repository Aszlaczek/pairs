import { TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const List = (props: {
  list: string[];
  action: Function;
  state: boolean;
  values: Function;
  count: Function;
}) => {
  const [values, setValue] = useState<string[]>(props.list);

  const makeChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.values(values);
    props.count(0);
    alert("You have changed the variable successfully");
    props.action(!props.state);
  };

  const updateValue = (e: string, id: number) => {
    let list = [...values];
    list[id] = e;
    setValue(list);
  };

  const createChange = () => {
    let list = [...values];
    return list.map((e, id) => {
      return (
        <TextField
          id="outlined-basic"
          key={id}
          label="First"
          variant="outlined"
          className="label"
          value={e}
          onChange={(e) => {
            updateValue(e.target.value, id);
          }}
        />
      );
    });
  };

  return (
    <form id="form" onSubmit={makeChange}>
      <h2>Change the variable bellow</h2>
      {createChange()}
      <button
        type="submit"
        id="cancle"
        onClick={() => props.action(!props.state)}
      >
        Cancle
      </button>
      <button type="submit" id="done" onSubmit={() => makeChange}>
        Done
      </button>
    </form>
  );
};

export default List;
