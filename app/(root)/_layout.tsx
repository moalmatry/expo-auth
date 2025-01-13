import { useAuthContext } from "@/context/AuthContext";
import { Redirect, Slot } from "expo-router";
import React from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";

const AppLayout = () => {
  const { authState } = useAuthContext();

  // if (loading) {
  //   return (
  //     <SafeAreaView className="bg-white h-full flex justify-center items-center">
  //       <ActivityIndicator className="text-primary-300 " />
  //     </SafeAreaView>
  //   );
  // }

  console.log(authState?.authenticated);

  if (!authState?.authenticated) return <Redirect href={"/sign-up"} />;

  return <Slot />;
};
export default AppLayout;
