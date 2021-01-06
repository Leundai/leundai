import { useEffect } from "react";
import { Flex, Text, Box, Image, Link, Stack, Divider } from "@chakra-ui/react";
import ReactGA from "react-ga";
import profilePicture from "../resources/me.jpg";
import resume from "../resources/ResumeFall2020.pdf";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Home() {
  const { width } = useWindowDimensions();

  useEffect(() => {
    ReactGA.initialize("UA-186708111-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
  };

  return (
    <Flex
      color="white"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      textColor="black"
      flexDir="column"
      height="100vh"
      fontFamily="'JetBrains Mono', monospace;"
      margin="0 6px"
    >
      <Flex flexDir="column" alignItems="center">
        <Image
          src={profilePicture}
          alt="Leonardo Galindo"
          boxSize={width < 768 ? "calc(20px + 20vmax)" : "calc(20px + 20vmin)"}
          borderRadius="full"
        />
        <Box flexDir="column" fontSize="calc(10px + 1.5vmin)">
          <Text fontSize="calc(10px + 3vmin)" fontWeight="bold">
            Leonardo Galindo-Frias
          </Text>
          <Stack
            direction="row"
            spacing={8}
            justifyContent="center"
            textColor="blue.500"
            fontWeight="bold"
          >
            <Link isExternal href="https://github.com/Leundai"
            onClick={Event("GITHUB", "Visited Github", "WEBSITES")}
            >
              Projects
            </Link>
            <Link href={resume}
            onClick={Event("RESUME", "Checked out resume", "WEBSITES")}
            >Resume</Link>
            <Link
              isExternal
              href="https://www.linkedin.com/in/leonardo-galindo-frias/"
              onClick={Event("LINKEDIN", "Visited Linkedin", "WEBSITES")}
            >
              Linkedin
            </Link>
          </Stack>
          <Divider />
        </Box>
      </Flex>
      <Text maxWidth="460px" textAlign="center" fontSize="md" marginTop="8px">
        I'm Leo! I'm a CS + Linguistics student at the University of Illinois at
        Urbana-Champaign. I am heavily focused in open-source development and
        applications that benefit communities in need.
        <br />
        <br />
        I'll be interning at Facebook for Summer 2021
        <br />
        I'm a software developer at{" "}
        <Link color="blue.500" isExternal href="https://uiuc.hack4impact.org/">
          Hack4Impact
        </Link>
        <br />I was part of the{" "}
        <Link
          color="blue.500"
          isExternal
          href="https://fellowship.mlh.io/programs/externship"
        >
          MLH Externship Track{" "}
        </Link>
        and{" "}
        <Link color="blue.500" isExternal href="https://sail.cs.illinois.edu/">
          SAIL@UIUC
        </Link>
      </Text>
    </Flex>
  );
}

export default Home;
