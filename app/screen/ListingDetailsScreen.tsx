import { View, Text, Image } from "react-native";
import formatCurrency from "../utils/currencyFormat";
import ListItem from "../components/ListItem";
import SwapRightDeleteAction from "../components/SwapRightDeleteAction";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require("../assets/product-3.jpeg")} className="w-full" />
      <View className="p-4">
        <Text className="font-bold text-2xl tracking-wider capitalize">
          Smartphone Galaxy S21
        </Text>
        <Text className="text-zinc-800 my-2 tracking-wide">
          Advanced smartphone with high-resolution display, powerful processor,
          and dual-camera system.
        </Text>
        <Text className="text-green-400 font-semibold">
          {formatCurrency(12000)}
        </Text>
        <View className="mt-10">
          <ListItem
            title="Daud Namayala"
            subtitle="5 Listings"
            image="../assets/me.jpg"
            renderRightActions={() => (
              <SwapRightDeleteAction onPress={() => console.log("first")} />
            )}
            onPress={() => console.log("first")}
          />
        </View>
      </View>
    </View>
  );
}
