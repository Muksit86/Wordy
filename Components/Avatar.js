import React from "react";
import { StyleSheet, View } from "react-native";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
};

export default function Avatar({
  size = 220,
  color = "#8FB1F6",
  mood = "neutral",
}) {
  const eyeSize = size * 0.22;
  const pupilSize = eyeSize * 0.42;

  return (
    <View
      style={[
        styles.face,
        {
          width: size,
          height: size,
          backgroundColor: color,
          borderRadius: size * 0.14,
        },
      ]}
    >
      {mood === "angry" && (
        <>
          <View
            style={[
              styles.leftEyebrow,
              {
                width: size * 0.25,
                top: size * 0.28,
                left: size * 0.2,
              },
            ]}
          />

          <View
            style={[
              styles.rightEyebrow,
              {
                width: size * 0.25,
                top: size * 0.28,
                right: size * 0.2,
              },
            ]}
          />
        </>
      )}

      <View
        style={[
          styles.eyeRow,
          {
            marginTop: size * 0.37,
          },
        ]}
      >
        <View
          style={[
            styles.eye,
            {
              width: eyeSize,
              height: eyeSize,
              borderRadius: eyeSize,
            },
          ]}
        >
          <View
            style={[
              styles.pupil,
              {
                width: pupilSize,
                height: pupilSize,
                borderRadius: pupilSize,
              },
            ]}
          />
        </View>

        <View
          style={[
            styles.eye,
            {
              width: eyeSize,
              height: eyeSize,
              borderRadius: eyeSize,
            },
          ]}
        >
          <View
            style={[
              styles.pupil,
              {
                width: pupilSize,
                height: pupilSize,
                borderRadius: pupilSize,
              },
            ]}
          />
        </View>
      </View>

      {mood === "happy" && (
        <View
          style={[
            styles.happyMouth,
            {
              width: size * 0.16,
              height: size * 0.08,
              bottom: size * 0.18,
            },
          ]}
        />
      )}

      {mood === "neutral" && (
        <View
          style={[
            styles.neutralMouth,
            {
              width: size * 0.15,
              bottom: size * 0.2,
            },
          ]}
        />
      )}

      {mood === "angry" && (
        <View
          style={[
            styles.sadMouth,
            {
              width: size * 0.16,
              height: size * 0.08,
              bottom: size * 0.16,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  face: {
    alignItems: "center",
    overflow: "hidden",
  },

  eyeRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
  },

  eye: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },

  pupil: {
    backgroundColor: "#2C2C2C",
  },

  leftEyebrow: {
    position: "absolute",
    height: 6,
    backgroundColor: COLORS.black,
    borderRadius: 4,
    transform: [{ rotate: "25deg" }],
  },

  rightEyebrow: {
    position: "absolute",
    height: 6,
    backgroundColor: COLORS.black,
    borderRadius: 4,
    transform: [{ rotate: "-25deg" }],
  },

  neutralMouth: {
    position: "absolute",
    height: 5,
    backgroundColor: COLORS.black,
    borderRadius: 10,
  },

  happyMouth: {
    position: "absolute",
    borderBottomWidth: 6,
    borderColor: COLORS.black,
    borderRadius: 100,
  },

  sadMouth: {
    position: "absolute",
    borderTopWidth: 6,
    borderColor: COLORS.black,
    borderRadius: 100,
  },
});
