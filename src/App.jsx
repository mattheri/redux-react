import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./auth/components/LoginForm";
import User from "./auth/components/User";
import { QueryClient, QueryClientProvider } from "react-query";
import People from "./people/components/People";
import { Container, Stack } from "react-bootstrap";
import PeopleNames from "./people/components/PeopleNames";

const client = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={client}>
      <Stack direction="horizontal">
        <Container style={{ alignSelf: "start" }}>
          <div>
            <User />
            <LoginForm />
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
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <PeopleNames />
        </Container>
        <Container>
          <People />
        </Container>
      </Stack>
    </QueryClientProvider>
  );
}

export default App;
