import { Fragment } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
export default function SearchModal({
  //   isOpen,
  //   onClose = () => {},
  changeInput,
  loading,
  allProducts = [],
  allPosts = [],
  called,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" onClick={onOpen} placeholder="Search" />
      </InputGroup>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader p={2}>
            <InputGroup variant="flushed" colorScheme="brand">
              <InputLeftElement
                pointerEvents="none"
                children={
                  loading ? (
                    <Spinner colorScheme="brand" />
                  ) : (
                    <Search2Icon color="gray.300" />
                  )
                }
              />
              <Input colorScheme="brand" type="search" onChange={changeInput} />
            </InputGroup>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          {called && (
            <ModalBody>
              {/* <ProductListSearch allProducts={allProducts} />
              <PostListSearch allPosts={allPosts} />
              {!loading && !allProducts?.length && (
                <Text color="gray.400">
                  <Translate content="Không có kết quả" />
                </Text>
              )} */}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}
