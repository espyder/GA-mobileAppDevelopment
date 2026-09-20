import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";

type InfoCardProps = {
  title: string;
  value?: string;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
};

export default function InfoCard({
  title,
  value,
  subtitle,
  style,
}: InfoCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {value ? <Text style={styles.value}>{value}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  value: {
    fontSize: 15,
    color: "#374151",
  },
  subtitle: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 6,
  },
});
