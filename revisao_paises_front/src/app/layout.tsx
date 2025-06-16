'use client'; // Adicione esta linha no topo do arquivo

import { CacheProvider } from "@emotion/react";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Container, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import createCache from "@emotion/cache";
import { ReactNode, useMemo } from "react";

const theme = createTheme();

export default function RootLayout({ children }: { children: ReactNode }) {
  // Criar cache memoizado para evitar recriação desnecessária
  const emotionCache = useMemo(() => 
    createCache({ key: 'css', prepend: true }), 
  []);

  return (
    <html lang="en">
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Barra de navegação */}
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div">
                  API de Países
                </Typography>
              </Toolbar>
            </AppBar>
            
            {/* Conteúdo principal */}
            <Box component="main" sx={{ minHeight: 'calc(100vh - 120px)', py: 4 }}>
              <Container>{children}</Container>
            </Box>
            
            {/* Rodapé */}
            <Box component="footer" sx={{ py: 3, backgroundColor: 'primary.main', color: 'white' }}>
              <Container>
                <Typography variant="body1" align="center">
                  © {new Date().getFullYear()} API de Países - Todos os direitos reservados
                </Typography>
              </Container>
            </Box>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}