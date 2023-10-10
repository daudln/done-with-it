import { Image, Text, View } from "react-native";
import formatCurrency from "../utils/currencyFormat";
import { Product } from "../types/types";

interface Props {
  item: Product;
}

export default function Card({ item }: Props) {
  return (
    <View className="overflow-hidden flex rounded-lg mx-3 bg-white mt-8 shadow-lg shadow-slate-500 pb-3 mb-0">
      <Image
        className="w-[100%] aspect-auto h-[200px]"
        source={require("../assets/product-3.jpeg")}
      />
      <View className="p-3">
        <Text className="text-start text-2xl my-2 text-zinc-800 font-bold capitalize">
          {item.title}
        </Text>
        <Text className="text-justify text-green-400 font-semibold">
          {formatCurrency(item.price)}
        </Text>
      </View>
    </View>
  );
}
