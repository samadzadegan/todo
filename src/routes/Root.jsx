import { Outlet } from "react-router";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import "../styles/index.css";

export default function Root() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center custom-container mx-auto sm:px-6 lg:px-8">
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
