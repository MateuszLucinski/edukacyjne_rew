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
      link: "/edukacyjne_rew",
    },
    {
      text: "OTOCZENIE DO NAUKI",
      link: "/edukacyjne_rew/studying-space",
    },
    {
      text: "DLA WZORKOWCÓW I SŁUCHOWCÓW",
      link: "/edukacyjne_rew/visual-learner",
    },
    {
      text: "NAUKA DŁUGOTERMINOWA",
      link: "/edukacyjne_rew/long-term",
    },
    {
      text: "METODY POGŁĘBIAJĄCE ZROZUMIENIE",
      link: "/edukacyjne_rew/deeper-understanding",
    },
    {
      text: "NAUKA „NA OSTATNIĄ CHWILĘ”",
      link: "/edukacyjne_rew/last-minute",
    },
    {
      text: "NAUKA W MIĘDZYCZASIE",
      link: "/edukacyjne_rew/meantime",
    },
    {
      text: "METODY WSPOMAGAJĄCE NAUKĘ",
      link: "/edukacyjne_rew/studying-heplers",
    },
  ];

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar sx={{ gap: 2 }}>
          <Icon src="/edukacyjne_rew/logo.png" alt="Our website logo" />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Edukacyjne rewolucje
          </Typography>

          {isMobile && (
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuRoundedIcon />
            </IconButton>
          )}

          {!isMobile && (
            <>
              <Link to="/edukacyjne_rew">
                <Button color="inherit">Strona główna</Button>
              </Link>
              <Link to="/edukacyjne_rew/studying-space">
                <Button color="inherit">Otoczenie do nauki</Button>
              </Link>
              <Link to="/edukacyjne_rew/visual-learner">
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
