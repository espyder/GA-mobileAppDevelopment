import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { Task } from "../data/tasks";

function TaskItem({
  task,
  onToggle,
}: {
  task: Task;
  onToggle: (id: string) => void;
}) {
  return (
    <Pressable style={styles.taskRow} onPress={() => onToggle(task.id)}>
      <Text style={[styles.taskText, task.done && styles.taskDone]}>
        {task.title}
      </Text>
      <Text style={styles.checkbox}>{task.done ? "✓" : "○"}</Text>
    </Pressable>
  );
}

export default function TaskScreen({
  tasks,
  onToggleTask,
  onAddTask,
}: {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onAddTask: (title: string) => void;
}) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>

      <View style={styles.inputRow}>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Add a new task"
          style={styles.input}
        />
        <Pressable style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={onToggleTask} />
        )}
        style={styles.taskList}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3ff",
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
  },
  addButton: {
    backgroundColor: "#7c3aed",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  list: {
    width: "100%",
    paddingBottom: 20,
  },
  taskList: {
    width: "100%",
  },
  taskRow: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#1f2937",
    flex: 1,
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#6b7280",
  },
  checkbox: {
    fontSize: 22,
    color: "#7c3aed",
    marginLeft: 12,
  },
});
