import { Accordion, Paper, Stack } from "@mantine/core";

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
];

export const Navbar = () => {
  return (
    <Accordion>
      {activities.map((activity) => (
        <Accordion.Item key={activity.slug} value={activity.slug}>
          <Accordion.Control>{activity.group}</Accordion.Control>
          <Accordion.Panel>
            <Stack gap={0}>
              {activity.list.map((task) => (
                <Paper
                  key={task.slug}
                  withBorder
                  p="xs"
                  style={{ cursor: "pointer" }}
                >
                  {task.title}
                </Paper>
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
