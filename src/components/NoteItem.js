import { StyleSheet, Pressable, Text } from "react-native";

export default function NoteItem({ item }) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text>{item.title}</Text>
      </Pressable>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});
