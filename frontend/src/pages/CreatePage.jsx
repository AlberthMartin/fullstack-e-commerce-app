import { VStack, Container, Box, Input, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../components/ui/color-mode'
import { useState } from 'react'
import { useProductStore } from '../store/product'
import { Toaster, toaster } from "@/components/ui/toaster"



export default function CreatePage() {
    const inputFieldColor = useColorModeValue("white", "gray.700")
    const textColor = useColorModeValue("black", "white")
    

    const [newProduct, setNewProduct] = useState({
        name: "",
        description:"",
        price: "",
        image: "",
    })
    

    const {createProduct} = useProductStore()

    const handleAddProduct = async() => {
        const {success, message} = await createProduct(newProduct);

        if(!success) {
            toaster.create({
                title: "Error",
                description: message,
                status: "error",
                type:"error",
                duration: 3000, //Default 5 s now 3 s
                isClosable: "true"
            });  
        } else{
            toaster.create({
                title: "Success",
                description: message,
                status: "success",
                type: "success",
                duration: 3000, //Default 5 s now 3 s
                isClosable: "true"
            })
        }
    }
  return (
    <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} my={8}>
                Create new product
            </Heading>

            <Box
                w={"full"} bg={useColorModeValue("white", "gray.800")}
                p={6} rounded={"lg"} shadow={"md"}
            >
                <VStack>
                    <Input placeholder="product name"
                    name="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    bg={inputFieldColor}
                    color={textColor}
                    />
                    <Input placeholder="description..."
                    name="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    bg={inputFieldColor}
                    color={textColor}
                    />
                    <Input placeholder="price"
                    name="price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    bg={inputFieldColor}
                    color={textColor}
                    />
                    <Input placeholder="Image URL"
                    name="image"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    bg={inputFieldColor}
                    color={textColor}
                    />

                    <Button onClick={handleAddProduct} w={"full"} mt={8}>
                        Add Product
                    </Button>
                    <Toaster/>
                </VStack>

            </Box>
        </VStack>

    </Container>

      
  )
}
