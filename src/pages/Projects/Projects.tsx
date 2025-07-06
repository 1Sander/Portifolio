import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa", // cor clara de fundo
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={5}>
          {projectsData.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
