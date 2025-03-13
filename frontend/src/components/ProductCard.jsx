import { DeleteIcon, EditIcon, VStack} from '@chakra-ui/icons';
import { 
  Box, Heading, HStack,useDisclosure, IconButton,Button, Text, useColorModeValue, 
  useToast, Modal, 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
  const [updatedProduct, setupdatedProduct] = useState(product);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  

  const { deleteProduct,updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()


  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid); 
    if (!success) {
      toast({
        title: "error",
        status: "error",
        description: message,
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "success",
        status: "success",
        description: message,
        duration: 3000,
        isClosable: true,
      });
    }
  };


  const handleUpdateProduct = async (pid, updatedProduct) => {
    const {success,message} = await updateProduct(pid, updatedProduct);
    onClose();
    if (!success) {
      toast({
        title: "Error",
        status: "error",
        description: message,
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        status: "success",
        description: "Product updated successfully!",
        duration: 3000,
        isClosable: true,
      });
    }
  }



  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "scale(1.05)", shadow: "xl" }}
      bg={bg}
    >
      <img src={product.image} alt={product.name} height="200px" width="100%" style={{ objectFit: "cover" }} />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Product Name' name='name'
                value={updatedProduct.name}
                onChange={(e) => setupdatedProduct({ ...updatedProduct, name: e.target.value})}
                />
							<Input
								placeholder='Price'
								name='price' type='number'
                value={updatedProduct.price}
                onChange={(e) => setupdatedProduct({...updatedProduct, price: e.target.value})}
                />
							<Input
								placeholder='Image URL' name='image'
                value={updatedProduct.image}
                onChange={(e) => setupdatedProduct({...updatedProduct, image: e.target.value})}
                />
						</VStack>
					</ModalBody>
          <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
