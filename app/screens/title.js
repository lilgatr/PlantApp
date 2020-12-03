import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <Image
          style={styles.planticon}
          source={require("../../assets/tabler_plant.png")}></Image>
        <Text style={{ fontSize: 42 }}>Title</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.twobutton}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FDEE68",
    marginTop: 64,
    marginHorizontal: 32,
    padding: 12,
    borderColor: "#352F39",
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  buttontext: {
    fontSize: 21,
    fontWeight: "800",
  },
  twobutton: {
    fontSize: 13,
    fontWeight: "bold",
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: 16,
  },
  planticon: {
    width: 90,
    height: 90,
    alignSelf: "center",
  },
});

export default Login;
