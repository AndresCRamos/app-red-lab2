"use client";

import MainTitle from "@/MainTitle";
import { Button, Group, Paper, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

const extraerVocales = (texto: string): string => {
  return texto
    .toLowerCase()
    .normalize("NFD") // Normaliza vocales con tilde
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^aeiou/ ]/g, "-");
};

const VocalListPage = () => {
  const [result, setResult] = useState<null | string>(null);

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
    const vocales = extraerVocales(values.frase);
    setResult(vocales);
  };

  return (
    <section>
      <MainTitle title="Extraer vocales del texto" />
      <Paper shadow="md" radius="md" p="lg" mt="md" withBorder>
        <form
          onSubmit={form.onSubmit(handleSubmit, () => {
            setResult(null);
          })}
        >
          <Stack>
            <TextInput
              label="Texto"
              placeholder="Ej: Mi mama me mima"
              {...form.getInputProps("frase")}
            />
            <Group justify="flex-end">
              <Button type="submit">Extraer vocales</Button>
            </Group>
            {result !== null && (
              <Text fw="bold" c="teal">
                Vocales encontradas: {result}
              </Text>
            )}
          </Stack>
        </form>
      </Paper>
    </section>
  );
};

export default VocalListPage;
