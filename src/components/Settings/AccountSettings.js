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
    console.log("aaa", response.data);
  }, []);
  const onSubmitHandle = async (e) => {
    console.log("dataaa", {
      name: name,
      phone: phone,
      avt: avt,
      birth: birth,
      identityNumber: identityNumber,
      gender: gender,
      email: email,
    });
    if (user) {
      console.log(token);
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
        console.log(response);
        if (response.status === 200) {
          toast({
            render: () => (
              <Alert status="success" variant="left-accent">
                <AlertIcon />
                Cập nhật người dùng thành công!
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
            Bạn cần đăng nhập để thực hiện thao tác!
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
            Thông tin cá nhân
          </Heading>
          <Stack direction="row" spacing="6" align="center" width="full">
            <Avatar size="xl" />
            <Box>
              <HStack spacing="5">
                <Button leftIcon={<HiCloudUpload />}>
                  Thay đổi ảnh đại diện
                </Button>
                <Button variant="ghost" colorScheme="red">
                  Xoá
                </Button>
              </HStack>
              <Text
                fontSize="sm"
                mt="3"
                color={useColorModeValue("gray.500", "whiteAlpha.600")}
              >
                .jpg, .gif, or .png. Kích thước tối đa 700Kb.
              </Text>
            </Box>
          </Stack>

          <VStack width="full" spacing="6">
            <FormControl>
              <FormLabel>Tên</FormLabel>
              <Input
                type="text"
                defaultValue={name}
                onChange={onChangeHandleName}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ảnh đại diện</FormLabel>
              <Input
                type="avt"
                defaultValue={avt}
                onChange={onChangeHandleAvt}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Giới tính</FormLabel>
              <Input
                type="gender"
                defaultValue={gender}
                onChange={onChangeHandleGender}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                type="phone"
                defaultValue={phone}
                onChange={onChangeHandlePhone}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Ngày sinh</FormLabel>
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
                Lưu thay đổi
              </Button>
              <Button variant="outline">Huỷ</Button>
            </HStack>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default AccountSettings;
