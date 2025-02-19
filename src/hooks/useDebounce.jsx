import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, value]);

  return debounceValue;
}
