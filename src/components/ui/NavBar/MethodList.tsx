import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import theme from "../../../theme/theme";

export default function MethodList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Metody nauki
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            "aria-labelledby": "fade-button",
          },
          paper: {
            sx: {
              backgroundColor: theme.palette.primary.main, 
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            },
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{}}
      >
        <Link to="/edukacyjne_rew/long-term" onClick={handleClose}>
          <MenuItem>NAUKA DŁUGOTERMINOWA</MenuItem>
        </Link><hr/>
        <Link to="/edukacyjne_rew/deeper-understanding" onClick={handleClose}>
          <MenuItem>METODY POGŁĘBIAJĄCE ZROZUMIENIE</MenuItem>
        </Link><hr/>
        <Link to="/edukacyjne_rew/last-minute" onClick={handleClose}>
          <MenuItem>NAUKA „NA OSTATNIĄ CHWILĘ”</MenuItem>
        </Link><hr/>
        <Link to="/edukacyjne_rew/meantime" onClick={handleClose}>
          <MenuItem>NAUKA W MIĘDZYCZASIE</MenuItem>
        </Link><hr/>
        <Link to="/edukacyjne_rew/studying-heplers" onClick={handleClose}>
          <MenuItem>METODY WSPOMAGAJĄCE NAUKĘ</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
