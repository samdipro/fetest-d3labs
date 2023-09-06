import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const { fetch } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "search",
      payload: {
        search: search,
      },
    });
  }, [search]);
  return (
    <Flex alignItems={"center"}>
      <InputGroup size="md">
        <Input
          _focusVisible={"none"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
          _focus={{
            boxShadow:
              "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
          }}
          type="text"
          placeholder="GitHub Username"
          onChange={(e) => setSearch(e.target.value)}
        ></Input>
        <InputRightElement padding=".5rem">
          <Icon
            cursor={"pointer"}
            _hover={{ opacity: 0.8 }}
            fontSize={"3xl"}
            as={IoSearchCircle}
            onClick={() => fetch()}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
