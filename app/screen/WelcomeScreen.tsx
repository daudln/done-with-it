import { Image, ImageBackground, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import { styled } from "nativewind";
import ColorModeSwitch from "../components/Switch";
const StyledText = styled(Text);
export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      className="flex flex-1"
      source={require("../assets/background.jpg")}
    >
      <View className="flex flex-1 items-center mt-8">
        <Image
          source={require("../assets/logo-red.png")}
          className="w-24 h-24"
        />
        <StyledText className="font-bold text-pink text-lg capitalize">
          Sell what you don't want
        </StyledText>
      </View>
      <View className="items-center">
        <AppButton
          title="Login"
          onPress={() => console.log("first")}
          color="blue"
        />
        <AppButton
          title="Register"
          onPress={() => console.log("first")}
          color="green"
        />
        <ColorModeSwitch />
        <MaterialCommunityIcons
          name="email"
          size={40}
          className="text-green-600"
          color="blue"
        />
      </View>
    </ImageBackground>
  );
}
