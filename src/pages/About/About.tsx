import { Container, Grid, Typography, Box, Chip } from "@mui/material";
import ProfileImage from "../../assets/images/avatar.jpg"; // use sua imagem real

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "C#",
  "Unity",
  "MongoDB",
  "SQL",
  "Tailwind",
  "Material UI"
];

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f6f8", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          About Me
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Imagem */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={ProfileImage}
              alt="Wallace Sander"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 4,
              }}
            />
          </Grid>

          {/* Texto + Skills */}
          <Grid item xs={12} md={7}>
            <Typography variant="body1" paragraph>  
            I'm a full-stack developer focused on frontend, passionate about creating interfaces that combine functionality with clean design. I have experience with React, Unity and .NET APIs, and I enjoy working on both code and user experience.
            </Typography>

            <Typography variant="body1" paragraph>
              My goal is to build applications that are efficient, scalable and specific to use. I enjoy working in a team, exploring new technologies and continuously evolving as a dev.
            </Typography>

            <Box mt={4} display="flex" flexWrap="wrap" gap={1}>
              {skills.map((skill, index) => (
                <Chip key={index} label={skill} color="primary" variant="outlined" />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
