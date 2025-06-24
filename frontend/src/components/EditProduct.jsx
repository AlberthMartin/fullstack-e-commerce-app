import { Button, CloseButton, Dialog, Portal, Input, VStack } from "@chakra-ui/react"
import { useState } from "react";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "@/components/ui/toaster"
import { useEffect } from "react";

const Editproduct = ({product}) => {

    const [isOpen, setIsOpen] = useState(false)

const [updatedProduct, setUpdatedProduct] = useState(product)

useEffect(() =>{
    setUpdatedProduct(product)
},[product])

const {updateProduct} = useProductStore()

const handleUpdateProduct = async (pid, updatedProduct) => {
    //Check that all fields are filled 
    if (!updatedProduct.name || !updatedProduct.image || !updatedProduct.price || !updatedProduct.description) {
        toaster.create({
          title: "Missing fields",
          description: "Please fill out all fields.",
          status: "error",
          type: "error",
        })
        return
      }

    const { success, message } = await updateProduct(pid, updatedProduct)

    if (success) {
        toaster.create({
          title: "Updated",
          description: message,
          status: "success",
          type: "success",
        })
        setIsOpen(false) // Close dialog
      } else {
        toaster.create({
          title: "Error",
          description: message,
          status: "error",
          type: "error",
        })
      }
}
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="md">
          Edit
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
                <VStack spacing={4}>
                <Input 
                    placeholder="product name"
                    name="name"     
                    value = {updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                    />
                <Input 
                    placeholder="description..."
                    name="description"
                    value = {updatedProduct.description}
                    onChange={(e) => setUpdatedProduct({...updatedProduct, description: e.target.value})}    
                    />
                <Input 
                    placeholder="price"
                    name="price"
                    value ={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                    />
                <Input 
                    placeholder="Image URL"
                    name="image"
                    value = {updatedProduct.image}  
                    onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                    />
            </VStack>

            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Update</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default Editproduct;