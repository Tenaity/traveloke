import { IconButton } from "@chakra-ui/button";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Center, HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
export default function SmallGallery({ objectFit = "cover" }) {
  const src = [
    {
      img: "/images/luxstay/luxstayHaNoi.png",
    },
    {
      img: "/images/luxstay/luxstayDaLat.png",
    },
    {
      img: "/images/luxstay/luxstayDaNang.png",
    },
    {
      img: "/images/luxstay/luxstaySaiGon.png",
    },
    {
      img: "/images/luxstay/luxstayHoiAn.png",
    },
    {
      img: "/images/luxstay/luxstayQuangNing.png",
    },
    {
      img: "/images/luxstay/luxstayNhaTrang.png",
    },
  ];
  const [current, setCurrent] = useState(src);
  const [pos, setPos] = useState(0);
  const handleBack = (e) => {
    setPos((pos) => pos + 100);
  };
  const handleFoward = (e) => {
    setPos((pos) => pos - 100);
  };
  const clickImage = (image) => setCurrent(image);
  return (
    <Box w="500px">
      <Image
        src={current.img}
        width="full"
        height="400"
        objectPosition="center"
        objectFit={objectFit}
        layout="responsive"
        border="2px solid black"
        p="0.5"
      />
      <Box w="full" h={100} overflow="hidden" pos="relative" my={8}>
        {Boolean(pos) && (
          <Center pos="absolute" h="full" zIndex={1} left={0}>
            <IconButton
              size="sm"
              borderRadius="50%"
              icon={<ArrowBackIcon />}
              onClick={handleBack}
            />
          </Center>
        )}
        <Center pos="absolute" h="full" zIndex={1} right={0}>
          {pos > -(src.length - 2) * 100 && (
            <IconButton
              size="sm"
              borderRadius="50%"
              icon={<ArrowForwardIcon />}
              onClick={handleFoward}
            />
          )}
        </Center>

        <HStack
          w={src.length * 100}
          display="flex"
          flexDirection="row"
          transition="transform 500ms ease-in-out"
          style={{ transform: `translate(var(--chakra-translate-x),0)` }}
          translateX={pos}
        >
          {src?.map((image, i) => (
            <Box
              width={100}
              height={100}
              key={i}
              onClick={(e) => clickImage(image)}
            >
              <Image
                src={image.img}
                width={100}
                height={100}
                objectPosition="center"
                objectFit="contain"
                layout="responsive"
                border="2px solid black"
                p="0.5"
              />
            </Box>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}

{
  /* <SmallGallery
          srcs={[
            image?.publicUrl,
            ...images.map((img) => img?.file?.publicUrl),
          ]}
          objectFit="contain"
        /> */
}
