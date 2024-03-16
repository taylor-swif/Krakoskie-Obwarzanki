import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { GiPretzel } from "react-icons/gi";

export default function NavBar() {
  return (
    <Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab as={Link} to="/">
            <GiPretzel />
          </Tab>
          <Tab as={Link} to="/login">
            <CiLogin />
          </Tab>
          <Tab as={Link} to="/register">
            <FaUser />
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
