import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../ui/HeaderBox";
import MainBox from "../ui/MainBox";
import FadeIn from "../ui/FadeIn";
import { Item } from "../ui/Item";

import Footer from "../ui/Footer";
import ImageItem from "../ui/ImageItem";

import EmptySpace from "../ui/EmtpySpace";
import MethodCards from "./MethodCards";

function Meantime() {
  return (
    <>
      <Header
        image="/Meantime.jpg"
        title="NAUKA W MIĘDZYCZASIE"
        subtitle="Wykorzystaj krótkie chwile maksymalnie"
      />
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
                <Item elevation={5}>
                  <Typography variant="h4">MICROLEARNING</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Train.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        NA CZYM POLEGA? JAK KORZYSTAĆ?
                      </Typography>
                      <Typography>
                        Polega na nauce w krótkich odcinkach np. po 5 – 15
                        minut, w komunikacji miejskiej, między zajęciami, przed
                        snem. Można podzielić materiał na małe kawałki tak by w
                        pasował się w krótkie sesje.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>

                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Krótkie sesje z mniejszą ilością informacji są łatwiej
                        przetwarzane i włączane do pamięci, szczególnie gdy
                        powtarzasz je często i regularnie.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">FISZKI</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        NA CZYM POLEGA? JAK KORZYSTAĆ?
                      </Typography>
                      <Typography>
                        Fiszki to narzędzie do wielu metod (spaced repetition,
                        active recall) i tak samo dobrze sprawdzają się gdy
                        uczymy się w przerwach. Zadajesz pytanie na jednej
                        stronie, odpowiedź piszesz na drugiej, łatwo je ze sobą
                        zabrać lub stworzyć w aplikacji.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">FISZKI AUDIO</Typography>
                      <Typography>
                        Nagrania z pytaniami lub kluczowymi treściami, które
                        odtwarzasz, gdy nie możesz pisać np. W drodze. Nagrania
                        możesz z łatwością wykonać samemu. Możesz też połączyć
                        dźwięk z tekstem lub obrazem, co wzmocni tylko
                        zapamiętywanie.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Flashcards.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">
                    PRZEGLĄD PYTAŃ ZAMIAST NOTATEK
                  </Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/TestQuestions.jpg" />
              </FadeIn>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Stack spacing={3}>
                    <Typography variant="h5">
                      NA CZYM POLEGA? JAK KORZYSTAĆ?
                    </Typography>
                    <Typography>
                      W tej metodzie bazujesz na pytaniach, zamiast robić
                      notatki przeglądasz pytania dotyczące materiały (które
                      możesz zadać sam/a), i starasz się od razu na nie
                      odpowiedzieć. Wpasowuje się to w krótkie sesje i działa
                      aktywnie.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>

            <EmptySpace />
            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">SPRAWDŹ INNE METODY</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <FadeIn delay={100}>
              <MethodCards skip={3} />
            </FadeIn>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default Meantime;
