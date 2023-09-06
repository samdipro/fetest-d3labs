import { Center, Flex, Icon } from "@chakra-ui/react";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscGithubInverted } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

export default function Navbar(props) {
  const nav = useNavigate();
  return (
    <Flex
      width={"100%"}
      boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px"}
      justifyContent={"center"}
    >
      <Flex
        width={"1200px"}
        h="48px"
        justifyContent={"space-evenly"}
        fontWeight={"bold"}
      >
        <Center
          cursor={"pointer"}
          _hover={{ opacity: 0.8 }}
          display={{ md: "flex", sm: "none", base: "none" }}
        >
          Nav1
        </Center>
        <Center
          cursor={"pointer"}
          _hover={{ opacity: 0.8 }}
          display={{ md: "flex", sm: "none", base: "none" }}
        >
          Nav2
        </Center>
        <Center
          cursor={"pointer"}
          _hover={{ opacity: 0.8 }}
          display={{ md: "flex", sm: "none", base: "none" }}
        >
          Nav3
        </Center>
        <Center
          cursor={"pointer"}
          _hover={{ opacity: 0.8 }}
          display={{ md: "flex", sm: "none", base: "none" }}
        >
          Nav4
        </Center>
        <Center
          h="100%"
          padding={"10px"}
          cursor={"pointer"}
          _hover={{ opacity: 0.8 }}
          display={{ md: "none", sm: "flex" }}
        >
          <Icon as={TfiMenuAlt} boxSize={"26px"}></Icon>
        </Center>
        <Icon
          cursor={"pointer"}
          _hover={{ opacity: 0.8 }}
          h="100%"
          fontSize={"2xl"}
          onClick={() => nav("/")}
          as={VscGithubInverted}
        />
        <Flex>
          <Search fetch={props.fetch} />
        </Flex>
      </Flex>
    </Flex>
  );
}
