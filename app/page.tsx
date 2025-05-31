import MainTitle from "@/MainTitle";
import { Container, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <Container mt={"xl"}>
      <MainTitle title="Desarrollo de aplicaciones en red: Laboratorio 2" />
      <Text>
        Esta es una pagina con los ejercicios de la materia de "Desarrollo de
        aplicaciones en Red", relacionadas al Laboratorio 2: Tecnologías
        JavaScript y AJAX
      </Text>
      <Text>Usando el menu, se puede acceder a diferentes ejercicios</Text>
    </Container>
  );
}
