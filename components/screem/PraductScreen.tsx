import { StyleSheet, Text, View } from "react-native";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de productos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow:"scroll",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bdbdbdff",
  },
  text: { fontSize: 20 },
});
