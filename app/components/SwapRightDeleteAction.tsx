import { TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface Props {
  onPress: () => void;
}

export default function SwapRightDeleteAction({ onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress} className="z-[999]">
      <View className="bg-red-500 w-16 justify-center items-center">
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
