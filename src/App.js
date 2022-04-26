import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
   
  const [theme, setTheme] = useState("light");

  const currentTheme = createTheme({
    palette: {
      mode: theme
    }
  })

  return (
    <ThemeProvider theme={currentTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setTheme={setTheme} theme={theme}/>
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
