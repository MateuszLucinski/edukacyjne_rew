import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../ui/HeaderBox";
import MainBox from "../ui/MainBox";
import FadeIn from "../ui/FadeIn";
import { Item } from "../ui/Item";

import Footer from "../ui/Footer";
import ImageItem from "../ui/ImageItem";

import EmptySpace from "../ui/EmtpySpace";
import MethodCards from "./MethodCards";

function DeeperUnderstanding() {
  return (
    <>
      <Header
        image="/CalculatorNotebook.jpg"
        title="METODY POGŁĘBIAJĄCE ZROZUMIENIE"
        subtitle="Zrozum więcej, ucz się głębiej"
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
                  <Typography variant="h4">METODA FEYNMANA</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Feynman.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">NA CZYM POLEGA?</Typography>
                      <Typography>
                        Technika polega na wyjaśnianiu sobie materiału tak,
                        jakby tłumaczyło się go komuś bez wiedzy w danym temacie
                        (np. Dziecku). Jeśli nie potrafisz wytłumaczyć tematu
                        prosto - oznacza to, że nie zrozumiałeś go wystarczająco
                        dobrze.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">JAK KORZYSTAĆ?</Typography>
                      <Typography>
                        Wybierz konkretną rzecz w treści lub dane pojęcie,
                        napisz lub opowiedz ją jak najprostszymi słowami
                        następnie sprawdź co pominąłeś/ęłaś i powtórz
                        wyjaśnienie jeszcze raz.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Ta metoda Zmusza Cię do uproszczenia materiału i jego
                        logicznego uporządkowania.
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
                  <Typography variant="h4">
                    ELABORATIVE INTERROGATION
                  </Typography>
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
                        W tej metodzie zadajemy sobie pytania „DLACZEGO”, „JAK”
                        (Jak to działa?, dlaczego tak się dzieje?) i odpowiadamy
                        na nie w kontekście przerabianego materiału.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Dzięki tej metodzie łączymy aktualną wiedzę z nowymi
                        informacjami, tworząc połączenia łatwiejsze do
                        zapamiętania.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Interrogation.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">DUAL CODING</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/BookImages.jpg" />
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
                        Jest to łączenie tekstu lub werbalnych informacji z
                        obrazami, grafikami, schematami. Czytając tekst, miej
                        obok kartkę na której podczas czytania twórz na bieżąco
                        drobne obrazki, schematy, połączenie, skojarzenia/
                        podczas słuchania patrz na tekst który słyszysz/ podczas
                        słuchania patrz na obrazki dotyczące materiału. (Nie
                        przeglądaj tiktoka).
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Informacja przechodzi równocześnie przez system
                        werbalny* i wizualny, ( coś na kształt dwóch zmysłów
                        jednocześnie) co sprzyja tworzeniu mocniejszych obrazów
                        pamięciowych.
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
                  <Typography variant="h4">MAPA MYŚLI</Typography>
                </Item>
              </FadeIn>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">NA CZYM POLEGA?</Typography>
                      <Typography>
                        Jest to wizualna* technika rysowania pojęć i ich
                        powiązań wokół centralnego tematu, co ułatwia
                        organizację informacji i ich kojarzenie.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">JAK KORZYSTAĆ?</Typography>
                      <Typography>
                        Napisz na środku kartki główne pojęcie, poprowadź od
                        niego gałęzie z podtematami, podtematy możesz podzielić
                        na następne części. Dodawaj obrazki, kolory, symbole I
                        skojarzenia.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/ThoughtMap.jpg" />
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
              <MethodCards skip={1} />
            </FadeIn>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default DeeperUnderstanding;
