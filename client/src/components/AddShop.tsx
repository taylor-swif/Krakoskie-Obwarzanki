import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface Flavour {
  name: string;
  isChecked: boolean;
}

const flavours = ["mak", "sezam", "sól", "mieszany", "ser"];

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
  const [flavourChecked, setFlavourChecked] = useState(
    flavours.map((f) => {
      return {
        name: f,
        isChecked: false,
      } as Flavour;
    })
  );

  const [isCheckedCard, setIsCheckedCard] = useState(false);

  const handleTogglev2 = () => setIsCheckedCard(!isCheckedCard);

  const handleToggle = (i: number) => {
    flavourChecked[i].isChecked = !flavourChecked[i].isChecked;
    setFlavourChecked([...flavourChecked]);
  };

  const cancelRef = useRef(null);
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Add Shop</AlertDialogHeader>
          <AlertDialogBody>
            <FormLabel mt={4}>Dostępne obwarzanki</FormLabel>
            <CheckboxGroup colorScheme="teal">
              <VStack align={"start"}>
                {flavourChecked.map((f, i) => {
                  return (
                    <Checkbox
                      isChecked={f.isChecked}
                      onChange={(_) => handleToggle(i)}
                    >
                      {f.name}
                    </Checkbox>
                  );
                })}
              </VStack>
            </CheckboxGroup>
            <FormLabel mt={4}>Płatności</FormLabel>
            <Checkbox isChecked={isCheckedCard} onChange={handleTogglev2}>
                Płatność kartą
            </Checkbox>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AddShop;
