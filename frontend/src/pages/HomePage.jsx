import React from 'react'
import {useEffect} from "react"
import {Container, VStack, SimpleGrid, Text, Heading, Button, Box} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'
import { Toaster } from "@/components/ui/toaster"
import { useColorModeValue } from '../components/ui/color-mode'

export default function HomePage() {
    const fetchProducts = useProductStore((state) => state.fetchProducts)
    const products = useProductStore((state) => state.products)
  
    useEffect(() => {
      fetchProducts()
    }, [fetchProducts])
  
    
  
    return (
        <>
        <Box
          w="full"
          height="50vh"
          bgGradient="linear(to-br, yellow.300, yellow.500)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <VStack spacing={4} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="extrabold"
            >
              Welcome to LuxeMobiles
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="lg">
              Explore premium iPhones at unbeatable prices — secure, fast, and trusted.
            </Text>
            <Link to="/">
              <Button colorScheme="blackAlpha" variant="solid" size="lg">
                Shop Now
              </Button>
            </Link>
          </VStack>
        </Box>
  
        <Container maxW="container.xl" py={12}>
          <VStack spacing={10} align="stretch">
            <Heading
              size="2xl"
              textAlign="center"
              color={useColorModeValue('gray.700', 'gray.100')}
            >
              Featured iPhones
            </Heading>
  
            {products.length > 0 ? (
              <Box>
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 3 }}
                  spacing={8}
                  w="full"
                >
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </SimpleGrid>
              </Box>
            ) : (
              <VStack spacing={4} py={10} rounded="md">
                <Text fontSize="lg" textAlign="center">
                  No products found.
                </Text>
                <Link to="/create">
                  <Button colorScheme="teal" variant="solid">
                    Create a Product
                  </Button>
                </Link>
              </VStack>
            )}
            <Toaster />
          </VStack>
        </Container>
      </>
    )
  }
