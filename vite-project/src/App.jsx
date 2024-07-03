import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStateHook from "./useState/UseStateHook";
import UseEffect from "./useEffect/UseEffect";
import UseMemoHook from "./useMemo/UseMemoHook";
import UseCallbackHook from "./useCallback/UseCallbackHook";

function App() {
  return (
    <>
      <UseCallbackHook />
      {/* <UseMemoHook /> */}
      {/* hi */}
      {/* <UseStateHook /> */}

      {/* <UseEffect/> */}
    </>
  );
}

export default App;
