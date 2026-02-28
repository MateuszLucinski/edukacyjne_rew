import { Container } from "@mui/material"
import theme from "../../theme/theme"

function Footer(){
    const thisYear= new Date().getFullYear();

    return(
        <> <Container sx={{ padding:"1.5rem", textAlign:"center", color:theme.palette.text.secondary}}> © {thisYear} Edukacyjne rewolucje</Container></>
    )
}

export default Footer