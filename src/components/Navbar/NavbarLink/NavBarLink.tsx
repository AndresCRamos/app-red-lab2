import { Button } from "@mantine/core";
import Link from "next/link";

interface NavBarLinkProps {
  slug: string;
  title: string;
  group: string;
}

export const NavBarLink = ({ group, slug, title }: NavBarLinkProps) => {
  return (
    <>
      <Button
        variant="subtle"
        color="black"
        fw={400}
        size="md"
        radius={0}
        component={Link}
        href={`/actividades/${group}/${slug}`}
      >
        {title}
      </Button>
    </>
  );
};
