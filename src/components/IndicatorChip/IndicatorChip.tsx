import { Text } from "@mantine/core";

interface IndicatorChipProps {
  result: boolean | null;
  trueText: string;
  falseText: string;
}

export const IndicatorChip = ({
  result,
  trueText,
  falseText,
}: IndicatorChipProps) => {
  return (
    <Text
      bg={result ? "green.1" : "red.1"}
      c={result ? "green" : "red"}
      bd={result ? "1px green solid" : "1px red solid"}
      span
      style={{
        borderRadius: "16rem",
        paddingInline: "0.5rem",
      }}
    >
      {result ? trueText : falseText}
    </Text>
  );
};
