import { useColorScheme } from "nativewind";
import { Switch } from "react-native";
export default function ColorModeSwitch() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Switch
      value={colorScheme === "dark"}
      className="accent-green-500 text-red-700"
      onChange={toggleColorScheme}
    />
  );
}
