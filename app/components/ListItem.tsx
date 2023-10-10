import { View, Text, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
interface Props {
  image: string;
  title: string;
  subtitle: string;
  renderRightActions: React.FunctionComponent;
  onPress: () => void;
}
export default function ListItem({
  title,
  subtitle,
  image,
  renderRightActions,
  onPress,
}: Props) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#D3D3D3"
        onPress={onPress}
        className="py-2 px-1 m-2"
      >
        <View className="flex flex-row gap-2 items-center">
          <Image
            source={require("../assets/me.jpg")}
            className="rounded-full w-10 h-10"
          />
          <View>
            <Text>{title}</Text>
            <Text className="text-zinc-500 truncate ...">{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
