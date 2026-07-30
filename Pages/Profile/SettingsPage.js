import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Pressable, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../Context/AuthContext";
import { HeaderText, BaseText } from "../../Components/Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome6 name="xmark" size={30} color={COLORS.black} />
          </Pressable>

          <HeaderText>Settings / Language</HeaderText>
        </View>

        {/* Profile */}
        <View style={styles.section}>
          <SettingsItem title="Change profile settings" onPress={() => {}} />

          <SettingsItem title="Change native language" onPress={() => {}} />
        </View>

        {/* Notification */}
        <View style={styles.section}>
          <HeaderText>Notification settings</HeaderText>

          <SettingsItem title="Notification" onPress={() => {}} />

          <SettingsItem
            title="Set notification time"
            value="12:30 PM"
            showArrow={false}
            onPress={() => {}}
          />
        </View>

        {/* Account */}
        <View style={styles.section}>
          <HeaderText>Account</HeaderText>

          <Pressable
            activeOpacity={0.8}
            style={[styles.actionButton, { backgroundColor: "#FF656B" }]}
          >
            <HeaderText>Delete Account</HeaderText>
          </Pressable>

          <Pressable
            activeOpacity={0.8}
            style={[styles.actionButton, { backgroundColor: "#6F98EB" }]}
            onPress={() => setShowLogoutModal(true)}
          >
            <HeaderText>Log Out</HeaderText>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsItem({ title, value, showArrow = true, onPress }) {
  return (
    <Pressable activeOpacity={0.8} style={styles.item} onPress={onPress}>
      <BaseText>{title}</BaseText>

      {showArrow ? (
        <FontAwesome6 name="arrow-right" size={22} color={COLORS.black} />
      ) : (
        <HeaderText>{value}</HeaderText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  content: {
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 120,
    gap: 36,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  section: {
    gap: 16,
  },

  item: {
    minHeight: 82,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 18,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionButton: {
    height: 82,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 18,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    justifyContent: "center",
    alignItems: "center",
  },
});
