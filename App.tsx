import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screen/MessagesScreen";
export default function App() {
  return (
    <Screen>
      <GestureHandlerRootView>
        <MessagesScreen />
      </GestureHandlerRootView>
    </Screen>
  );
}
