import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React from 'react';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
const textColor = useColorModeValue("gray.600", "gray.200");
const bg = useColorModeValue("white", "gray.800");

const {deleteProduct} = useProductStore();
const toast = useToast();
const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
};

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.05)", shadow: "xl" }}
      bg={bg}
    >
      {/* Corrected img tag */}
      <img src={product.image} alt={product.name} height="200px" width="100%" style={{ objectFit: "cover" }} />

      <Box p={4}>
        {/* Fixed heading syntax */}
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />}  colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;