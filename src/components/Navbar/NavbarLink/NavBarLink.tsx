import { Button } from "@mantine/core";

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
        component="a"
        href={`/${group}/${slug}`}
      >
        {title}
      </Button>
    </>
  );
};
