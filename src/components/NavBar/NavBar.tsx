import {
  AppBar,
  MenuItem,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Esquerda: título ou vazio */}
        <Box sx={{ flexGrow: 1 }}>
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 80,
              }}
            >
              {navLinks.map((item) => (
                <MenuItem
                  key={item.to}
                  component={Link}
                  to={item.to}
                  sx={{ color: "inherit" }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Box>
          )}
        </Box>

        {/* Direita: ícone no mobile */}
        {isMobile && (
          <>
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
            >
              <Box
                width={220}
                role="presentation"
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}
                sx={{ p: 2 }}
              >
                <List>
                  {navLinks.map((item) => (
                    <ListItem
                      key={item.to}
                      button
                      component={Link}
                      to={item.to}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
