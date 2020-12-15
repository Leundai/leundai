import {
  Flex,
  Text,
  Box,
  Image,
  Link,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react";
import profilePicture from "../resources/me.jpg";
import resume from "../resources/ResumeFall2020.pdf";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <Flex
      color="white"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      textColor="black"
      flexDir="column"
    >
      <Flex flexDir="column" alignItems="center">
        <Image
          src={profilePicture}
          alt="Leonardo Galindo"
          boxSize={width < 768 ? "calc(20px + 20vmax)" : "calc(20px + 20vmin)"}
          borderRadius="full"
        />
        <Box flexDir="column" fontSize="calc(10px + 1.5vmin)">
          <Text fontSize="calc(10px + 3vmin)">Leonardo Galindo-Frias</Text>
          <Text>CS + Linguistics Student @ UIUC</Text>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            textColor="blue.500"
          >
            <Link isExternal href="https://github.com/Leundai">
              Github
            </Link>
            <Link href={resume}>Resume</Link>
            <Link
              isExternal
              href="https://www.linkedin.com/in/leonardo-galindo-frias/"
            >
              Linkedin
            </Link>
          </Stack>
          {/* <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            align="center"
          >
            <Button size={width < 768 ? "xs" : "md"} colorScheme="blue">
              About
            </Button>
            <Button size={width < 768 ? "xs" : "md"} colorScheme="blue">
              Projects
            </Button>
          </Stack> */}
          <Divider />
        </Box>
      </Flex>
      <Text
        width="calc(20px + 40vmin)"
        textAlign="center"
        fontSize="calc(10px + 1vmin)"
      >
        Hello! I'm Leo for short. I'm currently in my second year at UIUC and I
        am software developer at Hack4Impact @ UIUC. I will be interning at
        Facebook for Summer 2021 and participating in a lot of hackathons
        through this coming year. Feel free to reach out to me through Linkedin
        or email!
      </Text>
    </Flex>
  );
}

export default Home;
