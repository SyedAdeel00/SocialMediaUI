import React, { useState } from 'react';
import { Pressable, Dimensions, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { HStack, Box, Center, Text } from 'native-base';
import CarouselData from './CarouselData';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('popular');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const TabButton = ({ isActive, label, onPress }) => (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor={'#fff'}
        borderRadius={10}
        height={30}
        width={100}
        margin={2}
        marginTop={-3}
      >
        <Center>
          <Text
            style={{
              fontSize: 20,
              marginTop: 8,
              fontWeight: '600',
              color: isActive ? '#021452' : '#c9c8c7',
            }}
          >
            {label}
          </Text>
        </Center>
      </Box>
    </Pressable>
  );

  return (
    <View>
      <HStack space={2} marginTop={6}>
        <TabButton
          isActive={activeTab === 'popular'}
          label="Popular"
          onPress={() => handleTabPress('popular')}
        />
        <TabButton
          isActive={activeTab === 'latest'}
          label="Latest"
          onPress={() => handleTabPress('latest')}
        />
        <TabButton
          isActive={activeTab === 'following'}
          label="Following"
          onPress={() => handleTabPress('following')}
        />
      </HStack>
      <Box style={styles.carouselMain} >
        {activeTab === 'popular' ? (
          <View>
            {/* Carousel  for Popular */}
            <CarouselData/>
        
          </View>
        ) : activeTab === 'latest' ? (
          <View>
            <CarouselData/>
          </View>
        ) : (
          <View>
            <CarouselData/>
          </View>
        )}
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
    carouselMain:{
        marginTop:20,
        backgroundColor:'#fff',
         borderRadius:10
    }
})



export default TabComponent;

