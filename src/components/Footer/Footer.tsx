import { Button, Text } from "@mantine/core";

import { IconBrandGithubFilled } from "@tabler/icons-react";
import classNames from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={classNames.footer}>
      <Text fw={"bold"}>Andres Ramos</Text>

      <Button
        leftSection={<IconBrandGithubFilled size={16} />}
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/AndresCRamos/app-red-lab2"
        size="xs"
        color="dark"
      >
        Código en GitHub
      </Button>
    </div>
  );
};
