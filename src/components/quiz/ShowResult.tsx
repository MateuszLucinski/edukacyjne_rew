import { useEffect, useState } from "react";
import type { Result } from "../../types/types";
import Icon from "../ui/Icon";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../theme/theme";

import CatLoading from "../../assets/images/Ui/cat_loading.webp"

function ShowResult({ points }: { points: number }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [reuslts, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);
      fetch("../../assets/data/Results.json")
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        });
    };
    getResult();
  }, []);

  let answer = 0;
  if (points < 25) answer = 0;
  if (points >= 25 && points < 36) answer = 1;
  if (points >= 36 && points < 47) answer = 2;
  if (points >= 47 && points < 58) answer = 3;
  if (points >= 58) answer = 4;

  if (loading) {
    return <Icon src={CatLoading} alt="Here is a cat while we load your result :3" sx={{height:'14rem'}}/>;
  }
  return (
    <Box padding={"3rem"}>
      <Stack textAlign="center" spacing={3}>
        <Typography variant="h5">Polecamy dla Ciebie:</Typography>
        <Link to={reuslts.at(answer)?.link ?? "/"}>
          <Button variant="contained" sx={{backgroundColor:theme.palette.secondary.main}}>{reuslts.at(answer)?.result}</Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default ShowResult;
