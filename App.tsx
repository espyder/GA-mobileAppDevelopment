import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { initialTasks, type Task } from "./data/tasks";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TaskScreen from "./screens/TaskScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const addTask = (title: string) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: String(Date.now()),
        title: trimmedTitle,
        done: false,
      },
    ]);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Tasks") {
              iconName = "checkbox-outline";
            } else if (route.name === "Settings") {
              iconName = "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#7c3aed",
          tabBarInactiveTintColor: "#6b7280",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home">
          {() => <HomeScreen tasks={tasks} />}
        </Tab.Screen>
        <Tab.Screen name="Tasks">
          {() => (
            <TaskScreen
              tasks={tasks}
              onToggleTask={toggleTask}
              onAddTask={addTask}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
