import * as React from 'react';
import { View, Image } from 'react-native';
import { NativeBaseProvider, ScrollView, Icon } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, Entypo } from "@expo/vector-icons";
import Menu from '../../componentes/Menu';
import SearchBar from '../../componentes/SearchBar';
import { TouchableOpacity } from 'react-native';

function TelaDesapega() {
    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchBar />
                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://images.tcdn.com.br/img/img_prod/445926/violao_strinberg_euro_valencia_ce50sc_classico_bag_premium_ponto_do_musico_12465_1_95b8ce6822bd69b5510d07a63acd1985.jpg' }}
                            style={{ height: 250, width: 150, borderRadius: 10 }} />
                        <Icon as={<Ionicons name={"leaf"} size={5} mr="2" />} />
                        <Icon as={<Entypo name={"chat"} size={5} mr="2" />} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://portaldaproducao.net/wp-content/uploads/2020/07/microfone-condensador-1024x683.jpg' }}
                            style={{ height: 250, width: 150, borderRadius: 10 }} />
                        <Icon as={<Ionicons name={"leaf"} size={5} mr="2" />} />
                        <Icon as={<Entypo name={"chat"} size={5} mr="2" />} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://m.media-amazon.com/images/I/51Z4p86vroL.jpg' }}
                            style={{ height: 250, width: 150, borderRadius: 10 }} />
                        <Icon as={<Ionicons name={"leaf"} size={5} mr="2" />} />
                        <Icon as={<Entypo name={"chat"} size={5} mr="2" />} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={{ uri: 'https://images-americanas.b2w.io/produtos/29302693/imagens/estante-para-livros-baixa-4-prateleiras-0807-retro-genialflex-branco/29302692_1_large.jpg' }}
                            style={{ height: 250, width: 150, borderRadius: 10 }} />
                        <Icon as={<Ionicons name={"leaf"} size={5} mr="2" />} />
                        <Icon as={<Entypo name={"chat"} size={5} mr="2" />} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    );
}

function MenuBar() {
    return (
        <View>
            <Image source={require('../../../assets/logo.png')} style={{ height: 50, width: 50 }} />
        </View>
    );
}

function MenuLateral() {
    return (
        <View>
            <Menu />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#42eb89',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="Home"
                component={TelaDesapega}
                options={{
                    title: 'Desapega',
                    headerLeft: (props) => <MenuLateral {...props} />,
                    headerRight: (props) => <MenuBar {...props} />
                }}
            />
        </Stack.Navigator>

    );
}

export default App;
