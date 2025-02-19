import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [nowTime, setNowTime] = useState(null);
  let secondPassed = 0;

  let intervalRef = useRef(null);

  const startHandler = () => {
    setStartTime(Date.now());
    setNowTime(Date.now());

    intervalRef.current = setInterval(() => setNowTime(Date.now()), 100);
  };

  const stopHandler = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  if (startTime !== null && nowTime !== null) {
    secondPassed = (nowTime - startTime) / 1000;
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="space-y-2">
            <div className="text-xl font-bold">Stop Watch: {secondPassed}</div>
            <div className="flex items-center space-x-2">
              <button
                className="border border-green-300 rounded px-4 py-1 bg-green-200 font-bold"
                onClick={startHandler}
              >
                Start
              </button>
              <button
                className="border border-red-300 rounded px-4 py-1 bg-red-200 font-bold"
                onClick={stopHandler}
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
