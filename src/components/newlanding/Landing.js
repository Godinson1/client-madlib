import React from "react";
import {
  Button,
  Stack,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./styles.css";

const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <div className="header">
        <div className="round-design">
          <div id="text-header">
            Experience madlib fun with family, friends and mutuals.
          </div>
          <Stack direction="row" spacing={4}>
            <Button
              onClick={() => onOpen()}
              height="48px"
              width="200px"
              colorScheme="purple"
              size="lg"
            >
              Get Started
            </Button>
          </Stack>
        </div>
      </div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1 className="header-info">
              Hi there, <br /> Welcome, Let's get you started.
            </h1>
            <br />
            <p>Select any of the options below to continue</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link to="/details?category=easy">
              <div className="options-container">Easy</div>
            </Link>
            <Link to="/details?category=intermediate">
              <div className="options-container">Intermediate</div>
            </Link>
            <Link to="/details?category=advanced">
              <div className="options-container">Advanced</div>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Landing;
