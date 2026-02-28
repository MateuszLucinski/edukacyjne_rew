import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LongTerm from "./components/studyingMethods/LongTerm";
import VisualLearner from "./components/VisualLearner";
import DrawerAppBar from "./components/ui/NavBar/NavBar";
import LastMinute from "./components/studyingMethods/LastMinute";
import Meantime from "./components/studyingMethods/Meantime";
import StudyingHelpers from "./components/studyingMethods/StudyingHelpers";
import StudyingSpace from "./components/StudyingSpace";
import DeeperUnderstanding from "./components/studyingMethods/DeeperUnderstanding";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <ScrollTop/>
          <DrawerAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studying-space" element={<StudyingSpace />} />
            <Route path="/long-term" element={<LongTerm />} />
            <Route
              path="/deeper-understanding"
              element={<DeeperUnderstanding />}
            />
            <Route path="/last-minute" element={<LastMinute />} />
            <Route path="/meantime" element={<Meantime />} />
            <Route path="/studying-heplers" element={<StudyingHelpers />} />
            <Route path="/visual-learner" element={<VisualLearner />} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </>
  );
}

export default App;
