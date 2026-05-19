"use client";

import { createTheme } from "@mui/material/styles";

// Ember Sterling light theme — MUI components on a white canvas.
// Palette mirrors tailwind.config.ts (ink-50 = darkest text, ink-950 = white).
const ember = {
  50: "#fff7ed",
  100: "#ffedd5",
  200: "#fed7aa",
  300: "#fdba74",
  400: "#fb923c",
  500: "#f97316",
  600: "#ea580c",
  700: "#c2410c",
  800: "#9a3412",
  900: "#7c2d12"
};

const ink = {
  50: "#0a0a0b",
  100: "#18181b",
  200: "#27272a",
  300: "#3f3f46",
  400: "#71717a",
  500: "#a1a1aa",
  600: "#d4d4d8",
  700: "#e4e4e7",
  800: "#f1f5f9",
  900: "#f8fafc"
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      light: ember[400],
      main: ember[500],
      dark: ember[700],
      contrastText: "#ffffff"
    },
    secondary: { main: ink[50], contrastText: "#ffffff" },
    background: { default: "#ffffff", paper: "#ffffff" },
    text: { primary: ink[50], secondary: ink[400], disabled: ink[500] },
    divider: "rgba(15, 23, 42, 0.08)",
    grey: ink
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "var(--font-sans), Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
    h1: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.025em" },
    h2: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.025em" },
    h3: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.02em" },
    h4: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600 },
    h5: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600 },
    h6: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600 },
    overline: { fontFamily: "var(--font-mono), JetBrains Mono, monospace", letterSpacing: "0.2em" },
    caption: { fontFamily: "var(--font-mono), JetBrains Mono, monospace" },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
    body1: { lineHeight: 1.65, color: ink[200] },
    body2: { lineHeight: 1.6, color: ink[300] }
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          paddingInline: 22,
          paddingBlock: 11,
          fontWeight: 600,
          transition: "transform .2s ease, box-shadow .2s ease, background-color .2s ease"
        },
        contained: {
          color: "#fff",
          background: `linear-gradient(180deg, ${ember[400]} 0%, ${ember[600]} 100%)`,
          boxShadow: `0 0 0 1px rgba(253,186,116,0.4) inset, 0 12px 30px -10px rgba(249,115,22,0.55)`,
          "&:hover": {
            background: `linear-gradient(180deg, ${ember[400]} 0%, ${ember[600]} 100%)`,
            boxShadow: `0 0 0 1px rgba(253,186,116,0.6) inset, 0 20px 50px -10px rgba(249,115,22,0.75)`,
            transform: "translateY(-1px)"
          }
        },
        outlined: {
          borderColor: ink[700],
          color: ink[50],
          backgroundColor: "#ffffff",
          "&:hover": {
            backgroundColor: ink[900],
            borderColor: ink[600],
            transform: "translateY(-1px)"
          }
        }
      }
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: "none", backgroundColor: "#ffffff" }
      }
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${ink[700]}`,
          backgroundColor: "#ffffff",
          transition: "transform .35s ease, box-shadow .35s ease, border-color .35s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 24px 50px -20px rgba(15,23,42,0.18)",
            borderColor: ink[600]
          }
        }
      }
    },
    MuiAccordion: {
      defaultProps: { elevation: 0, disableGutters: true, square: false },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${ink[700]}`,
          backgroundColor: "#ffffff",
          overflow: "hidden",
          marginBottom: 12,
          "&::before": { display: "none" },
          "&.Mui-expanded": {
            borderColor: "rgba(249,115,22,0.4)",
            boxShadow: "0 18px 50px -18px rgba(249,115,22,0.25)"
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingInline: 20,
          minHeight: 64,
          "& .MuiAccordionSummary-content": { margin: "16px 0" }
        },
        expandIconWrapper: { color: ember[400] }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: { root: { paddingInline: 20, paddingTop: 0, paddingBottom: 20, color: ink[300] } }
    },
    MuiTextField: { defaultProps: { variant: "outlined", fullWidth: true, size: "small" } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#ffffff",
          color: ink[50],
          "& fieldset": { borderColor: ink[700] },
          "&:hover fieldset": { borderColor: ink[600] },
          "&.Mui-focused fieldset": { borderColor: ember[500], borderWidth: 2 }
        },
        input: { paddingBlock: 10 }
      }
    },
    MuiInputLabel: { styleOverrides: { root: { color: ink[400], fontWeight: 500 } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600, letterSpacing: "0.04em" } } },
    MuiAvatar: { styleOverrides: { root: { fontFamily: "var(--font-display), Inter, sans-serif", fontWeight: 600 } } }
  }
});

export default theme;
