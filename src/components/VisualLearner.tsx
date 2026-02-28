import { Container, Grid, Stack, Typography } from "@mui/material";
import { Item } from "./ui/Item";

import Header from "./ui/HeaderBox";
import MainBox from "./ui/MainBox";
import Footer from "./ui/Footer";
import FadeIn from "./ui/FadeIn";
import ImageItem from "./ui/ImageItem";
import EmptySpace from "./ui/EmtpySpace";

function VisualLearner() {
  const visualTraits = [
    { text: "LUBI CZYTAĆ, RYSOWAĆ, PISAĆ" },
    { text: "DOBRZE ZAPAMIĘTUJE INFORMACJE, KTÓRE PRZECZYTA" },
    { text: "DO NAUKI POTRZEBUJE CISZY I SPOKOJU" },
    { text: "MA DOBRE WYCZUCIE PRZESTRZENI" },
    { text: "ŁATWO ZAPAMIĘTUJE SZCZEGÓŁY" },
  ];

  const audioTraits = [
     { text: "ŚWIETNA PAMIĘĆ DO DŹWIĘKÓW, USŁYSZANYCH TREŚCI" },
    { text: "UCZY SIĘ GŁOŚNO CZYTAJĄC, WYPOWIADAJĄC NA GŁOS, NAGRYWAJĄC" },
    { text: "PŁYNNIE SIĘ WYPOWIADA, LUBI OPOWIADAĆ, KOMUNIKATYWNY" },
  ]

  return (
    <>
      <Header image="/VisualLearning.jpg" title="DLA WZROKOWCÓW I SŁUCHOWCÓW"  subtitle="Dopasuj naukę do swojego stylu"/>
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
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Stack spacing={3}>
                    <Typography variant="h4">WZROKOWIEC</Typography>
                    <Typography>
                      Wzrokowiec to osoba, która najlepiej postrzega świat
                      zmysłem wzroku, dlatego najbardziej interesuje ją to, co
                      może zobaczyć. Osoby, które są wzrokowcami będą w
                      większości dobre z ortografii a czytanie nie będzie dla
                      nich problemem.
                    </Typography>
                    <Typography>
                      Wzrokowcy dobrze zapamiętuje obrazki i ilustracje,
                      odtworzenie, w którym miejscu na stronie widział daną
                      informację nie jest dla nich problemem. uczą się tego co
                      zobaczą – przeczytane informacje, zobaczone wykresy lub
                      ilustracje.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/VisualDesk.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={12}>
              <FadeIn delay={100}>
                <Item
                  elevation={5}
                  sx={{
                    paddingLeft: { md: "20%" },
                    paddingRight: { md: "20%" },
                  }}
                >
                  <Typography variant="h5">CECHY WZROKOWCA</Typography>
                </Item>
              </FadeIn>
            </Grid>

            <FadeIn delay={100}>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "stretch",
                }}
                size={12}
              >
                {visualTraits.map((trait, index) => (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 12 / visualTraits.length }}
                    key={index}
                  >
                    <Item
                      elevation={5}
                      sx={{
                        minHeight: "10vh",
                        color: "white",
                        display: "flex",
                        boxSizing: "border-box",
                        height: "100%",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                        backgroundColor: "#532b88db",
                      }}
                    >
                      <Typography>{trait.text}</Typography>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </FadeIn>

            <EmptySpace />

            <Grid size={{ xs: 12, md: 7 }}>
              <FadeIn delay={100}>
                <ImageItem image="/AudioLearner.jpg" />
              </FadeIn>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FadeIn delay={100}>
                <Item elevation={5}>
                  <Stack spacing={3}>
                    <Typography variant="h4">SŁUCHOWIEC</Typography>
                    <Typography>
                      Słuchowiec to ktoś, kto uczy się słuchając i mówiąc,
                      pamięta to, co usłyszał. Słuchowiec zyska więcej, mając
                      możliwość bezpośredniego słuchania. Słuchając, często kiwa
                      głową, powtarza usłyszane słowa lub nawet całe zdania.
                      Zaskakujące jest jak wiele potrafi z takiego zapamiętać z
                      wykłady/lekcji.
                    </Typography>
                  </Stack>
                </Item>
              </FadeIn>
            </Grid>
            <Grid size={12}>
              <FadeIn delay={100}>
                <Item
                  elevation={5}
                  sx={{
                    paddingLeft: { md: "20%" },
                    paddingRight: { md: "20%" },
                  }}
                >
                  <Typography variant="h5">CECHY SŁUCHOWCA</Typography>
                </Item>
              </FadeIn>
            </Grid>

            <FadeIn delay={100}>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: "stretch",
                }}
                size={12}
              >
                {audioTraits.map((trait, index) => (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 12 / audioTraits.length }}
                    key={index}
                  >
                    <Item
                      elevation={5}
                      sx={{
                        minHeight: "10vh",
                        color: "white",
                        display: "flex",
                        boxSizing: "border-box",
                        height: "100%",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                        backgroundColor: "#532b88db",
                      }}
                    >
                      <Typography>{trait.text}</Typography>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </FadeIn>
          </Grid>
        </Container>
        <Footer />
      </MainBox>
    </>
  );
}

export default VisualLearner;
