import { Burger } from "@mantine/core";
import classes from "./Header.module.css";

interface NavbarProps {
  mobileOpen: boolean;
  mobileToggle: () => void;
  desktopOpen: boolean;
  desktopToggle: () => void;
}

export const Header = ({
  mobileOpen,
  mobileToggle,
  desktopOpen,
  desktopToggle,
}: NavbarProps) => {
  return (
    <div className={classes.header}>
      <Burger opened={mobileOpen} onClick={mobileToggle} hiddenFrom="sm" />
      <Burger opened={desktopOpen} onClick={desktopToggle} visibleFrom="sm" />
    </div>
  );
};
