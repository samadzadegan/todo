import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";
import useInterval from "../hooks/useInterval";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    document.body.style.backgroundColor = randomColor;
  }, 2000);

  return (
    <div className="px-9 py-9">
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </div>
  );
}
