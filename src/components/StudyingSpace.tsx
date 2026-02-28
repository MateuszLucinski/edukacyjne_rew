import { Container, Grid, Stack, Typography } from "@mui/material";
import MainBox from "./ui/MainBox";
import Header from "./ui/HeaderBox";
import FadeIn from "./ui/FadeIn";
import { Item } from "./ui/Item";
import ImageItem from "./ui/ImageItem";
import EmptySpace from "./ui/EmtpySpace";
import Footer from "./ui/Footer";

function StudyingSpace() {
  return (
    <>
      <Header image="/MessyDesk.jpg" title="OTOCZENIE DO NAUKI" subtitle="Stwórz przestrzeń, która wspiera koncentrację" />
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
            <Grid size={12}>
              <FadeIn delay={100}>
                <Item
                  elevation={5}
                  sx={{
                    paddingLeft: { md: "20%" },
                    paddingRight: { md: "20%" },
                  }}
                >
                  <Stack spacing={3}>
                    <Typography variant="h4">MIEJSCE NAUKI</Typography>
                    <Typography>
                      Nasz mózg zapamiętuje informacje lepiej, gdy środowisko, w
                      którym się uczymy kojarzy się z nauką. Dlatego tak ważne
                      jest by znaleźć jedno miejsce, w którym skupiamy się tylko
                      na nauce np. Przy biurku a NIE w łóżku. Nasz mózg kojarzy
                      to miejsce z odpoczynkiem i snem przez to nie jest
                      skupiony na przyswajaniu nowych informacji. Przygotowanie
                      miejsca nauki także jest ważne - porządek oraz organizacja
                      są kluczowe, chcemy pozbyć się rozpraszaczy.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        KOLORYSTYKA I ŚWIATŁO
                      </Typography>
                      <Typography>
                        Kolorystyka pomieszczenia wbrew pozorom także jest
                        ważna. Kolory ciepłe sprzyjają dobremu samopoczuciu, a
                        zimne działają uspokajająco i pomagają w skupieniu.
                        Jeżeli ciężko nam uczyć się w kompletnej ciszy warto
                        puścić muzykę, lecz taką którą znamy lub taką którą nasz
                        mózg będzie traktował jak tło a nie coś na czym się
                        skupić.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Typography>
                      Dobre oświetlenie pozwala uniknąć zmęczenia oczu, bólu
                      głowy i ogólnego dyskomfortu. Jeśli twoje otoczenie nie
                      będzie dobrze oświetlone (np.: podczas nauki wieczorem)
                      może to nie tylko wpłynąć na nasze samopoczucie jak
                      również na stan
                    </Typography>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/LitRoom.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/HeadphoneStudy.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DŹWIĘKI</Typography>
                      <Typography>
                        Hałas z otoczenia lub inne dźwięki przeszkadzają nam w
                        skupieniu. Włączone filmiki, powiadomienia z telefonu,
                        czy hałasujące rodzeństwo obok nas to nie dobry plan na
                        naukę.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">POSTAWA</Typography>
                      <Typography>
                        Wygodna, luźna postawa zamiast spiętej która odciąga
                        naszą uwagę. (Oczywiście pamiętajmy o dobrej postawie
                        dla naszego kręgosłupa)
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <EmptySpace/>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default StudyingSpace;
