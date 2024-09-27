import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import * as screens from './features';

const theme = createTheme({
  colors: {
    'blue': [
      '#F3F4F8',
      '#EBECF7',
      '#a5aff5',
      '#7582ef',
      '#4b5ce9',
      '#3244e6',
      '#2338e6',
      '#162bcd',
      '#0e26b8',
      '#0020a2'
    ],

    'light-blue': [
      "#e1f9ff",
      "#ccedff",
      "#9ad7ff",
      "#64c1ff",
      "#3baefe",
      "#20a2fe",
      "#099cff",
      "#0088e4",
      "#0078cd",
      "#0069b6"
    ]
  }
})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <screens.LoginScreen />
    </MantineProvider>
  )
}
