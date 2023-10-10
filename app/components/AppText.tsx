import { Text } from "react-native";
import React from "react";

interface Props {
  children: string;
}

export default function AppText({ children }: Props) {
  return <Text className="text-lg">{children}</Text>;
}
