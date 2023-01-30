import { Flex, Text, Input, Button, Image } from "@chakra-ui/react";

export default function index() {
  return (
    <Flex bg={"#080808"} height={"100vh"} flexDir={"column"} align={"center"}>
      <Flex
        marginTop={"56px"}
        height={["40px", "40px", "60px"]}
        bg={"rgba(32, 34, 35, 0.3)"}
        borderRadius={"20px"}
        border={"1px solid rgba(255, 255, 255, 0.2)"}
      >
        <Flex
          justifyContent={"space-between"}
          width={{ base: "250px", md:"750px", lg: "1058.71px" }}
          align={"center"}
        >
          <Flex
            gap={["5px", "5px", "10px"]}
            marginLeft={["8px", "8px", "16px"]}
            align={"center"}
          >
            <Image
              src={"logo.svg"}
              height={["14px", "14px", "18px"]}
              width={"25.71px"}
            />
            <Text
              fontSize={["14px", "14px", "28px"]}
              fontWeight={"600"}
              color={"white"}
            >
              StreamFi
            </Text>
          </Flex>
          <Button
            bg={"none"}
            height={["30px", "30px", "40px"]}
            width={["110px", "110px", "190px"]}
            marginRight={["8px", "8px", "16px"]}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            justify={"center"}
            color={"white"}
            borderRadius={"10px"}
            fontSize={["12px", "12px", "20px"]}
            _hover={{}}
          >
            Connect Wallet
          </Button>
        </Flex>
      </Flex>
      <Flex
        marginTop={["90px", "90px", "142px"]}
        flexDir={"column"}
        gap={"37px"}
      >
        <Flex gap={"13px"} flexDir={"column"}>
          <Text fontSize={["14px", "14px", "20px"]} color={"white"}>
            Reciever Wallet Address
          </Text>
          <Input
            width={["200px", "200px", "484px"]}
            height={["40px", "40px", "50px"]}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            borderRadius={"7px"}
            bg={"none"}
            color={"white"}
            fontSize={["12px", "12px", "18px"]}
            _hover={{}}
            focusBorderColor={"rgba(255, 255, 255, 0.5)"}
          />
        </Flex>
        <Flex gap={"13px"} flexDir={"column"}>
          <Text fontSize={["14px", "14px", "20px"]} color={"white"}>
            Enter Amount
          </Text>
          <Input
            width={["200px", "200px", "484px"]}
            height={["40px", "40px", "50px"]}
            border={"1px solid rgba(255, 255, 255, 0.2)"}
            borderRadius={"7px"}
            bg={"none"}
            color={"white"}
            fontSize={["12px", "12px", "18px"]}
            _hover={{}}
            focusBorderColor={"rgba(255, 255, 255, 0.5)"}
          />
        </Flex>
        <Flex
          width={["200px", "200px", "484px"]}
          height={["40px", "40px", "50px"]}
          border={" 1px solid rgba(255, 255, 255, 0.2)"}
          borderRadius={"7px"}
          bg={"rgba(18, 18, 18, 0.5)"}
          color={"white"}
          fontSize={["14px", "14px", "20px"]}
          fontWeight={"500"}
          justify={"center"}
          align={"center"}
        >
          Amount
        </Flex>
      </Flex>
    </Flex>
  );
}
