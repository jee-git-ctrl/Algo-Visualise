import { createTheme } from '@mui/material/styles';

// Custom theme generator function
export const createAppTheme = (darkMode) => {
  // Create base theme object
  const theme = createTheme({
    // Palette configuration
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2', // Adjust primary color based on mode
        contrastText: '#ffffff',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
        contrastText: '#ffffff',
      },
      success: {
        main: darkMode ? '#81c784' : '#4caf50',
        contrastText: '#ffffff',
      },
      error: {
        main: darkMode ? '#f44336' : '#d32f2f',
        contrastText: '#ffffff',
      },
      warning: {
        main: darkMode ? '#ffb74d' : '#f57c00',
        contrastText: '#ffffff',
      },
      info: {
        main: darkMode ? '#64b5f6' : '#2196f3',
        contrastText: '#ffffff',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      // Custom algorithm description's title-specific colors
      algorithm: {
        bubble: darkMode ? '#ff6090' : '#e57373',
        quick: darkMode ? '#82b1ff' : '#64b5f6',
        merge: darkMode ? '#8be9fd' : '#81c784',
        insertion: darkMode ? '#ffcf33' : '#ffb74d',
        selection: darkMode ? '#bd93f9' : '#ba68c8',
        heap: darkMode ? '#93f996' : '#65cd68'
      },
      // Ensure consistent text color in dark mode buttons
      action: {
        active: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.54)',
        hover: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
      },
      // Fix text color in dark mode
      text: {
        primary: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.87)',
        secondary: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
      }
    },
    // Typography settings
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h4: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
      button: {
        textTransform: 'none', // Prevent uppercase text in buttons
        fontWeight: 500,
      }
    },
  });

  // Create extended theme with component overrides
  return createTheme(theme, {
    components: {
      // Button component styles
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            boxShadow: darkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 1px 4px rgba(0,0,0,0.2)',
          },
          // Contained button
          contained: {
            color: '#ffffff', // White text for all contained buttons
            '&.Mui-disabled': {
              color: 'rgba(255, 255, 255, 0.5)',
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
            }
          },
          // Outlined button
          outlined: {
            borderWidth: '1.5px',
            '&.Mui-disabled': {
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.12)',
            }
          },
          // Text button
          text: {
            '&.Mui-disabled': {
              color: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.26)',
            }
          },
          // Colored contained buttons
          containedPrimary: {
            color: '#ffffff',
          },
          containedSecondary: {
            color: '#ffffff',
          },
          containedSuccess: {
            color: '#ffffff',
          },
          containedError: {
            color: '#ffffff',
          },
          containedInfo: {
            color: '#ffffff',
          },
          containedWarning: {
            color: '#ffffff',
          }
        },
        defaultProps: {
          disableElevation: true, // Remove default shadow, use custom one
        }
      },
      // Container component styles
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: {
              xs: 16,
              sm: 24,
              md: 32,
            },
            paddingRight: {
              xs: 16,
              sm: 24,
              md: 32,
            },
            // Subtle background tint for visual depth
            backgroundColor: darkMode 
              ? 'rgba(255, 255, 255, 0.02)'  // Slightly lighter in dark mode
              : 'rgba(0, 0, 0, 0.01)',        // Slightly darker in light mode
            // Smooth transition for background changes
            transition: 'background-color 0.3s ease-in-out',
            borderRadius: 8,
            // Optional spacing on large screens
            '@media (min-width: 1200px)': {
              marginTop: 16,
              marginBottom: 16,
            }
          },
          // Max width overrides
          maxWidthLg: {
            maxWidth: 1200,
            '@media (min-width: 1280px)': {
              maxWidth: 1280,
            }
          },
          maxWidthXl: {
            maxWidth: 1536,
          }
        }
      },
      // Card component styles
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 2px 10px rgba(0,0,0,0.1)',
            borderRadius: 8,
          }
        }
      },
      // Divider component styles
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
          }
        }
      },
      // Select component styles
      MuiSelect: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              opacity: 0.7,
            }
          }
        }
      },
      // InputLabel component styles
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.38)',
            }
          }
        }
      },
      // Paper component styles
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none', // Remove default background image
            transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
          }
        }
      },
      // List component styles
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 8,
            paddingBottom: 8,
          }
        }
      }
    }
  });
}; 