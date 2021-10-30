import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "../styles/global";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getCountryDetails } from "../redux/actions/action";
import { SvgUri } from "react-native-svg";

type Props = {
  getCountryDetails: Function;
  country: any;
  navigation: {
    navigate: Function;
  };
};

const Country = ({ getCountryDetails, country, navigation }: Props) => {
  const clickHandler = () => {
    getCountryDetails(country.capital, navigation);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.listDisplay}>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Name: </Text>
            <Text>{country.name}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Population: </Text>
            <Text>{country.population}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Latitude: </Text>
            <Text>{country.latlng[0]}</Text>
            <SvgUri width="100%" height="100%" uri={country.flag} />
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Longitude: </Text>
            <Text>{country.latlng[1]}</Text>
            <SvgUri width="100%" height="100%" uri={country.flag} />
          </Text>
        </View>
        {/* <Image
          style={Styles.flag}
          source={{
            uri: `${country.flag}`,
          }}
        /> */}
        <View style={Styles.flag}>
          <SvgUri width="100%" height="100%" uri={country.flag} />
        </View>
      </View>

      <TouchableOpacity onPress={() => clickHandler()} style={Styles.button}>
        <Text style={Styles.buttonText}>Capital Weather</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ country: state.reducer.country });

export default connect(mapStateToProps, { getCountryDetails })(Country);
