import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../theme/GlobalStyle";

import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
