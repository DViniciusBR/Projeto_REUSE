import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, Pressable, Heading, Icon, HStack, Avatar, VStack, Spacer, Center, ScrollView } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

function Chat() {
    const [mode, setMode] = useState('Basic');
    return <Center h="800px" w='300%'>
        <Box _dark={{
            bg: 'coolGray.900'
        }} _light={{
            bg: 'white'
        }} flex="1" safeAreaTop maxW="400px" w="100%">
            <Heading p="4" pb="3" size="lg">
                Chat
            </Heading>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Basic />
            </ScrollView>
        </Box>
    </Center>;
}

function Basic() {
    const data = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        fullName: 'Yoni',
        timeStamp: '12:47 PM',
        recentText: 'Iae boy',
        avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/296359524_787911809016138_8228851767560518986_n.jpg?ccb=11-4&oh=01_AdTwSIhUBFQsTJOGxEzrnyqD8JsobaaehJHDJw_gEuXvWw&oe=635EE9F0'
    }, {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        fullName: 'Witoria',
        timeStamp: '11:11 PM',
        recentText: 'De fato',
        avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/293613765_409323981221115_6366687122801875475_n.jpg?ccb=11-4&oh=01_AdTIym6Xif_nrI2YF9-vGUZmkXXr5dMa3uE1eI-kEyFUFg&oe=635EF11D'
    }, {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        fullName: 'Robinho',
        timeStamp: '6:22 PM',
        recentText: 'Cachorro?',
        avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/298656735_903910974355879_49304896862257437_n.jpg?ccb=11-4&oh=01_AdQLydXK5a67iClo1NtLPU7T_cERBNZ7EMjsBaycF6td8g&oe=635EF738'
    }, {
        id: '68694a0f-3da1-431f-bd56-142371e29d72',
        fullName: 'Adilla',
        timeStamp: '8:56 PM',
        recentText: 'OI OI',
        avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/310189739_796111038381474_3361952456908650731_n.jpg?ccb=11-4&oh=01_AdS8YZPEW1nh9oL891JIgCr30aYDTlFeOtbqa13TFGtKcg&oe=635F02EA'
    }, {
        id: '28694a0f-3da1-471f-bd96-142456e29d72',
        fullName: 'Ruan',
        timeStamp: '12:47 PM',
        recentText: 'fICA TRANQUILO CARA',
        avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/310995453_197555676023544_7110070616467924006_n.jpg?ccb=11-4&oh=01_AdTDWtzGEys4DJLKtiKGBgXGNFkG-Q11aRv_6joLxl2wxA&oe=635EEE40'
    
    
     }, {
            id: '68694a0f-3da1-431f-bd56-142371e29d72',
            fullName: 'Bel Marques',
            timeStamp: '16:01 PM',
            recentText: ' A gente vai arrasar no TCC ',
            avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/175660116_126590506851842_1570325675590088307_n.jpg?ccb=11-4&oh=01_AdRek7Q_uG7QsEWVqD4_xxTDK2sAuf70_ewNR0n1Ec9D1Q&oe=635F018D'
        }, ];
    const [listData, setListData] = useState(data);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = ({
        item,
        index
    }) => <Box>
            <Pressable onPress={() => console.log('You touched me')} _dark={{
                bg: 'coolGray.800'
            }} _light={{
                bg: 'white'
            }}>
                <Box pl="4" pr="5" py="2">
                    <HStack alignItems="center" space={3}>
                        <Avatar size="48px" source={{
                            uri: item.avatarUrl
                        }} />
                        <VStack>
                            <Text color="coolGray.800" _dark={{
                                color: 'warmGray.50'
                            }} bold>
                                {item.fullName}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: 'warmGray.200'
                            }}>
                                {item.recentText}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" color="coolGray.800" _dark={{
                            color: 'warmGray.50'
                        }} alignSelf="flex-start">
                            {item.timeStamp}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Box>;

    const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
        <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
            opacity: 0.5
        }}>
            <VStack alignItems="center" space={2}>
                <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
                <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
                    Mais
                </Text>
            </VStack>
        </Pressable>
        <Pressable w="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
            opacity: 0.5
        }}>
            <VStack alignItems="center" space={2}>
                <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
                <Text color="white" fontSize="xs" fontWeight="medium">
                    Apagar
                </Text>
            </VStack>
        </Pressable>
    </HStack>;

    return <Box bg="white" safeArea flex="1">
        <SwipeListView
            data={listData} renderItem={renderItem}
            renderHiddenItem={renderHiddenItem} rightOpenValue={-130}
            previewRowKey={'0'} previewOpenValue={-40}
            previewOpenDelay={1000} onRowDidOpen={onRowDidOpen}>
        </SwipeListView>
    </Box>;
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Chat />
            </Center>
        </NativeBaseProvider>
    );
};
