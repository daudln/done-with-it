/// <reference types="nativewind/types" />

import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
const StyledTouchableOpacity = styled(TouchableOpacity);
interface Props {
  onPress: () => void;
  title: string;
  color: string;
}

export default function Button({ onPress, title, color = "blue" }: Props) {
  return (
    <StyledTouchableOpacity
      style={{
        backgroundColor: color,
      }}
      onPress={onPress}
      className={`m-2 rounded-full font-bold py-[13px] items-center w-80`}
    >
      <Text className="uppercase tracking-widest font-bold text-zinc-100">
        {title}
      </Text>
    </StyledTouchableOpacity>
  );
}
