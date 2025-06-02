"use client";
import MainTitle from "@/MainTitle";
import {
  Button,
  Group,
  List,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

type VocalesConteo = Record<string, number>;

const contarVocales = (texto: string): VocalesConteo => {
  const conteo: VocalesConteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  const limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const char of limpio) {
    if (conteo.hasOwnProperty(char)) {
      conteo[char]++;
    }
  }

  return conteo;
};

const VocalCountPage = () => {
  const [result, setResult] = useState<null | VocalesConteo>(null);

  const form = useForm({
    initialValues: {
      frase: "",
    },
    validate: {
      frase: (value) =>
        value.trim().length === 0 ? "Escribe un texto para analizar" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const resultado = contarVocales(values.frase);
    setResult(resultado);
  };

  return (
    <section>
      <MainTitle title="Conteo de vocales" />
      <Paper shadow="md" radius="md" p="lg" mt="md" withBorder>
        <form onSubmit={form.onSubmit(handleSubmit, () => setResult(null))}>
          <Stack>
            <TextInput
              label="Texto"
              placeholder="Ej: Hoy es un gran día"
              {...form.getInputProps("frase")}
            />
            <Group justify="flex-end">
              <Button type="submit">Contar vocales</Button>
            </Group>
            {result && (
              <List spacing="xs" mt="sm">
                {Object.entries(result).map(([vocal, cantidad]) => (
                  <List.Item key={vocal}>
                    <Text span fw={500}>
                      {vocal.toUpperCase()}
                    </Text>
                    : {cantidad}
                  </List.Item>
                ))}
              </List>
            )}
          </Stack>
        </form>
      </Paper>
    </section>
  );
};

export default VocalCountPage;
