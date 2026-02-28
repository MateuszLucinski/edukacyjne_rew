import { createTheme } from "@mui/material";

const theme = createTheme({
  shape: {
    borderRadius: 12,
    
  },
  palette: {
    primary: { main: "#532b88d8" },
    secondary: { main: "#2f184bda"  },
    text: {primary: "#f4effa", secondary:"#2f184bda"}
  },
});

export default theme;
