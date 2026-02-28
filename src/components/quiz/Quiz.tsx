import { useEffect, useState } from "react";
import type { Question } from "../../types/types";
import ShowResult from "./ShowResult";
import Icon from "../ui/Icon";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import theme from "../../theme/theme";
import React from "react";

import CatLoading from "../../assets/images/Ui/cat_loading.webp";

function Quiz() {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currId, setCurrId] = useState<number>(0);
  const [selectedPoints, setSelectedPoints] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  const submitQuestion = () => {
    if (selectedPoints == 0) {
      alert("Wybierz odpowiedź :3");
    } else {
      const nxtPts = points + selectedPoints;
      setPoints(nxtPts);
      if (currId == questions.length - 1) {
        setIsFinished(true);
      }
      setCurrId((prev) => prev + 1);
      setSelectedPoints(0);
    }
  };

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextPoints: number,
  ) => {
    if (nextPoints !== null) {
      setSelectedPoints(nextPoints);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      fetch("/edukacyjne_rew/data/Questions.json")
        .then((res) => res.json())
        .then((data) => {
          setQuestions(data);
          setLoading(false);
        });
    };
    fetchQuestions();
  }, []);

  if (isFinished) {
    return <ShowResult points={points} />;
  }
  if (loading) {
    return (
      <Icon
        src={CatLoading}
        alt="Here is a cat while we load your questions :3"
        sx={{ height: "14rem" }}
      />
    );
  }
  return (
    <Box key={currId} padding={"1.5rem"}>
      <Stack gap={3} sx={{ textAlign: "center" }}>
        <Typography variant="h5">{questions[currId]?.content}</Typography>
        <ToggleButtonGroup
          orientation="vertical"
          value={selectedPoints}
          exclusive
          onChange={handleChange}
          fullWidth
          sx={{
            gap: 1,
            "& .MuiToggleButtonGroup-grouped": {
              borderColor: "divider",
              borderRadius: 1,
            },
          }}
        >
          {questions[currId]?.answers.map((a, index) => (
            <ToggleButton
              key={index}
              value={a.points}
              sx={{
                textTransform: "none",
                backgroundColor: theme.palette.secondary.main,
                color: "white",

                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },

                "&.Mui-selected": {
                  backgroundColor: theme.palette.secondary.dark,
                  color: "white",
                },

                "&.Mui-selected:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              {a.answer}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Button
          onClick={submitQuestion}
          variant="text"
          sx={{
            color: "white",
            "&:hover": {
              color: "#d2d2d2",
            },
          }}
        >
          {currId < questions.length - 1 && "Następne pytanie"}
          {currId == questions.length - 1 && "Sprawdź wynik"}
        </Button>
      </Stack>
    </Box>
  );
}

export default Quiz;
