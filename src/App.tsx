import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { Button } from '@mantine/core';
import { BasicAppShell } from './components/AppShell/AppShelll.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <BasicAppShell>
        <div>
          <h1>CRM-Lite</h1>
          <p>Welcome to CRM-Lite</p>
          <Button
            variant="filled"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </div>
      </BasicAppShell>
    </MantineProvider>
  );
}

export default App;
