import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { Styles } from "../styles/global";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getCountry } from "../redux/actions/action";

type Props = {
  getCountry: Function;
  navigation: {
    navigate: Function;
  };
};

const Home = ({ getCountry, navigation }: Props) => {
  const [country, changeCountry] = useState("");

  const clickHandler = () => {
    getCountry(country, navigation);
  };

  return (
    <View testID="home-wrapper" style={Styles.container}>
      <TextInput
        style={Styles.input}
        onChangeText={(val) => changeCountry(val)}
      ></TextInput>
      <TouchableOpacity onPress={() => clickHandler()} style={Styles.button}>
        <Text style={Styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { getCountry })(Home);
