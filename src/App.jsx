// import StopWatch from "./components/StopWatch";
// import Video from "./components/Video";
import Todos from "./components/Todos";
// import Search from "./components/Search";
// import SaveProgress from "./components/custom-hooks/SaveProgress";
// import StatusUserOnline from "./components/custom-hooks/StatusUserOnline";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        {/* <div className="flex items-center justify-center h-screen">
          <div className="space-y-2">
            <SaveProgress />
            <StatusUserOnline />
          </div>
        </div> */}
        {/* <Search /> */}
        {/* <Video /> */}
        {/* <StopWatch /> */}
        <Todos />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
