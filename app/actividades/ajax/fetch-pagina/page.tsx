"use client";

import IndicatorChip from "@/IndicatorChip";
import MainTitle from "@/MainTitle";
import {
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";

const FetchUrlPage = () => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("No iniciada");
  const [headers, setHeaders] = useState<Record<string, string>>({});
  const [body, setBody] = useState("");
  const [httpStatusCode, setHttpStatusCode] = useState<number | null>(null);
  const [httpStatusMsg, setHttpStatusMsg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const handleFetch = async () => {
    setStatus("Cargando...");
    setError(null);
    setHeaders({});
    setBody("");
    setHttpStatusCode(null);
    setHttpStatusMsg("");

    try {
      const response = await fetch(url);

      const isErrorStatus = !response.ok;

      setStatus(isErrorStatus ? "Error" : "Completada");
      setHttpStatusCode(response.status);
      setHttpStatusMsg(response.statusText);

      const allHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        allHeaders[key] = value;
      });
      setHeaders(allHeaders);

      const content = await response.text();
      setBody(content);

      if (isErrorStatus) {
        setError("La respuesta del servidor indica un error.");
      }
    } catch (err: any) {
      setStatus("Error");
      setError(err.message || "Ocurrió un error inesperado");
    }
  };

  return (
    <section>
      <MainTitle title="Ver contenido de una URL" />
      <Paper withBorder shadow="md" p="lg" mt="md">
        <Stack>
          <TextInput
            label="URL"
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
          />
          <Group justify="center">
            <Button onClick={handleFetch}>Mostrar Contenidos</Button>
          </Group>

          <Divider label="Estado de la petición" />
          <Flex justify="center" align="center" gap="md" direction="column">
            <IndicatorChip
              status={
                status === "Cargando..."
                  ? "neutral"
                  : httpStatusCode &&
                      httpStatusCode >= 200 &&
                      httpStatusCode < 400
                    ? "success"
                    : "fail"
              }
              text={
                httpStatusCode !== null
                  ? `${httpStatusCode} ${httpStatusMsg}`
                  : status
              }
            />

            {error && (
              <Text c="red" fw="bold">
                {error}
              </Text>
            )}
          </Flex>

          <Divider label="Cabeceras HTTP de la respuesta" />
          <Textarea
            value={Object.entries(headers)
              .map(([k, v]) => `${k}: ${v}`)
              .join("\n")}
            autosize
            minRows={4}
            readOnly
          />

          <Divider label="Contenidos de la respuesta" />
          <Textarea value={body} minRows={10} autosize readOnly />
        </Stack>
      </Paper>
    </section>
  );
};

export default FetchUrlPage;
