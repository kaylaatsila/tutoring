import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import * as screens from './features';

export default function App() {
  return (
    <MantineProvider >
      <screens.RegisterScreen />
    </MantineProvider>
  )
}
