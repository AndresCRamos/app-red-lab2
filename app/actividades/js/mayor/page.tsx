"use client";

import IndicatorChip, { IndicatorStatus } from "@/IndicatorChip";
import MainTitle from "@/MainTitle";
import { Button, Group, Paper, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

const MayorNumeroPage = () => {
  const [result, setResult] = useState<null | string>(null);
  const [status, setStatus] = useState<IndicatorStatus>("neutral");

  const form = useForm({
    initialValues: {
      numero1: "",
      numero2: "",
    },
    validate: {
      numero1: (value) =>
        value.trim() === "" || isNaN(Number(value))
          ? "Ingresa un número válido"
          : null,
      numero2: (value) =>
        value.trim() === "" || isNaN(Number(value))
          ? "Ingresa un número válido"
          : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const n1 = parseFloat(values.numero1);
    const n2 = parseFloat(values.numero2);

    if (n1 === n2) {
      setResult("Ambos números son iguales.");
      setStatus("neutral");
    } else {
      const mayor = n1 > n2 ? n1 : n2;
      setResult(`El número mayor es: ${mayor}`);
      setStatus("success");
    }
  };

  return (
    <section>
      <MainTitle title="¿Cuál número es mayor?" />
      <Paper shadow="md" radius="md" p="lg" mt="md" withBorder>
        <form
          onSubmit={form.onSubmit(handleSubmit, () => {
            setResult(null);
            setStatus("fail");
          })}
        >
          <Stack>
            <TextInput
              label="Número 1"
              placeholder="Ej: 42"
              {...form.getInputProps("numero1")}
            />
            <TextInput
              label="Número 2"
              placeholder="Ej: 17"
              {...form.getInputProps("numero2")}
            />
            <Group justify="center">
              <Button type="submit">Comparar</Button>
            </Group>
            {result && (
              <Group justify="center">
                <IndicatorChip status={status} text={result} />
              </Group>
            )}
          </Stack>
        </form>
      </Paper>
    </section>
  );
};

export default MayorNumeroPage;
