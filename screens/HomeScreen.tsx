import { StyleSheet, Text, View } from "react-native";
import InfoCard from "../components/InfoCard";
import type { Task } from "../data/tasks";

export default function HomeScreen({ tasks }: { tasks: Task[] }) {
  const tasksLeft = tasks.filter((task) => !task.done).length;
  const tasksLabel =
    tasksLeft === 1
      ? "1 task left to finish"
      : `${tasksLeft} tasks left to finish`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StudyFlow</Text>
      <Text style={styles.subtitle}>Your plan for focused learning</Text>

      <InfoCard title="Today" value={tasksLabel} />
      <InfoCard title="Focus session" subtitle="25 min • Quiet mode" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f3ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: "#374151",
  },
});
