import {
  Container,
  Flex,
  Icon,
  Center,
  Box,
  Text,
  Avatar,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { useState } from "react";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const searchSelector = useSelector((state) => state.search);
  const nav = useNavigate();
  const [list, setList] = useState();
  const [change, setChange] = useState(false);

  async function fetch() {
    try {
      const result = await api.get(
        "/users/" + searchSelector?.search + "/repos"
      );
      if (!result.data[0]?.owner?.login) {
        throw new Error("username doesn't match with any!");
      }
      setList(result.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  return (
    <>
      <Flex width={"100vw"}>
        <Navbar fetch={fetch} />
      </Flex>
      <Container maxW={"1200px"}>
        {list ? (
          <Flex
            width={"100%"}
            justifyContent={"center"}
            padding={"3rem"}
            flexDir={"column"}
            alignItems={"center"}
            gap={"1rem"}
          >
            <Text>
              This the list public respository of user with username:{" "}
              <span style={{ fontWeight: "500" }}>{list[0]?.owner?.login}</span>
            </Text>
            <Icon
              cursor={"pointer"}
              fontSize={"1rem"}
              _hover={{ color: "#9400FF" }}
              onClick={() => setChange(!change)}
              as={BsFillCalendar2DateFill}
            ></Icon>
            {list?.map((val) => {
              // get local date
              const createdAtDate = new Date(val.created_at);
              const updatedAtDate = new Date(val.updated_at);
              return (
                <Flex flexDir={"column"} gap={"1rem 0"}>
                  <Flex
                    onClick={() => nav(`/${val.full_name}`)}
                    _hover={{
                      borderLeft: "6px solid black",
                      bgColor: "#F5F5F5",
                    }}
                    height={"50px"}
                    borderRadius={"4px"}
                    cursor={"pointer"}
                    alignItems={"center"}
                    padding={"1rem 0.2rem"}
                    gap={"0.6rem"}
                    boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px"}
                    minW={"320px"}
                    justifyContent={"space-evenly"}
                    maxWidth={"100%"}
                  >
                    <Avatar size={"sm"} src={val.owner.avatar_url}></Avatar>
                    <Flex
                      width={{ base: "300px", md: "500px" }}
                      flex={{ base: "column" }}
                      justifyContent={"space-evenly"}
                      alignItems={"center"}
                    >
                      <Text fontWeight={"semibold"}>{val.name}</Text>
                      {change ? (
                        <Text fontSize={"sm"} color={"grey"}>
                          Created At: {createdAtDate.toLocaleString("id-ID")}
                        </Text>
                      ) : (
                        <Text fontSize={"sm"} color={"grey"}>
                          Updated At: {updatedAtDate.toLocaleString("id-ID")}
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        ) : (
          <Flex justifyContent={"center"} flexDir={"column"}>
            <Center height={"50vh"} flexDir={"column"} gap={"0.7rem"}>
              <Box
                borderRadius={"30%"}
                boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px"}
              >
                <Icon fontSize={"6rem"} as={GiEmptyMetalBucketHandle}></Icon>
              </Box>
              <Text fontSize={"1.2rem"} fontWeight={"semibold"}>
                This is a searching page...
              </Text>
            </Center>
          </Flex>
        )}
      </Container>
    </>
  );
}
