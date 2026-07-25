import React, { useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";

import {
  DisplayText,
  SubHeaderText,
  BaseText,
  HeaderText,
} from "../Components/Typography";
import PrimaryButton from "../Constant/PrimaryButton";
import SavePage from "../Components/Bottom Sheets/SavePage";
import ProfilePage from "../Components/Bottom Sheets/ProfilePage";
import Navbar from "../Components/Navbar";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("Home");
  const [activeSheet, setActiveSheet] = useState(null);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["88%"], []);

  function closeSheet() {
    bottomSheetRef.current?.close();
    setActiveSheet(null);
    setCurrentTab("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View style={{ paddingHorizontal: 20, gap: 32 }}>
          <View style={styles.header}>
            <DisplayText style={styles.displayeText}>
              Welcome back Muksit
            </DisplayText>

            <View style={styles.streak}>
              <BaseText>24</BaseText>
              <FontAwesome6 name="fire-flame-simple" size={20} color="black" />
            </View>
          </View>

          <View style={styles.progress}>
            <View style={styles.progressHeader}>
              <BaseText>Your progress</BaseText>
              <FontAwesome6 name="arrow-right" size={20} color="#111" />
            </View>

            <View style={styles.row}>
              <StatCard value="387" label="Words Learn" />
              <StatCard value="12" label="Day streak" />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.wordCard}
            onPress={() => navigation.navigate("LearnWord", { wordIndex: 0 })}
          >
            <BaseText>Word of the day</BaseText>

            <View style={styles.wordCardLable}>
              <HeaderText>Meticulous</HeaderText>
              <BaseText>Tap to learn the meaning</BaseText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.wordCard, { backgroundColor: "hsl(221, 47%, 48%)" }]}
            onPress={() => navigation.navigate("Onboarding", { stepIndex: 0 })}
          >
            <BaseText style={{ color: "white" }}>Today's lesson</BaseText>

            <View style={styles.lessonCheck}>
              <FontAwesome6 name="circle-check" size={34} color="#C7FF58" />
            </View>

            <View style={styles.wordCardLable}>
              <HeaderText style={{ color: "white" }}>
                Expressing Emotion
              </HeaderText>
              <BaseText style={{ color: "white" }}>5 words</BaseText>
            </View>
          </TouchableOpacity>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={{ gap: 8 }}>
                <SubHeaderText>Continue Review</SubHeaderText>
                <BaseText>12 words waiting</BaseText>
              </View>

              <FontAwesome6 name="angle-right" size={30} color="#111" />
            </View>

            <PrimaryButton
              title="Complete the lesson"
              onPress={() =>
                navigation.navigate("Question", { questionIndex: 0 })
              }
              backgroundColor="white"
              color="#111"
              style={styles.button}
            />
          </View>
        </View>
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={() => {
          setActiveSheet(null);
          setCurrentTab("Home");
        }}
      >
        {activeSheet === "Saved" ? <SavePage onClose={closeSheet} /> : null}
        {activeSheet === "Profile" ? <ProfilePage onClose={closeSheet} /> : null}
      </BottomSheet>

      <Navbar
        currentTab={currentTab}
        onHomePress={() => {
          closeSheet();
        }}
        onSavedPress={() => {
          setCurrentTab("Saved");
          setActiveSheet("Saved");
          bottomSheetRef.current?.expand();
        }}
        onProfilePress={() => {
          setCurrentTab("Profile");
          setActiveSheet("Profile");
          bottomSheetRef.current?.expand();
        }}
      />
    </SafeAreaView>
  );
}

function StatCard({ value, label }) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statRow}>
        <FontAwesome6 name="book-open" size={20} color="black" />
        <SubHeaderText>{value}</SubHeaderText>
      </View>

      <BaseText>{label}</BaseText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE7B7",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 48,
  },

  displayeText: {
    flex: 1,
  },

  streak: {
    backgroundColor: "hsl(0, 0%, 100%)",
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "hsl(0, 0%, 5%)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    boxShadow: "4px 4px 0px hsl(0, 0%, 5%)",
  },

  progress: {
    gap: 16,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: "hsl(211, 43%, 73%)",
    borderWidth: 3,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxShadow: "4px 4px 0px black",
    gap: 16,
  },

  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  wordCard: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 100%)",
    padding: 20,
    borderWidth: 3,
    borderRadius: 12,
    boxShadow: "4px 4px 0px hsl(0, 0%, 5%)",
    gap: 16,
  },

  wordCardLable: {
    gap: 8,
  },

  lessonCheck: {
    position: "absolute",
    right: 20,
    top: 18,
  },

  reviewCard: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 100%)",
    padding: 20,
    borderWidth: 3,
    borderRadius: 12,
    boxShadow: "4px 4px 0px hsl(0, 0%, 5%)",
    gap: 16,
  },

  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    minHeight: 64,
    borderRadius: 12,
  },
});
