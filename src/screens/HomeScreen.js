import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { FlatList, Pressable, View, Text } from "react-native";

export default function HomeScreen() {
  const [allData, setAllData] = useState([]);
  const getCount = async () => {
    try {
      const value = await AsyncStorage.getItem("count");
      if (value !== null) {
        // value previously stored
      } else if (value === null) {
        await AsyncStorage.setItem("count", "0");
      }
    } catch (e) {
      // error reading value
    }
  };
  const getAllData = async () => {
    count = await getCount();
    try {
      const jsonValue = await AsyncStorage.multiGet("salut");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const addData = async () => {
    count = await getCount();
    try {
      const jsonValue = await AsyncStorage.setItem(count + 1, {
        title: "",
        description: "",
        date: stringify(new Date()),
      });
      await AsyncStorage.setItem("count", count + 1);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    setAllData(getAllData());
  }, []);

  return (
    <View>
      <FlatList
        data={allData}
        numColumns={2}
        renderItem={({ item }) => <NoteItem item={item} />}
      ></FlatList>
      <Pressable onPress={addData}>
        <Text>salut</Text>
      </Pressable>
    </View>
  );
}
