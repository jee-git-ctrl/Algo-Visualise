import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Box } from '@mui/material'
import DisplayPage from './components/DisplayPage'
import { createAppTheme } from './theme'
import useSortStore from './utils/sortStore'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  const { darkMode } = useSortStore();
  const theme = createAppTheme(darkMode);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}>
        <DisplayPage />
      </Box>
    </ThemeProvider>
  )
}

export default App
