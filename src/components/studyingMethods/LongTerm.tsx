import { Container, Grid, Stack, Typography } from "@mui/material";
import Header from "../ui/HeaderBox";
import MainBox from "../ui/MainBox";
import FadeIn from "../ui/FadeIn";
import { Item } from "../ui/Item";

import Footer from "../ui/Footer";
import ImageItem from "../ui/ImageItem";

import EmptySpace from "../ui/EmtpySpace";
import MethodCards from "./MethodCards";

function LongTerm() {
  return (
    <>
      <Header image="/LongTermBackground.jpg" title="NAUKA DŁUGOTERMINOWA" subtitle="Zapamiętuj na lata, nie na dni" />
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
                  <Typography variant="h4">ACTIVE RECALL</Typography>
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
                        Ta metoda bazuje na samodzielnym przywoływaniu
                        informacji z pamięci, np. Odpowiadanie na własne pytania
                        dotyczące tekstu lub wymienianiu wszystkich
                        zapamiętanych informacji.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">JAK KORZYSTAĆ?</Typography>
                      <Typography>
                        Przeczytaj treść którą musisz się nauczyć, w trakcie
                        czytania możesz zapisywać sobie pytania. Po przeczytaniu
                        tekstu zamknij książkę/zeszyt i wymień wszystko co
                        pamiętasz, nie musi to być dokładne, mówisz (lub
                        zapisujesz) to co pamiętasz. Zapisuj pytania na które
                        nie znałeś odpowiedzi i/lub otwórz książkę i zapisz
                        informacje które Ci umknęło. Dzięki temu wiesz na czym
                        się skupić a mózg lepiej zapamięta informacje które
                        wcześniej pominął
                      </Typography>
                      <Typography>
                        Możesz użyć też fiszek – na jednej stronie zapisz
                        pytanie a na drugiej odpowiedź (wcale nie musi być
                        krótka)
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Aktywne testowanie siebie działa wzmacnia pamięć
                        znacznie bardziej niż bierne* czytanie – na dłuższy
                        okres informacje są lepiej zapamiętane dlatego, że mózg
                        „ćwiczy odtwarzanie” a nie tylko rozpoznawanie
                        materiału.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/ActiveRecall.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace />

            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Typography variant="h4">SPACED REPETITION</Typography>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/SpacedRepetition.jpg" />
              </FadeIn>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">NA CZYM POLEGA?</Typography>
                      <Typography>
                        Technika wymaga systematycznych powtórek materiału w
                        odstępach czasu które rosną. Dzięki temu informacje
                        przypominane są zanim je zapomnisz, utrwalasz wiedzę,
                        nie powtarzając nadmiernie materiału i przekształcasz ją
                        w pamięć długotrwałą
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">JAK KORZYSTAĆ?</Typography>
                      <Typography>
                        Rozpisz harmonogramu powtórek danego materiału np. 1
                        dzień – 3 dzień – tydzień – 2 tygodnie – miesiąc – 3
                        miesiące itd. Tutaj także możesz korzystać z fiszek (np.
                        Aplikacja Quizlet)
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        (tzw. Spacing effect) mózg lepiej zapamiętuje informacje
                        rozłożone w czasie. (przeciwieństwo zakuwanie „na raz”).
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
                  <Typography variant="h4">INTERLEAVING </Typography>
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
                        Ta metoda oparta jest na przeplataniu tematów, zagadnień
                        i różnych rodzajów zadań. Zamiast np. liczyć zadania
                        tylko z geometrii (jednego działu), zamień je na kilka
                        zadań z trzech różnych tematów (pamiętaj że mówimy o
                        nauce długotrwałej nie na ostatnią chwilę do
                        sprawdzianu)
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
                <FadeIn delay={100}>
                  <Item elevation={5}>
                    <Stack spacing={3}>
                      <Typography variant="h5">DLACZEGO DZIAŁA?</Typography>
                      <Typography>
                        Mieszanie tematów wymusza na mózgu stałą aktywację,
                        przypominanie, ocenę i wybory strategii. Dzięki temu
                        lepiej rozumiemy zagadnienia i umiemy zastosować wiedzę
                        w różnych sytuacjach/zadaniach.
                      </Typography>
                    </Stack>
                  </Item>
                </FadeIn>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <ImageItem image="/Intervealing.jpg" />
              </FadeIn>
            </Grid>

            <EmptySpace/>
            <Grid size={12}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                    <Stack spacing={3}>
                        <Typography variant="h4">PODSUMOWANIE</Typography>
                        <Typography>Częste powtórki i testowanie siebie (quizami, testy, zadania) to klucz do długotrwałej wiedzy.</Typography>
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
            <FadeIn delay={100}><MethodCards skip={0}/></FadeIn>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default LongTerm;
