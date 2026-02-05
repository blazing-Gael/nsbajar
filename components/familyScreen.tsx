import { Users } from "lucide-react-native";
import React from "react";
import { Text } from "react-native";

const FamilyScreen = () => {
  return (
    <div>
      <Users size={60} color="#cbd5e1" />
      <Text className="text-slate-500 text-center mt-4 font-medium">
        Connect with family members to share your grocery lists.
      </Text>
    </div>
  );
};

export default FamilyScreen;
