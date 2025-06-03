import { Text } from "@mantine/core";

export type IndicatorStatus = "success" | "fail" | "neutral" | "loading";

interface IndicatorChipProps {
  status: IndicatorStatus;
  text: string;
}

const statusStyles: Record<
  IndicatorStatus,
  { bg: string; color: string; border: string }
> = {
  success: { bg: "green.1", color: "green", border: "1px solid green" },
  fail: { bg: "red.1", color: "red", border: "1px solid red" },
  neutral: { bg: "gray.1", color: "gray", border: "1px solid gray" },
  loading: { bg: "orange.1", color: "orange", border: "1px orange gray" },
};

export const IndicatorChip = ({ status, text }: IndicatorChipProps) => {
  const { bg, color, border } = statusStyles[status];

  return (
    <Text
      bg={bg}
      c={color}
      bd={border}
      span
      style={{
        borderRadius: "16rem",
        paddingInline: "0.5rem",
      }}
    >
      {text}
    </Text>
  );
};
