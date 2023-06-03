import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CarouselData = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      image: require('../../assets/thor.jpeg'),
      title: 'Thor',
      description: 'This is the first carousel item',
    },
    {
      image: require('../../assets/thor.jpeg'),
      title: 'Thor',
      description: 'This is the second carousel item',
    },
    {
      image: require('../../assets/thor.jpeg'),
      title: 'Thor',
      description: 'This is the third carousel item',
    },
  ];

  const carouselRef = useRef(null);
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: Dimensions.get('window').height * 0.5, // 50% of screen height
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
  

  const handleSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout="default"
          ref={carouselRef}
          data={carouselItems}
          sliderWidth={Dimensions.get('window').width} // full screen width
          itemWidth={Dimensions.get('window').width} // full screen width
          renderItem={renderItem}
          onSnapToItem={handleSnapToItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselData;
