import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import Layout from "../components/outside/components/layout";
import Screen from "../components/outside";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Screen />
      </Layout>
    </ThemeProvider>
  )
}

export default Home
