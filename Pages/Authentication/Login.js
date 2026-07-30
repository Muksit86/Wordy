import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Pressable, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Avatar from "../../Components/Avatar";
import InputCard from "../../Components/InputCard";
import PrimaryButton from "../../Constant/PrimaryButton";

import { DisplayText, BaseText } from "../../Components/Typography";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/config";

import { useNavigation } from "@react-navigation/native";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (loading) return;

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password,
      );

      alert("Welcome back!");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect email or password.");
          break;

        case "auth/invalid-email":
          alert("Please enter a valid email.");
          break;

        case "auth/user-disabled":
          alert("This account has been disabled.");
          break;

        default:
          alert(error.message);
      }
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Avatar size={220} mood="angry" color={COLORS.Accent} />

        <DisplayText style={styles.title}>Login</DisplayText>

        <View style={styles.inputs}>
          <InputCard
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            leftIcon={
              <FontAwesome6 name="user" size={24} color={COLORS.black} />
            }
            rightIcon={
              <FontAwesome6 name="eye" size={24} color={COLORS.black} />
            }
          />

          <InputCard
            value={password}
            onChangeText={setPassword}
            placeholder="Choose a strong password"
            secureTextEntry
            leftIcon={
              <FontAwesome6 name="lock" size={24} color={COLORS.black} />
            }
            rightIcon={
              <FontAwesome6 name="eye" size={24} color={COLORS.black} />
            }
          />
        </View>

        <PrimaryButton
          title={loading ? "Signing In..." : "Login"}
          onPress={handleLogin}
          disabled={loading}
        />

        <BaseText style={styles.or}>or continue with</BaseText>

        <View style={styles.socials}>
          <Pressable style={styles.socialButton}>
            <MaterialCommunityIcons name="google" size={42} color="#EA4335" />
          </Pressable>

          <Pressable style={styles.socialButton}>
            <FontAwesome6 name="facebook-f" size={42} color="#4267B2" />
          </Pressable>
        </View>

        <Pressable onPress={() => navigation.navigate("Signup")}>
          <BaseText style={styles.signup}>I don’t have an account</BaseText>
        </Pressable>
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
    gap: 36,
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
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.black,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    justifyContent: "center",
    alignItems: "center",
  },

  signup: {
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
