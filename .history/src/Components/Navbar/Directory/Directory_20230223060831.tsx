import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";
import useDirectory from "@/Hooks/useDirectory";

type DirectoryProps = {};

const Directory: React.FC = () => {
  const { directoryState, toggleMenuOpen } = useDirectory();
  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{
          base: 0,
          md: "2",
        }}
        _hover={{
          outline: "1px solid",
          outlineColor: "gray.200",
        }}
        onClick={() => toggleMenuOpen()}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{
            base: "auto",
            lg: "200px",
          }}
        >
          <Flex align="center">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                borderRadius="full"
                alt={directoryState.selectedMenuItem.displayText}
                boxSize="18px"
                mr={2}
                src={directoryState.selectedMenuItem.imageURL}
              />
            ) : (
              <Icon
                as={directoryState.selectedMenuItem.icon}
                color={directoryState.selectedMenuItem.iconColor}
                fontSize={24}
                mr={{
                  base: 1,
                  md: 2,
                }}
              />
            )}
            <Flex
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <Text fontWeight={600} fontSize="10pt">
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default Directory;
