import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../ui/HeaderBox";
import MainBox from "../ui/MainBox";
import FadeIn from "../ui/FadeIn";
import { Item } from "../ui/Item";

import Footer from "../ui/Footer";
import ImageItem from "../ui/ImageItem";

import EmptySpace from "../ui/EmtpySpace";
import MethodCards from "./MethodCards";

function StudyingHelpers() {
  return (
    <>
      <Header image="/LotsOfBooks.jpg" title="METODY WSPOMAGAJĄCE NAUKĘ" subtitle="Techniki, które zwiększają efektywność"/>
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
                  <Typography variant="h4">POMODORO TECHNIQUE</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        NA CZYM POLEGA? JAK KORZYSTAĆ?
                      </Typography>
                      <Typography>
                        Jest to uczenie się w blokach 25 minut pracy/ 5 minut
                        przerwy, po 4 blokach robisz się dłuższą przerwę ok. 20
                        min.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Pomaga utrzymać wysoką koncentrację i wracać do
                        materiału bez zmęczenia.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/PomodoroClock.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">UCZENIE KOGOŚ INNEGO</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Teaching.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Stack spacing={3}>
                    <Typography variant="h5">
                      NA CZYM POLEGA? JAK KORZYSTAĆ
                    </Typography>
                    <Typography>
                      To specyficzna forma Active Recall i metody Feynmana - gdy
                      tłumaczysz materiał innej osobie, zmuszasz swój mózg do
                      głębszego przetworzenia informacji i znalezienia luk.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">MNEMOTECHNIKI </Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        NA CZYM POLEGA? JAK KORZYSTAĆ?
                      </Typography>
                      <Typography>
                        Techniki, które opierają się na skojarzeniach, obrazach
                        i skrótach. Najzwyczajniej, gdy uczymy się z jakiegoś
                        tekstu szukamy skojarzeń, śmiesznych rzeczy, które się
                        nam z tym kojarzą, układamy wierszyki, rymy, ułatwia to
                        zapamiętywanie.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Ułatwiają pracę pamięci roboczej i pomagają tworzyć
                        trwałe skojarzenia.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Mnemo.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">
                    PAŁAC PAMIĘCI (METODA LOCI)
                  </Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Climbing.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">OPIS</Typography>
                      <Typography>
                        Wyobrażasz sobie dobrze znane miejsce i „umieszczasz”
                        tam obrazki/treści, które chcesz zapamiętać — potem
                        wspinasz się myślami po tej trasie odzyskując
                        informacje. To jedna z najsilniejszych mnemotechnik.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">CO TO JEST</Typography>
                      <Typography>
                        Jedna z najsilniejszych technik pamięciowych polegająca
                        na przypisywaniu elementów do konkretnych miejsc w
                        wyobrażonym, dobrze znanym otoczeniu, jak własny dom,
                        korytarz, droga do kina itd.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">JAK DZIAŁA</Typography>
                      <Typography>
                        Gdy musisz sobie coś przypomnieć, „przechadzasz się”
                        mentalnie po swoim pałacu i „zbierasz” informacje z
                        przypisanych miejsc.
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
                  <Stack spacing={3}>
                    <Typography variant="h4">PODSUMOWANIE</Typography>
                    <Typography>
                      W nauce na ostatnią chwilę najważniejsze są kluczowe
                      informacje i aktywne przypominanie materiału
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">SPRAWDŹ INNE METODY</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <FadeIn delay={100}>
              <MethodCards skip={4} />
            </FadeIn>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default StudyingHelpers;
