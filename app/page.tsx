import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Dashboard />
    </div>
  );
}
