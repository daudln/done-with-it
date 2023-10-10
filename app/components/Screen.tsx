import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export default function Screen({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
