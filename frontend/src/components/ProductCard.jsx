import { Button, Card, Image, Text } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"
import { FilePenLine, OctagonX } from 'lucide-react';
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "@/components/ui/toaster"
import EditProduct from "./EditProduct.jsx"


const ProductCard = ({product}) => {

    const {deleteProduct} = useProductStore()

    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid)

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
    <Card.Root maxW="sm" margin={2} overflow="hidden">
      <Image
        src={product.image}
        alt="product image"
        height="250px"         
        width="100%"
        objectFit="cover"
        borderTopRadius="md"
      />
      <Card.Body gap="2">
        <Card.Title>{product.name}</Card.Title>
        <Card.Description>
          {product.description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <EditProduct product={product}></EditProduct>
        <Button variant="outline" colorPalette={"red"} onClick={() =>handleDeleteProduct(product._id)}><OctagonX /></Button>
      </Card.Footer>
    </Card.Root>
  )}

  export default ProductCard