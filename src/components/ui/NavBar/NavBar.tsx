import {
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  IconButton,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MethodList from "./MethodList";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Icon from "../Icon";
import web_logo from "../../../assets/images/Ui/web_logo.png"

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(`md`));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const darwerLinks = [
    {
      text: "STRONA GŁÓWNA",
      link: "/",
    },
    {
      text: "OTOCZENIE DO NAUKI",
      link: "studying-space",
    },
    {
      text: "DLA WZORKOWCÓW I SŁUCHOWCÓW",
      link: "visual-learner",
    },
    {
      text: "NAUKA DŁUGOTERMINOWA",
      link: "long-term",
    },
    {
      text: "METODY POGŁĘBIAJĄCE ZROZUMIENIE",
      link: "deeper-understanding",
    },
    {
      text: "NAUKA „NA OSTATNIĄ CHWILĘ”",
      link: "last-minute",
    },
    {
      text: "NAUKA W MIĘDZYCZASIE",
      link: "meantime",
    },
    {
      text: "METODY WSPOMAGAJĄCE NAUKĘ",
      link: "studying-heplers",
    },
  ];

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar sx={{ gap: 2 }}>
          <Icon src={web_logo} alt="Our website logo" />
          <Typography  sx={{ flexGrow: 1 ,typography: { xs: "h6", md: "h5" }}}>
            Edukacyjne rewolucje
          </Typography>

          {isMobile && (
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuRoundedIcon />
            </IconButton>
          )}

          {!isMobile && (
            <>
              <Link to="/">
                <Button color="inherit">Strona główna</Button>
              </Link>
              <Link to="studying-space">
                <Button color="inherit">Otoczenie do nauki</Button>
              </Link>
              <Link to="visual-learner">
                <Button color="inherit">Dla wzorkowców i słuchowców</Button>
              </Link>
              <MethodList />
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => toggleDrawer(false)}
          sx={{
            width: 200,
            height: "100%",
            backgroundColor: "primary.main",
            color: "secondary.contrastText",
          }}
        >
          <List>
            {darwerLinks.map((item, index) => (
              <div key={index}>
                <ListItem disablePadding>
                  <Link to={item.link}>
                    <ListItemButton
                      aria-label={`Navigate to ${item.text}`}
                      onClick={() => toggleDrawer(false)}
                    >
                      {item.text}
                    </ListItemButton>
                  </Link>
                </ListItem>
                <hr />
              </div>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default NavBar;
