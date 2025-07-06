import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";
import { Project } from "../../data/projectsData";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
    
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {project.description}
        </Typography>

        {project.stack?.length && (
          <Box mt={2} display="flex" gap={1} flexWrap="wrap">
            {project.stack.map((tech, index) => (
              <Chip key={index} label={tech} size="small" />
            ))}
          </Box>
        )}

        {project.link && (
          <Box mt={3}>
            <Button
              variant="outlined"
              href={project.link}
              target="_blank"
              rel="noopener"
              fullWidth
              sx={{
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Click Here
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
