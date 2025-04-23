import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    algorithm: {
      bubble: string;
      quick: string;
      merge: string;
      insertion: string;
      selection: string;
      heap: string;
    }
  }
  
  interface PaletteOptions {
    algorithm?: {
      bubble?: string;
      quick?: string;
      merge?: string;
      insertion?: string;
      selection?: string;
      heap?: string;
    }
  }
} 