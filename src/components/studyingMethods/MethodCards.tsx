import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MethodCards({skip}: {skip?: number}) {
  const initialMethods = [
    {
      id: 0,
      text: "NAUKA DŁUGOTERMINOWA",
      link: "/edukacyjne_rew/long-term",
      image: "/LongTermBackground.jpg",
    },
    {
      id: 1,
      text: "METODY POGŁĘBIAJĄCE ZROZUMIENIE",
      link: "/edukacyjne_rew/deeper-understanding",
      image: "/CalculatorNotebook.jpg",
    },
    {
      id: 2,
      text:"NAUKA „NA OSTATNIĄ CHWILĘ”",
      link: "/edukacyjne_rew/last-minute",
      image: "/LastMinute.jpg",
    },
    {
      id: 3,
      text: "NAUKA W MIĘDZYCZASIE",
      link: "/edukacyjne_rew/meantime",
      image: "/Meantime.jpg",
    },
    {
      id: 4,
      text: "METODY WSPOMAGAJĄCE NAUKĘ",
      link: "/edukacyjne_rew/studying-heplers",
      image: "/LotsOfBooks.jpg",
    },
  ];

  const methods = initialMethods.filter(method=>method.id!=skip);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
        size={12}
      >
        {methods.map((method, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 12 / methods.length }} key={index}>
            <Link to={method.link}>
              <Button
                sx={{
                  height: "100%",
                  width: "100%",
                  minHeight: "20vh",
                  position: "relative", 
                  overflow: "hidden", 
                  fontSize: "1rem",
                  color: "white",
                  zIndex:0,

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage: `linear-gradient( #532b8890), url(${method.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    transition: "transform 0.5s", 
                    transform: "scale(1.15)",
                    zIndex:-1,
                  },

                  "&:hover::before": {
                    transform: "scale(1)",
                  },
                }}
              >
                {method.text}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MethodCards;
