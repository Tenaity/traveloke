import {
  Box,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import {
  HiBadgeCheck,
  HiTemplate,
  HiChartSquareBar,
  HiCurrencyDollar,
} from "react-icons/hi";

const FeatureImage = () => (
  <Box flex="1">
    <Img
      objectFit="cover"
      h="100%"
      w="100%"
      src="https://images.unsplash.com/photo-1573878737226-4f9572c22b69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      alt=""
    />
  </Box>
);

const FeatureItem = (props) => {
  const { title, children, icon } = props;
  return (
    <Box>
      <Box color={mode("blue.600", "blue.400")} fontSize="2.5rem">
        {icon}
      </Box>
      <Stack mt="4">
        <Text
          as="h3"
          color={mode("blue.600", "blue.400")}
          fontSize="xl"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text paddingEnd="6" lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Box>
  );
};

const Feature = () => {
  return (
    <Box as="section" py="24" w="100vw">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Flex justify="space-between" direction={{ base: "column", lg: "row" }}>
          <Box maxW={{ lg: "lg" }}>
            <Box>
              <Heading
                pb="10"
                lineHeight="shorter"
                size="2xl"
                letterSpacing="tight"
                color={mode("gray.900", "white")}
                fontWeight="extrabold"
              >
                Tại sao nên đặt chỗ với
                <Box as="span" px="3" color={mode("blue.600", "blue.400")}>
                  VieTravel
                </Box>
                ?
              </Heading>
            </Box>
            <SimpleGrid
              flex="1"
              columns={{ base: 1, md: 2 }}
              spacing={{ base: "3rem", md: "2rem" }}
            >
              <FeatureItem
                title="Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng"
                icon={<HiBadgeCheck />}
              >
                Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi
                tuyệt vời!
              </FeatureItem>
              <FeatureItem
                title="Phương thức thanh toán an toàn và linh hoạt"
                icon={<HiCurrencyDollar />}
              >
                Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán
                tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến
                Internet Banking. Không tính phí giao dịch.
              </FeatureItem>
              <FeatureItem
                title="Hỗ trợ khách hàng 24/7"
                icon={<HiChartSquareBar />}
              >
                Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn
                trong từng bước của quá trình đặt vé.
              </FeatureItem>
              <FeatureItem
                title="Khách thực đánh giá thực"
                icon={<HiTemplate />}
              >
                Hơn 10.000.000 đánh giá, bình chọn đã được xác thực từ du khách
                sẽ giúp bạn đưa ra lựa chọn đúng đắn.
              </FeatureItem>
            </SimpleGrid>
          </Box>
          <FeatureImage
            maxW={{ lg: "560px" }}
            display={{ base: "none", lg: "block" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Feature;
