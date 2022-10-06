import * as React from 'react';
import { VStack, Input, Icon, NativeBaseProvider, Box, Divider, Center} from "native-base";
import { Ionicons } from "@expo/vector-icons";

function Search() {
    return (
        <VStack my="4" space={5} w="100%" maxW="200px" divider={<Box px="2">
            <Divider />
        </Box>}>
            <VStack w="100%" space={5} alignSelf="center">
                <Input style={{ backgroundColor: "black" }} placeholder="O que você procura?" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
            </VStack>
        </VStack>
    );
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Search />
            </Center>
        </NativeBaseProvider>
    );
};