import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#111", color: "#fff", py: 4, mt: 10 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Sander. All rights reserved.
          </Typography>

          <Stack   direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            textAlign={{ xs: "center", sm: "inherit" }}>
            <IconButton
              href="https://github.com/1Sander"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/wallace-sander-2510bb246/"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:wallacesander@email.com"
              sx={{ color: "#fff" }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
