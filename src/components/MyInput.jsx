import { forwardRef, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import useFormInput from "../hooks/useFormInput";

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props, searchRef) => {
  const searchTermProps = useFormInput("");
  const searchText = useDebounce(searchTermProps.value, 1000);

  useEffect(() => {
    if (searchText) {
      console.log("AJAXXXX ");
    }
  }, [searchText]);

  return (
    <>
      <input placeholder="search" {...searchTermProps} ref={searchRef} />

      <div>{searchTermProps.value}</div>
    </>
  );
});

export default MyInput;
