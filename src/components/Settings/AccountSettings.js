import React, { useEffect, useContext, useState } from "react";
import AppContext from "../AppContext";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackDivider,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { HiCloudUpload } from "react-icons/hi";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
const AccountSettings = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { state } = useContext(AppContext);
  const toast = useToast();
  const user = state?.user?.userName;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [gender, setGender] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [avt, setAvt] = useState("");
  const onChangeHandleName = (e) => {
    setName(e.target.value);
  };
  const onChangeHandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeHandlePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeHandleBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeHandleGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeHandleIdentityNumber = (e) => {
    setIdentityNumber(e.target.value);
  };
  const onChangeHandleAvt = (e) => {
    setAvt(e.target.value);
  };
  useEffect(async () => {
    let response = await axios({
      method: "get",
      url: `https://pbl6-travelapp.herokuapp.com/users/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = response;
    setName(data.name);
    setPhone(data.phone);
    setBirth(new Date(data.birth));
    setAvt(data.avt);
    setEmail(data.email);
    setIdentityNumber(data.identityNumber);
    setGender(data.gender);
  }, []);
  const onSubmitHandle = async (e) => {
    if (user) {
      try {
        e.preventDefault();
        const option = {
          method: "patch",
          url: `https://pbl6-travelapp.herokuapp.com/users/${userId}`,
          data: {
            name: name,
            phone: phone,
            avt: avt,
            birth: birth,
            identityNumber: identityNumber,
            gender: gender,
            email: email,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios(option);
        if (response.status === 200) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                C???p nh???t ng?????i d??ng th??nh c??ng!
              </Alert>
            ),
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast({
        render: () => (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            B???n c???n ????ng nh???p ????? th???c hi???n thao t??c!
          </Alert>
        ),
      });
    }
  };
  return (
    <Box px="16" py="16" maxWidth="3xl" mx="auto" mt="5" mb="10" shadow="lg">
      <form
        id="settings-form"
        onSubmit={(e) => {
          e.preventDefault();
          // form submit logic
        }}
      >
        <Stack spacing="4" divider={<StackDivider />}>
          <Heading size="lg" as="h1" paddingBottom="4">
            Th??ng tin c?? nh??n
          </Heading>
          <Stack direction="row" spacing="6" align="center" width="full">
            <Avatar size="xl" />
            <Box>
              <HStack spacing="5">
                <Button leftIcon={<HiCloudUpload />}>
                  Thay ?????i ???nh ?????i di???n
                </Button>
                <Button variant="ghost" colorScheme="red">
                  Xo??
                </Button>
              </HStack>
              <Text
                fontSize="sm"
                mt="3"
                color={useColorModeValue("gray.500", "whiteAlpha.600")}
              >
                .jpg, .gif, or .png. K??ch th?????c t???i ??a 700Kb.
              </Text>
            </Box>
          </Stack>

          <VStack width="full" spacing="6">
            <FormControl>
              <FormLabel>T??n</FormLabel>
              <Input
                type="text"
                defaultValue={name}
                onChange={onChangeHandleName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>???nh ?????i di???n</FormLabel>
              <Input
                type="avt"
                defaultValue={avt}
                onChange={onChangeHandleAvt}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gi???i t??nh</FormLabel>
              <Input
                type="gender"
                defaultValue={gender}
                onChange={onChangeHandleGender}
              />
            </FormControl>
            <FormControl>
              <FormLabel>S??? ??i???n tho???i</FormLabel>
              <Input
                type="phone"
                defaultValue={phone}
                onChange={onChangeHandlePhone}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ng??y sinh</FormLabel>
              <Input
                type="birth"
                defaultValue={`${birth.getDate()}/${
                  birth.getMonth() + 1
                }/${birth.getFullYear()}`}
                onChange={onChangeHandleBirth}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                defaultValue={email}
                onChange={onChangeHandleEmail}
              />
            </FormControl>
            <FormControl>
              <FormLabel>CMND</FormLabel>
              <Input
                type="identityNumber"
                defaultValue={identityNumber}
                onChange={onChangeHandleIdentityNumber}
              />
            </FormControl>
          </VStack>
          <Stack width="full" spacing="4">
            <HStack width="full" justifyContent="flex-end">
              <Button
                type="submit"
                colorScheme="green"
                onClick={onSubmitHandle}
              >
                L??u thay ?????i
              </Button>
              <Button variant="outline">Hu???</Button>
            </HStack>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default AccountSettings;
