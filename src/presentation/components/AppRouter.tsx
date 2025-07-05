import { Routes, Route } from "react-router-dom";
import App from "../../App";
import IntroPage from "../pages/IntroPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/app" element={<App />} />
    </Routes>
  );
};

export default AppRouter;
