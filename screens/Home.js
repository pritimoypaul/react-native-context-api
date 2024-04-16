import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Home = ({ navigation }) => {
  const { value, setValue } = useContext(MainContext);
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <Text className="mb-4">{value}</Text>
      <View className="mb-4 flex-row justify-center items-center gap-2">
        <TouchableOpacity
          className="p-2 bg-black rounded-sm"
          onPress={() => {
            setValue(value - 1);
          }}
        >
          <Text className="text-white">Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="p-2 bg-black rounded-sm"
          onPress={() => {
            setValue(value + 1);
          }}
        >
          <Text className="text-white">Increase</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text>Go to Profile</Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
};

export default Home;
