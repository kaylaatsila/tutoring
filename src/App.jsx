import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as screens from './features';

const router = createBrowserRouter([
  {
    path: "/",
    element: <screens.LoginScreen />,
  },
  {
    path: "login",
    element: <screens.LoginScreen />,
  },
  {
    path: "register",
    element: <screens.RegisterScreen />,
  },
]);

const theme = createTheme({
  colors: {
    'blue': [
      '#F3F4F8',
      '#E2E3F2',
      '#8892E7',
      '#5663DC',
      '#2A3ACB',
      '#1F2B98',
      '#161f6d',
      '#151D66',
      '#111855',
      '#0E1344'
    ],

    'light-blue': [
      "#EBFAFF",
      "#ADECFF",
      "#70DEFF",
      "#33CFFF",
      "#1FCBFF",
      "#00BCF5",
      "#0097C6",
      "#008DB8",
      "#007DA3",
      "#006D8F"
    ]
  }
})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
