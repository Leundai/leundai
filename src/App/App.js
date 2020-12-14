import { Flex, Text, Box, Image, Link, Button, Stack } from "@chakra-ui/react";
import "./App.css";
import profilePicture from "../resources/const";
import useWindowDimensions from "../hooks/useWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <Flex
      color="white"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      textColor="black"
      flexDir="column"
    >
      <Flex
        flexDir={width < 823 ? "column-reverse" : "row"}
        alignItems="center"
      >
        <Box flexDir="column" fontSize="calc(10px + 1.5vmin)" margin="20px">
          <Text fontSize="calc(10px + 3vmin)">Leonardo Galindo</Text>
          <Text>CS + Linguistics Student</Text>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            textColor="blue.500"
          >
            <Link isExternal href="https://github.com/Leundai">
              Github
            </Link>
            <Link
              isExternal
              href="https://www.linkedin.com/in/leonardo-galindo-frias/"
            >
              Linkedin
            </Link>
          </Stack>
          <Stack
            direction="row"
            spacing={4}
            align="center"
            justifyContent="center"
          >
            <Button size={width < 823 ? "sm" : "md"} colorScheme="blue">
              Short
            </Button>
            <Button size={width < 823 ? "sm" : "md"} colorScheme="blue">
              Long
            </Button>
          </Stack>
        </Box>
        <Image
          src={profilePicture}
          alt="Leonardo Galindo"
          boxSize="calc(20px + 20vmin)"
          borderRadius="full"
        />
      </Flex>
    </Flex>
  );
}

export default App;
