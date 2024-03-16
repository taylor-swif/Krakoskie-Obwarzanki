import "./App.css";
import { Center } from "@chakra-ui/react";
import MapExample from "./components/MapExample";
import Widget from "./components/Widget";
function App() {
  return (
    <Center>
      <MapExample />
      <Widget />
    </Center>
  );
}

export default App;
