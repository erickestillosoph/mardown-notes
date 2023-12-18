import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // FIX - 1 added new line version 1
  // FIX - 1 added new line version 2
  // FIX - 1 added new line version 3
  // FIX - 1 added new line version 4
  // FIX - 1 added new line version 5
  // FIX - 1 added new line version 6
  // FIX - 1 added new line version 7

  // ISSUE - 1 added new line version 1
  // ISSUE - 1 added new line version 2
  // ISSUE - 1 added new line version 3
  // ISSUE - 1 added new line version 4
  // ISSUE - 1 added new line version 5
  // ISSUE - 1 added new line version 6

  // BUG - 1 added new line version 1
  // BUG - 1 added new line version 2
  // BUG - 1 added new line version 3
  // BUG - 1 added new line version 4
  // BUG - 1 added new line version 5
  // BUG - 1 added new line version 6

  // PAGE - 1 added new line version 1
  // PAGE - 1 added new line version 2
  // PAGE - 1 added new line version 3
  // PAGE - 1 added new line version 4
  // PAGE - 1 added new line version 5
  // PAGE - 1 added new line version 6

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
