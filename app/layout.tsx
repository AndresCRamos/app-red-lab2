"use client";
import Footer from "@/Footer";
import Header from "@/Header";
import {
  AppShell,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { theme } from "../theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  const [mobileOpen, { toggle: mobileToggle }] = useDisclosure();
  const [desktopOpen, { toggle: desktopToggle }] = useDisclosure();

  const NavbarProps = { mobileOpen, mobileToggle, desktopOpen, desktopToggle };

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: { base: 50, md: 60, lg: 70 } }}
            navbar={{
              width: { base: 200, md: 300, lg: 400 },
              breakpoint: "sm",
              collapsed: { mobile: !mobileOpen, desktop: desktopOpen },
            }}
            footer={{ height: { base: 40, md: 50 } }}
          >
            <AppShell.Header>
              <Header {...NavbarProps} />
            </AppShell.Header>
            <AppShell.Navbar>Navbar</AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
            <AppShell.Footer>
              <Footer />
            </AppShell.Footer>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
