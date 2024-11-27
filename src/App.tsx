import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router';
import { BasicAppShell } from './components/AppShell/AppShelll';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Lato, sans-serif' }}>
      <BrowserRouter>
        <BasicAppShell />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
