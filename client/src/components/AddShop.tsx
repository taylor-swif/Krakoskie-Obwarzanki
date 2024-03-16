import {
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  VStack,
  NumberInputStepper,
  NumberInput,
  Stack,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

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
  const [date, setDate] = useState(new Date());

  const [flavourChecked, setFlavourChecked] = useState(
    flavours.map((f) => {
      return {
        name: f,
        isChecked: false,
      } as Flavour;
    })
  );


  const prettyTime = (val: string) => {
    if (val.length === 1) {
      return "0" + val;
    }
    return val;
  };

  const [startTimeHour, setStartTimeHour] = useState("8");
  const [startTimeMinute, setStartTimeMinute] = useState("0");

  const [endTimeHour, setEndTimeHour] = useState("16");
  const [endTimeMinute, setEndTimeMinute] = useState("0");

  const [endTimeHour, setEndTimeHour] = useState(16);
  const [endTimeMinute, setEndTimeMinute] = useState(0);

  const handleSubmit = () => {
    // console.log("Start Time:", startTimeHour, ":", startTimeMinute);
    // console.log("End Time:", endTimeHour, ":", endTimeMinute);
    const body = {
      selectedFlavours: flavourChecked
        .filter((f) => f.isChecked)
        .map((f) => f.name),
      selectedDate: [date.getUTCDate()+1, date.getUTCMonth()+1, date.getUTCFullYear()],
      startTime: prettyTime(startTimeHour) + ":" + prettyTime(startTimeMinute),
      endTime: prettyTime(endTimeHour) + ":" + prettyTime(endTimeMinute),
      cardValid: isCheckedCard,
    };
    console.log(body);
    return body;
  };

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
          <AlertDialogHeader>Nowe stoisko</AlertDialogHeader>
          <AlertDialogBody>
            <FormLabel mt={4}>Data:</FormLabel>
            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
            />

            <FormControl>
              <FormLabel mt={4}>Godzina rozpoczęcia:</FormLabel>
              <Stack shouldWrapChildren direction="row" align={"left"}>
                <NumberInput
                  size="sm"
                  maxW={16}
                  value={startTimeHour}
                  min={0}
                  max={23}
                  onChange={setStartTimeHour}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <NumberInput
                  size="sm"
                  maxW={16}
                  value={startTimeMinute}
                  min={0}
                  max={59}
                  step={5}
                  onChange={setStartTimeMinute}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
              <FormLabel mt={4}>Godzina zakończenia:</FormLabel>
              <Stack shouldWrapChildren direction="row" align={"left"}>
                <NumberInput
                  size="sm"
                  maxW={16}
                  value={endTimeHour}
                  min={0}
                  max={23}
                  onChange={setEndTimeHour}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <NumberInput
                  size="sm"
                  maxW={16}
                  value={endTimeMinute}
                  min={0}
                  max={59}
                  step={5}
                  onChange={setEndTimeMinute}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </FormControl>

            <FormLabel mt={4}>Dostępne smaki obwarzanków</FormLabel>
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
            <Checkbox
              isChecked={isCheckedCard}
              colorScheme="teal"
              onChange={handleTogglev2}
            >
              Płatność kartą
            </Checkbox>
            <VStack>
              <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                Potwierdź
              </Button>
            </VStack>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default AddShop;
