import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../ui/HeaderBox";
import MainBox from "../ui/MainBox";
import FadeIn from "../ui/FadeIn";
import { Item } from "../ui/Item";

import Footer from "../ui/Footer";
import ImageItem from "../ui/ImageItem";

import EmptySpace from "../ui/EmtpySpace";
import MethodCards from "./MethodCards";

function LastMinute() {
  return (
    <>
      <Header
        image="/LastMinute.jpg"
        title="NAUKA NA OSTATNIĄ CHWILĘ"
        subtitle="Ratunkowe strategie przed sprawdzianem"
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
                  <Typography variant="h4">ACTIVE RECALL TURBO</Typography>
                </Item>
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
                      Aktywne przypominanie na ostatnią chwilę może polegać na
                      zamknięciu notatek I próbie natychmiastowego odtworzenia
                      najważniejszych informacji (jak najszybciej) lub
                      powtarzaniu fiszek (pytanie-odpowiedź) w pętli – działa to
                      dużo lepiej niż czytanie tekstu w kółko.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/TurboRecall.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">BLURTING</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Blurting.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        NA CZYM POLEGA? JAK KORZYSTAĆ
                      </Typography>
                      <Typography>
                        W tej metodzie wypisujesz wszystko co pamiętasz z danego
                        tematu – szybko i bez przygotowania. Dzięki temu
                        aktywnie przywołujesz informacje ale w przyspieszonym
                        tempie
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Stymuluje warunki pracy pod presją – jak na egzaminie,
                        oraz pozwala znaleźć i skupić się na najważniejszych
                        brakach.
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
                  <Typography variant="h4">HIGH-YIELD STUDYING </Typography>
                </Item>
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
                      Strategia polega na wyłapaniu najważniejszych informacji z
                      tekstu i uczeniu się ich priorytetowo – od najważniejszych
                      fragmentów do tych mniej ważnych ale wciąż kluczowych.
                      Oszczędza to czas, ponieważ nie skupiamy się na wszystkim
                      co pojawia się w materiale.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/HighYeld.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">CHEATSHEETS</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Cheatsheets.png" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">
                        NA CZYM POLEGA? JAK KORZYSTAĆ
                      </Typography>
                      <Typography>
                        Metoda polega na przygotowaniu „ściąg” w dużym formacie
                        z najważniejszymi informacjami. Tworzysz swój arkusz
                        „cheatsheet” spisują kluczowe treści – formułki,
                        definicje, wzory, daty – by przypomnieć sobie wszystko z
                        arkusza tuż przed testem.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Redukuje materiał do tego co absolutnie niezbędne - jest
                        to kluczowe przy ograniczonym czasie nauki.
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
              <MethodCards skip={2} />
            </FadeIn>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default LastMinute;
