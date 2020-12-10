import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.circlebutton}>
        <Image />
      </TouchableOpacity>
      <View>
        <Text style={styles.bigtext}>Sign Up</Text>
        <View>
          <TouchableOpacity style={styles.googlebutton}>
            <Image
              style={styles.img}
              source={require("../../assets/google.png")}
            />
            <Text> Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.img}
              source={require("../../assets/user.png")}
            />
            <Text> Name </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.img}
              source={require("../../assets/user.png")}
            />
            <Text> Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.img}
              source={require("../../assets/lock.png")}
            />
            <Text> Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signinbutton}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.twobutton}>
            <Text> Already have an account? </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}> Sign In </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 32,
  },
  bigtext: {
    padding: 12,
    fontSize: 42,
    fontWeight: "bold",
  },
  circlebutton: {
    marginBottom: 46,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "#352F39",
  },
  googlebutton: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 12,
    flexDirection: "row",
    borderColor: "grey",
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  button: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#352F39",
    borderRadius: 16,
    borderWidth: 2,
  },
  signinbutton: {
    alignItems: "center",
    backgroundColor: "#FDEE68",
    marginTop: 48,
    padding: 12,
    borderColor: "#352F39",
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  twobutton: {
    fontSize: 13,
    fontWeight: "bold",
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: 16,
  },
  img: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default SignUp;
