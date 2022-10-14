import React, { useState, useRef } from 'react';
import { Text, Dimensions, Image, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const data = [
  {
    id: 1,
    name: 'Diferença entre reciclar e reutilizar',
    url: 'https://www.teraambiental.com.br/hs-fs/hubfs/Reciclar%2c%20reaproveitar%2c%20reutilizar.png?width=614&name=Reciclar%2c%20reaproveitar%2c%20reutilizar.png',
  },
  {
    id: 2,
    name: 'JavaScript',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    id: 3,
    name: 'Node JS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },
];

const renderItem = ({ item }) => {
  return (
    <SafeAreaView
      style={{
        borderWidth: 3.5,
        padding: 1,
        height: 250,
        width: 215,
        borderRadius: 30,
        alignItems: 'center',
      }}>
      <Image source={{ uri: item.url }} style={{ width: 210, height: 243, borderRadius: 30 }} />
      <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>
        {item.name}
      </Text>
    </SafeAreaView>
  );
};

const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <SafeAreaView style={{
      marginTop: 10,
      alignItems: 'center'
    }}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 20,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'black',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'white',
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.6}
      />
    </SafeAreaView>
  );
};

export default App;
