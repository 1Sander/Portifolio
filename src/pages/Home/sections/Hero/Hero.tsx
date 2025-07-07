import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    minHeight: "100vh", // <- ajustado
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
        paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
        paddingTop: "0",
    },
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.main}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary" variant="h1" textAlign="center" pb={2}>Wallace Sander</Typography>
                            <Typography color="primary" variant="h2" textAlign="center" >FullStack Developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    <StyledButton
                                    component="a"
                                    href="/files/WallaceSanderCV.pdf"
                                    onClick={() => console.log("CV viewed")}
                                    >
                                    <DownloadIcon />
                                    <Typography>View CV</Typography>
                                    </StyledButton>

                                </Grid>
                                <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                                    <StyledButton href="mailto:wallacesander@email.com">
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
