import { TextField } from "@mui/material";
import { FormEvent } from "react";

const List = (props: {
  list: string[];
  action: Function;
  state: boolean;
  values: Function;
}) => {
  let pom = props.list;

  const makeChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.values(pom);
    alert("poszło");
    props.action(!props.state);
  };

  return (
    <form id="form" onSubmit={makeChange}>
      <TextField
        id="outlined-basic"
        label="First"
        variant="outlined"
        className="label"
        value={pom[0]}
        onChange={(e) => (pom[0] = e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Second"
        variant="outlined"
        className="label"
        value={pom[1]}
        onChange={(e) => (pom[1] = e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Third"
        variant="outlined"
        className="label"
        value={pom[2]}
        onChange={(e) => (pom[2] = e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Fourth"
        variant="outlined"
        className="label"
        value={pom[3]}
        onChange={(e) => (pom[3] = e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Five"
        variant="outlined"
        className="label"
        value={pom[4]}
        onChange={(e) => (pom[4] = e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Six"
        variant="outlined"
        className="label"
        value={pom[5]}
        onChange={(e) => (pom[5] = e.target.value)}
      />
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
