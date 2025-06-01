import { Accordion, Stack } from "@mantine/core";
import classnames from "./Navbar.module.css";
import { NavBarLink } from "./NavbarLink/NavBarLink";
const activities = [
  {
    group: "JavaScript",
    slug: "js",
    list: [
      {
        title: "¿Es palindromo?",
        slug: "palindromo",
      },
      {
        title: "Numero mayor",
        slug: "mayor",
      },
      {
        title: "Lista de vocales",
        slug: "vocal-list",
      },
      {
        title: "Conteo de vocales",
        slug: "vocal-conteo",
      },
    ],
  },
  {
    group: "AJAX",
    slug: "ajax",
    list: [
      {
        title: "Recuperar url",
        slug: "url",
      },
      {
        title: "Mostrar pagina",
        slug: "fetch-pagina",
      },
    ],
  },
];

export const Navbar = () => {
  return (
    <Accordion classNames={classnames}>
      {activities.map((activity) => (
        <Accordion.Item key={activity.slug} value={activity.slug}>
          <Accordion.Control ta={"center"}>{activity.group}</Accordion.Control>
          <Accordion.Panel>
            <Stack gap={0}>
              {activity.list.map((task) => (
                <NavBarLink
                  group={activity.slug}
                  slug={task.slug}
                  title={task.title}
                  key={activity.slug + "." + task.slug}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
