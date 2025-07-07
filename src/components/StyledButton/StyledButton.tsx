import { styled } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

const StyledButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.main,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    transform: "scale(1.05)",
  },
}));

export default StyledButton;
