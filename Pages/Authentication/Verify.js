import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

import Avatar from "../../Components/Avatar";
import InputCard from "../../Components/InputCard";
import PrimaryButton from "../../Constant/PrimaryButton";

import { DisplayText, BaseText } from "../../Components/Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function VerifyIdentityScreen({ route }) {
  const provider = route?.params?.provider || "password";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isPasswordLogin = provider === "password";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Avatar size={220} mood="angry" color={COLORS.Accent} />

        {/* Badge */}

        <View style={styles.badge}>
          <FontAwesome6
            name="triangle-exclamation"
            size={18}
            color={COLORS.black}
          />

          <BaseText>Verify your identity</BaseText>
        </View>

        {/* Heading */}

        <View style={styles.heading}>
          <DisplayText style={styles.title}>You are login with</DisplayText>

          <BaseText style={styles.description}>
            This process is important because we need to verify your identity
            before allowing this action.
          </BaseText>
        </View>

        {/* Authentication Method */}

        {isPasswordLogin ? (
          <View style={styles.inputs}>
            <InputCard
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              leftIcon={<FontAwesome6 name="user" size={24} />}
            />

            <InputCard
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              leftIcon={<FontAwesome6 name="key" size={24} />}
            />
          </View>
        ) : (
          <TouchableOpacity style={styles.providerButton}>
            {provider === "google" ? (
              <MaterialCommunityIcons name="google" size={48} color="#EA4335" />
            ) : (
              <FontAwesome6 name="facebook-f" size={44} color="#4267B2" />
            )}
          </TouchableOpacity>
        )}

        <PrimaryButton title="Verify" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
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
    paddingBottom: 50,
    alignItems: "center",
    gap: 34,
  },

  badge: {
    height: 56,
    paddingHorizontal: 24,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  heading: {
    alignItems: "center",
    gap: 12,
  },

  title: {
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    maxWidth: 320,
  },

  inputs: {
    width: "100%",
    gap: 20,
  },

  providerButton: {
    width: 130,
    height: 130,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `4px 4px 0px ${COLORS.black}`,
  },
});
