import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { HStack, Text } from 'native-base';
import TabComponent from './component/TabComponent';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={{ justifyContent:"space-between",alignItems:"center",px:4,py:8, }}>
      <HStack>
        <Image source={require('../assets/Menu.png')} style={styles.iconLeft} />
        <Text style={styles.activityText}>Activity</Text>
        <Image source={require('../assets/search.png')} style={styles.iconCenter} />
        <Image source={require('../assets/icons_notification.png')} style={styles.iconRight} />
      </HStack>
      </View>
      <View>
      <View style={styles.carouselView}>
  <TabComponent />
</View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  iconLeft: {
    width: 24,
    height: 24,
    marginRight:80
  },
  iconCenter: {
    width: 30,
    height: 30,
    marginRight:10
  },
  iconRight: {
    width: 24,
    height: 24,
    // marginRight:10
  },
  activityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:100,
    marginLeft:50
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselView: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
  }
  
});

export default HomeScreen;
