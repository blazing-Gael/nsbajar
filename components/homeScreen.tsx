import { CheckCircle2, Circle } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const sections = [
    {
      title: "Today",
      items: [
        { id: 1, text: "Buy Milk", done: false },
        { id: 2, text: "Chicken Breast", done: true },
      ],
    },
    {
      title: "Tomorrow",
      items: [{ id: 3, text: "Laundry Detergent", done: false }],
    },
  ];

  return (
    <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
      {sections.map((section, idx) => (
        <View key={idx} className="mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-slate-800">
              {section.title}
            </Text>
            <TouchableOpacity className="bg-indigo-50 px-3 py-1.5 rounded-lg active:bg-indigo-100">
              <Text className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
                Set Alarms
              </Text>
            </TouchableOpacity>
          </View>

          {section.items.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              className="flex-row items-center mb-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200"
            >
              {item.done ? (
                <CheckCircle2 color="#4f46e5" size={26} strokeWidth={2.5} />
              ) : (
                <Circle color="#e2e8f0" size={26} strokeWidth={2.5} />
              )}
              <Text
                className={`ml-4 text-lg ${item.done ? "text-slate-300 line-through" : "text-slate-700 font-semibold"}`}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      {/* Spacer for bottom scrolling */}
      <View className="h-20" />
    </ScrollView>
  );
};

export default HomeScreen;
