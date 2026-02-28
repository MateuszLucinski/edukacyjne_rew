import { styled, type SxProps, type Theme } from "@mui/material/styles";

const LogoWrapper = styled("span")(() => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  height: "1.5em",
  fontSize: "1.5rem",
  verticalAlign: "middle",
}));

const LogoImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

function Icon({src, alt, sx} : {src: string, alt: string, sx?:SxProps<Theme>}) {
  return (
    <LogoWrapper sx={sx} >
      <LogoImg src={src} alt={alt}/>
    </LogoWrapper>
  );
}

export default Icon;
