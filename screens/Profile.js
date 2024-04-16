import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Profile = ({ navigation }) => {
  const { value } = useContext(MainContext);
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Profile</Text>
      <Text>{value}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
