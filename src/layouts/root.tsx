import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: any }) {
  // Note, this is extremely bare because at the moment there aren't a lot of pages
  // and the two pages that exists are completely different
  return (
    <>
      {/* <Helmet /> */}
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <QueryClientProvider client={queryClient}>
        >{children}
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </>
  );
}
