import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../theme/GlobalStyle";

import LoginScreen from "./LoginScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
