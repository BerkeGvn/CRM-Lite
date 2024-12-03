import '@mantine/core/styles.css';
import './main.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router';
import { BasicAppShell } from './components/appShell/AppShelll';

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
