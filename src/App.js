import "./styles.css";
import Time from "./Time";
import data from "./book";
import { useState } from "react";

export default function App() {
  const [islog] = useState(data);

  return (
    <div>
      {islog.map((bb) => {
        return <Time {...bb} key={bb.id} />;
      })}
    </div>
  );
}
