import { Affix, Button, Container } from "@mantine/core";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <>
      <Container mt={"xl"}>{children}</Container>;
      <Affix position={{ bottom: 70, right: 20 }}>
        <Button component={Link} href={`/`}>
          Volver
        </Button>
      </Affix>
    </>
  );
}
