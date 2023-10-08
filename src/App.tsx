import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Button } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      bg="aqua"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Box display="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
      <h1>Vite + React</h1>
      <Box p="20px">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Box>
  );
}

export default App;
