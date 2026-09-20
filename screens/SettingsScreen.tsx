import { StyleSheet, Text, View } from "react-native";
import InfoCard from "../components/InfoCard";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <InfoCard title="Study reminder" value="Enabled" />
      <InfoCard title="Focus mode" value="On" />
      <InfoCard title="Break time" subtitle="10 minutes after each session" />
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
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 20,
  },
  settingsCard: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 6,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
});
