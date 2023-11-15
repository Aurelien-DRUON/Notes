import { Text, View, Pressable } from "react-native";

export default function NoteScreen({ item }) {
  const [title, setTitle] = useState({item.title});
  const [description, setDescription] = useState({item.description});

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem(item.id, {
        title: title,
        description: description,
      });
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{item.date}</Text>
      </View>
      <Text>{description}</Text>
      <Pressable onPress={saveNote}><Text>Enregistrer</Text></Pressable>
    </View>
  );
}
