import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // A green shade symbolizing growth and learning
      contrastText: "#ffffff", // White text for better readability
    },
    secondary: {
      main: "#ff9800", // A vibrant orange to indicate experimentation and energy
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f6f8", // A light gray background for a clean look
      paper: "#ffffff", // White for cards and modals
    },
    text: {
      primary: "#212121", // Dark gray for main text
      secondary: "#757575", // Lighter gray for secondary text
    },
    success: {
      main: "#81c784", // Green for success states, like completed tasks
    },
    error: {
      main: "#e57373", // Red for errors or warnings
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Clean and professional font
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded buttons for a friendly feel
          textTransform: "none", // Avoid uppercase for better readability
        },
        containedPrimary: {
          backgroundColor: "#4caf50",
          "&:hover": {
            backgroundColor: "#388e3c", // Darker green on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#4caf50",
          color: "#ffffff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Smooth corners for cards
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        },
      },
    },
  },
});

export default theme;
