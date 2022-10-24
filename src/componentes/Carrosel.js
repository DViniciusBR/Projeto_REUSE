import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import CATEGORIES from '../config/CATEGORIES';
import SPACING from '../config/SPACING';

const WIDTH = Dimensions.get('screen').width

const HomeCarrossel = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={WIDTH * 0.5}
      decelerationRate='fast'
      pagingEnabled
      style={{ marginVertical: SPACING * 4, marginLeft: 20 }}
    >
      {CATEGORIES[activeCategory].tours.map((tour, index) => (
        <TouchableOpacity style={{
          width: WIDTH * 0.6,
          height: WIDTH * 0.8,
          overflow: "hidden",
          borderRadius: SPACING * 2,
          marginRight: SPACING * 2,
        }}
          key={index}
        >
          <View style={{ position: 'absolute', zIndex: 1, height: "100%", width: '100%', justifyContent: 'center'}}>
            <Text style={{ fontSize: SPACING * 1.7, marginLeft: 10, fontWeight: '500', color: 'black' }}>{tour.title}</Text>
          </View>
          <Image source={tour.image} style={{ width: '100%', height: '100%', borderRadius: 30, opacity: 0.8 }} />
        </TouchableOpacity>
      ))
      }
    </ScrollView >
  )
}

export default HomeCarrossel;