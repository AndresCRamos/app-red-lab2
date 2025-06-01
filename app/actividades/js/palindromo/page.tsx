"use client";
import IndicatorChip from "@/IndicatorChip";
import MainTitle from "@/MainTitle";
import { Button, Group, Paper, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

// Función para verificar si una frase es un palíndromo
const isPalindrome = (text: string) => {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

const PalindromoPage = () => {
  const [result, setResult] = useState<null | boolean>(null);

  const form = useForm({
    initialValues: {
      phrase: "",
    },

    validate: {
      phrase: (value) =>
        value.trim().length === 0 ? "Debes escribir una frase" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    setResult(isPalindrome(values.phrase));
  };

  return (
    <section>
      <MainTitle title="¿Es palíndromo?" />
      <Paper shadow="md" radius="md" p="lg" mt="md" withBorder>
        <form onSubmit={form.onSubmit(handleSubmit, () => setResult(null))}>
          <Stack>
            <TextInput
              label="Escribe una frase"
              {...form.getInputProps("phrase")}
            />
            <Group justify="center">
              <Button type="submit">Verificar</Button>
            </Group>
            {result !== null && (
              <Group justify="center">
                <IndicatorChip
                  result={result}
                  trueText="¡Sí! Es un palíndromo."
                  falseText="No, no es un palíndromo."
                />
              </Group>
            )}
          </Stack>
        </form>
      </Paper>
    </section>
  );
};

export default PalindromoPage;
