import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Item } from "./ui/Item";
import MethodCards from "./studyingMethods/MethodCards";
import CustomizedDialogs from "./quiz/QuizDialog";
import Icon from "./ui/Icon";
import Header from "./ui/HeaderBox";
import MainBox from "./ui/MainBox";
import Footer from "./ui/Footer";
import FadeIn from "./ui/FadeIn";
import HomeHeader from "../assets/images/Home/HomeHeaderBackground.jpg"
import InstagramLogo from "../assets/images/Ui/instagram_icon.png"

function Home() {
  return (
    <>
      <Header image={HomeHeader} title="EDUKACYJNE REWOLUCJE" subtitle="Ucz się szybciej, mądrzej i skuteczniej" />
      <MainBox>
        <Container
          id="main"
          sx={{
            alignItems: "center",
            paddingTop: "4rem",
            paddingBottom: "2rem",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h4">NASZ CEL</Typography>
                      <Typography>
                        Magiczne duszki stworzyły tą stronę by pomóc Wam w nauce
                        oraz jako projekt Zwolnieni z teorii (ale to tak tylko
                        dodatkowo). Wiemy, że nauka gdy Ci się nie chce to jedna
                        z najbardziej wymęczających rzeczy.
                      </Typography>
                      <Typography>
                        Przejdź przez naszą stronę i odkryj Magiczne sztuczki
                        uczenia się. Poznaj metody nauki i wybierz najlepsze dla
                        siebie, próbuj różnych sposobów, nie poddawaj się po
                        pierwszej nieudanej próbie.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <Link
                  href="https://www.instagram.com/edukacyjne_rew"
                  target="blank"
                  sx={{ textDecoration: "none" }}
                >
                  <FadeIn delay={100}>
                    <Item
                      elevation={5}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#ddd7e390",
                        },
                      }}
                    >
                      <Typography variant="h5">
                        <Icon src={InstagramLogo} alt="Instagram Logo" />{" "}
                        ZAOBSERWUJ NAS
                      </Typography>
                    </Item>
                  </FadeIn>
                </Link>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <Item
                  elevation={5}
                  sx={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Stack spacing={3}>
                    <Typography variant="h5">
                      SPRAWDŹ JAKIE METODY NAUKI POLECAMY DLA CIEBIE
                    </Typography>
                    <CustomizedDialogs />
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <FadeIn delay={100}><MethodCards /></FadeIn>
            
            <Grid size={12}>
              <FadeIn delay={100}>
              <Item
                elevation={5}
                sx={{ paddingLeft: { md: "20%" }, paddingRight: { md: "20%" } }}
              >
                <Stack spacing={3}>
                  <Typography variant="h4">JAK SIĘ UCZYĆ?</Typography>
                  <Typography>
                    Uczenie się jest jedną z najważniejszych umiejętności w
                    naszym życiu, ale czy ktoś, pokazał nam jak to robić?
                  </Typography>
                  <Typography>
                    Od najmłodszych lat nikt nie nauczył nas, jak się uczyć.
                    Problem może dotyczyć każdego, dlatego chcemy się z tym
                    zmierzyć, pokazując, że uczenie się jest ważną umiejętnością
                    i wcale nie musi być bezsensownym zapamiętywaniem tekstu z
                    podręcznika.
                  </Typography>
                </Stack>
              </Item>
              </FadeIn>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default Home;
