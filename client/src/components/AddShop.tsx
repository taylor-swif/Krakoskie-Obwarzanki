import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";

function AddShop({
  isOpen,
  onClose,
}: //onAddShop,
//shopData,
{
  isOpen: boolean;
  onClose: () => void;
  //onAddShop: () => void;
  //shopData: { name: string; location: string; description: string; image: string };
}) {
  const cancelRef = useRef(null);
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Add Shop</AlertDialogHeader>
          <AlertDialogBody>Input</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AddShop;
