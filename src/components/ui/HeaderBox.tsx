import { Box, Button, Container, Stack, Typography } from "@mui/material";
import theme from "../../theme/theme";

function Header({ image, title, subtitle }: { image: string; title: string, subtitle: string }) {

  const handleMain = () => {
    const element = document.getElementById("main");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", 
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `
          linear-gradient(to bottom, rgba(227, 207, 255, 0.55) 0%, rgba(227, 207, 255, 1) 100%),
          url(${image})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <Container
          sx={{ textAlign: "center", color: theme.palette.text.secondary }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              sx={{
                typography: { xs: "h4", md: "h2" },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                typography: { xs: "h6", md: "h5" },
              }}
            >
              {subtitle}
            </Typography>
            <Button
              onClick={handleMain}
              variant="outlined"
              sx={{ width: "13rem", height: "10vh", border: "0.2rem solid" }}
            >
              Zobacz więcej
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Header;
