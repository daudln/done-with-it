import { Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ViewImageScreen() {
  return (
    <View className="flex flex-1 gap-14">
      <View className="">
        <View className="p-3 w-16 h-16 top-6 left-10">
          <MaterialCommunityIcons
            name="close"
            color="green"
            className=""
            size={35}
          />
        </View>
        <View className="p-3 w-16 h-16 rounded-md top-6 right-10 absolute">
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="red"
            size={35}
          />
        </View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        className="flex flex-1 w-full max-h-full"
      />
    </View>
  );
}
