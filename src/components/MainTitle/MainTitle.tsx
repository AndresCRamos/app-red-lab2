import { Title } from "@mantine/core";
import classNames from "./MainTitle.module.css";

interface MainTitleProps {
  title: string;
}

export const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <Title order={1} className={classNames.main_title}>
      {title}
    </Title>
  );
};
