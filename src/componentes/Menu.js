import React from "react";
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider, Divider } from "native-base";

function Example() {
  return <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item>Eu</Menu.Item>
        <Divider mt="0.7" w="100%" />
        <Menu.Item>Meus Dados</Menu.Item>
        <Divider mt="0.7" w="100%" />
        <Menu.Item>Info. do App</Menu.Item>
        <Divider mt="0.7" w="100%" />
        <Menu.Item>Configurações</Menu.Item>
        <Divider mt="0.7" w="100%" />
        <Menu.Item>Termos</Menu.Item>
      </Menu>
    </Box>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };