import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

function FadeIn({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Fade in={inView} timeout={800} style={{ transitionDelay: `${delay}ms` }}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
      </Fade>
    </div>
  );
}

export default FadeIn;
