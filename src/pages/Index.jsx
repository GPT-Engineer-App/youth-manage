import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Input, Link, Text, VStack } from "@chakra-ui/react";
import { FaCalendar, FaClock, FaComment, FaTasks, FaUser, FaVideo } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // TODO: Implement login functionality
    setIsLoggedIn(true);
  };

  return (
    <Box bg="blue.50" minH="100vh" py={8}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="2xl" mb={8} color="blue.600" fontWeight="bold">
          Student Organization Management
        </Heading>
        {isLoggedIn ? (
          <Flex direction={["column", "row"]} justify="center" align="center" wrap="wrap">
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaUser size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Personal Page
              </Heading>
              <Text>View and update your profile</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaTasks size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Task Management
              </Heading>
              <Text>View assigned tasks and make requests</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaClock size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Time Card
              </Heading>
              <Text>Track remote work hours</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaClock size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Activity Tracking
              </Heading>
              <Text>Track activity time and view rankings</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaVideo size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Meeting Recordings
              </Heading>
              <Text>View and upload missed meeting recordings</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaCalendar size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Schedule Calendar
              </Heading>
              <Text>View and add events to the internal calendar</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <Link href="https://zoom.us" isExternal>
                <Image src="https://images.unsplash.com/photo-1632435499182-e436787ce107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx6b29tJTIwbG9nb3xlbnwwfHx8fDE3MTExNjYxNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Zoom" w={48} h={48} mx="auto" />
                <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                  Join Zoom Meeting
                </Heading>
              </Link>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaComment size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Chat Rooms
              </Heading>
              <Text>Categorized chat rooms for members</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZXxlbnwwfHx8fDE3MTExNjYxNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Certificate" w={48} h={48} mx="auto" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Activity Certificates
              </Heading>
              <Text>Issue certificates based on activity</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaVideo size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Casual Video Calls
              </Heading>
              <Text>Casual video chats with members</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaUser size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                Member Profiles
              </Heading>
              <Text>View profiles of all organization members</Text>
            </Box>
          </Flex>
        ) : (
          <VStack spacing={4}>
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
            <Button colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
          </VStack>
        )}
      </Flex>
    </Box>
  );
};

export default Index;
