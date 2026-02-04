import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { CheckCircle2, Circle, Plus, Bell, Users, Settings, ListChecks } from 'lucide-react-native';

export default function App() {
  const pagerRef = useRef<PagerView>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Syncs the navbar when you swipe
  const onPageSelected = (e: any) => {
    setActiveTab(e.nativeEvent.position);
  };

  // Syncs the pager when you tap the navbar
  const setPage = (page: number) => {
    pagerRef.current?.setPage(page);
    setActiveTab(page);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 1. Header Area */}
      <View className="pt-8 pb-4 px-6 flex-row justify-between items-center bg-white">
        <Text className="text-3xl font-black text-slate-900">
          {activeTab === 0 ? "My Lists" : activeTab === 1 ? "Family" : "Settings"}
        </Text>
        {activeTab === 0 && (
          <TouchableOpacity className="bg-slate-100 p-3 rounded-full active:bg-slate-200">
            <Bell size={22} color="#475569" />
          </TouchableOpacity>
        )}
      </View>

      {/* 2. Swipeable Area (Must have flex-1) */}
      <PagerView 
        style={{ flex: 1 }} 
        initialPage={0} 
        ref={pagerRef}
        onPageSelected={onPageSelected}
      >
        {/* Screen 1: Home */}
        <View key="1" className="flex-1">
          <HomeScreen />
        </View>

        {/* Screen 2: Family */}
        <View key="2" className="flex-1 bg-slate-50 items-center justify-center p-10">
          <Users size={60} color="#cbd5e1" />
          <Text className="text-slate-500 text-center mt-4 font-medium">
            Connect with family members to share your grocery lists.
          </Text>
        </View>

        {/* Screen 3: Settings */}
        <View key="3" className="flex-1 bg-slate-50 items-center justify-center p-10">
          <Settings size={60} color="#cbd5e1" />
          <Text className="text-slate-500 text-center mt-4 font-medium">
            Profile and Theme settings will appear here.
          </Text>
        </View>
      </PagerView>

      {/* 3. Floating Action Button (Overlayed) */}
      {activeTab === 0 && (
        <TouchableOpacity 
          activeOpacity={0.9}
          className="absolute bottom-28 right-8 bg-indigo-600 w-16 h-16 rounded-full items-center justify-center shadow-xl shadow-indigo-400 z-50"
        >
          <Plus color="white" size={32} strokeWidth={3} />
        </TouchableOpacity>
      )}

      {/* 4. Bottom Navbar */}
      <View className="flex-row bg-white border-t border-slate-100 py-4 px-10 justify-between items-center">
        <NavButton 
          icon={ListChecks} 
          label="Lists" 
          active={activeTab === 0} 
          onPress={() => setPage(0)} 
        />
        <NavButton 
          icon={Users} 
          label="Family" 
          active={activeTab === 1} 
          onPress={() => setPage(1)} 
        />
        <NavButton 
          icon={Settings} 
          label="Settings" 
          active={activeTab === 2} 
          onPress={() => setPage(2)} 
        />
      </View>
    </SafeAreaView>
  );
}

// --- List View Component ---
function HomeScreen() {
  const sections = [
    { title: "Today", items: [{ id: 1, text: "Buy Milk", done: false }, { id: 2, text: "Chicken Breast", done: true }] },
    { title: "Tomorrow", items: [{ id: 3, text: "Laundry Detergent", done: false }] },
  ];

  return (
    <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
      {sections.map((section, idx) => (
        <View key={idx} className="mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-slate-800">{section.title}</Text>
            <TouchableOpacity className="bg-indigo-50 px-3 py-1.5 rounded-lg active:bg-indigo-100">
              <Text className="text-indigo-600 text-xs font-bold uppercase tracking-wider">Set Alarm</Text>
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
              <Text className={`ml-4 text-lg ${item.done ? 'text-slate-300 line-through' : 'text-slate-700 font-semibold'}`}>
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
}

// --- Nav Button Component ---
function NavButton({ icon: Icon, active, onPress, label }: any) {
  return (
    <TouchableOpacity onPress={onPress} className="items-center justify-center">
      <View className={`p-2 rounded-xl ${active ? 'bg-indigo-50' : 'bg-transparent'}`}>
        <Icon 
          color={active ? "#4f46e5" : "#94a3b8"} 
          size={24} 
          strokeWidth={active ? 2.5 : 2} 
        />
      </View>
      <Text className={`text-[10px] mt-1 font-bold uppercase tracking-widest ${active ? 'text-indigo-600' : 'text-slate-400'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}