// import React, { useRef } from 'react';
// import { View, ScrollView, Dimensions, Image, StyleSheet, Text } from 'react-native';

// const CarouselView = ({ data }) => {
//   const carouselRef = useRef(null);

//   const handleScroll = (event) => {
//     const slideWidth = event.nativeEvent.layoutMeasurement.width;
//     const currentIndex = event.nativeEvent.contentOffset.x / slideWidth;
//     // Do something with the current index if needed
//   };

//   return (
//     <ScrollView
//       ref={carouselRef}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       onScroll={handleScroll}
//     >
//       {data.map((item, index) => (
//         <View key={index} style={styles.carouselItem}>
//           <Image source={item.image} style={styles.image} resizeMode="cover" />
//           <View style={styles.textContainer}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.description}>{item.description}</Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   carouselItem: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height / 2,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   textContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 16,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     color: 'white',
//   },
// });

// export default CarouselView;
