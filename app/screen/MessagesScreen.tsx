import { FlashList } from "@shopify/flash-list";
import ListItem from "../components/ListItem";
import { Dimensions, View } from "react-native";
import ListSeparator from "../components/ListSeparator";
import SwapRightDeleteAction from "../components/SwapRightDeleteAction";
import { useState } from "react";
import { messagesList, refreshMessages } from "../types/types";
import Screen from "../components/Screen";
export default function MessagesScreen() {
  const [messages, setMessages] = useState(messagesList);
  const [refreshing, _setRefreshing] = useState(false);

  const handleDeleteMessage = (messageId: number) =>
    setMessages(messages.filter((message) => message.id != messageId));

  return (
    <Screen>
      <View
        style={{
          height: Dimensions.get("screen").height,
          width: Dimensions.get("screen").width,
        }}
      >
        <FlashList
          data={messages}
          estimatedItemSize={76}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              title={item.title}
              subtitle={item.description}
              image="../assets/me.jpg"
              renderRightActions={() => (
                <SwapRightDeleteAction
                  onPress={() => handleDeleteMessage(item.id)}
                />
              )}
              onPress={() => console.log("item", item)}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
          refreshing={refreshing}
          onRefresh={() => setMessages(refreshMessages)}
        />
      </View>
    </Screen>
  );
}
