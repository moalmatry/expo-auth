import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useAuthContext } from "@/context/AuthContext";

const SignIn = () => {
  const { onLogin } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (email: string, password: string) => {
    console.log(email, password);
    // const result = await onLogin(email, password);
    // console.log(result);
    // if (result && result.error) {
    //   alert(result.message);
    // }
  };
  return (
    <View className="px-5 py-20 gap-4">
      <Text className="text-xl text-center">Sign In</Text>
      <View className="gap-8">
        <TextInput
          className="border rounded-3xl px-4"
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <TextInput
          className="border rounded-3xl px-4"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text: string) => setPassword(text)}
        />
      </View>
      <Button title="Login" onPress={() => loginHandler(email, password)} />

      <Link className="text-blue-600 font-bold text-center" href="/sign-up">
        Don't Have An Account
      </Link>
    </View>
  );
};

export default SignIn;
