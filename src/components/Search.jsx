import { useRef } from "react";
import MyInput from "./MyInput";

export default function Search() {
  const searchRef = useRef(null);
  const handleClick = () => {
    searchRef.current.focus();
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="space-y-2">
          <button
            className="border border-gray-300 font-bold px-4 py-1 bg-gray-100 rounded"
            onClick={handleClick}
          >
            Search
          </button>
          <br />
          <MyInput ref={searchRef} />
        </div>
      </div>
    </>
  );
}
