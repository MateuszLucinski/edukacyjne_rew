import { Item } from "./Item";

function ImageItem({ image }: { image: string }) {
  return (
    <Item
      elevation={5}
      sx={{
        width: "100%",
        height: {xs: "30vh", md:"100%"},
        boxSizing: "border-box",
        backgroundImage: `linear-gradient( 135deg,
                    rgba(227, 207, 255, 0) 0%, rgba(227, 207, 255, 0.5) 65%, rgba(201, 208, 255, 0.5) 100%
                      ) ,url(${image})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}

export default ImageItem;
