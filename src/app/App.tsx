import { useState } from "react";
import "app/styles/index.scss";
import { Button } from "shared/ui/Button/Button";

export const App = () => {
  const [state, setState] = useState(0);
  return (
    <div className="app">
      {state}
      <Button />
      <button onClick={() => setState((prev) => prev + 1)}>+</button>
    </div>
  );
};
