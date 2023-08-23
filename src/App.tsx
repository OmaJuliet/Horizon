import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/Profile";
import Sent from "./pages/Sent";
import Transaction from "./pages/Transaction";
import Send from "./pages/Send";
import Card from "./pages/Card";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Horizon FinTech";
        metaDescription = "payment made easier";
        break;
      case "/sent":
        title = "";
        metaDescription = "";
        break;
      case "/transaction":
        title = "";
        metaDescription = "";
        break;
      case "/send":
        title = "";
        metaDescription = "";
        break;
      case "/card":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/sent" element={<Sent />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/send" element={<Send />} />
      <Route path="/card" element={<Card />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
