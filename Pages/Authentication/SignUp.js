import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Avatar from "../../Components/Avatar";
import InputCard from "../../Components/InputCard";
import PrimaryButton from "../../Constant/PrimaryButton";

import { DisplayText, BaseText } from "../../Components/Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function SignupScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Avatar size={220} mood="happy" color={COLORS.Accent} />

        <DisplayText style={styles.title}>Sign Up</DisplayText>

        <View style={styles.inputs}>
          <InputCard
            value={username}
            onChangeText={setUsername}
            placeholder="Create a username"
            leftIcon={
              <FontAwesome6 name="user" size={24} color={COLORS.black} />
            }
          />

          <InputCard
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            leftIcon={
              <FontAwesome6 name="envelope" size={24} color={COLORS.black} />
            }
          />

          <InputCard
            value={password}
            onChangeText={setPassword}
            placeholder="Choose a strong password"
            secureTextEntry
            leftIcon={
              <FontAwesome6 name="key" size={24} color={COLORS.black} />
            }
          />
        </View>

        <PrimaryButton title="Create Account" onPress={() => {}} />

        <BaseText style={styles.or}>or continue with</BaseText>

        <View style={styles.socials}>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialCommunityIcons name="google" size={44} color="#EA4335" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome6 name="facebook-f" size={42} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <BaseText style={styles.bottomText}>
            I already have an account
          </BaseText>
        </TouchableOpacity>
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
    paddingBottom: 60,
    alignItems: "center",
    gap: 34,
  },

  title: {
    textAlign: "center",
  },

  inputs: {
    width: "100%",
    gap: 20,
  },

  or: {
    marginTop: 8,
  },

  socials: {
    flexDirection: "row",
    gap: 36,
  },

  socialButton: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomText: {
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
