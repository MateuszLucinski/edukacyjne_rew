import { Box } from "@mui/material";

function MainBox({children} : {children : React.ReactNode;}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `
      linear-gradient(
        rgba(227, 207, 255, 1) 0%, rgba(201, 208, 255, 1) 65%, rgb(183, 213, 225) 100%
      )
    `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          margin: 0,
        }}
      >{children}</Box>
    </>
  );
}

export default MainBox;
