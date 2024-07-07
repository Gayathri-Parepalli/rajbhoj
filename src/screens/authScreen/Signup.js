import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUp = ({ navigation }) => {
  const handleSignUp = () => {

    navigation.navigate("Dashboard");
  };

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;
