import { Routes } from "./routes/config";
import { AuthProvider } from "./authentication/use-auth";
import {
  MantineProvider,
  Container,
  createTheme,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import '@mantine/core/styles.css';
import { MantineEmotionProvider } from "@mantine/emotion";

const theme = createTheme({
});

//This is almost the base level of your app.  You can also put global things here.
function App() {
  return (
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <MantineEmotionProvider>
        <Notifications  position="top-right" autoClose={3000} limit={5} />
          <Container fluid px={0} className="App">
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </Container>
          </MantineEmotionProvider>
      </MantineProvider>
  );
}

export default App;
