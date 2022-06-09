import React from "react";
import "../App.css";
import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";

function FormCheckbox({ onDelete, onCheck, todolistArr, finishedArr }) {
  const renderUncheckedItems = () => {
    console.log(todolistArr);
    return todolistArr.map((element) => {
      return (
        <React.Fragment key={element.key}>
          <Box display="flex" m="-2">
            <Checkbox
              onChange={(event) => onCheck(event, element)}
              className="task"
              pl="3"
            >
              <Text pb="1">{element.name}</Text>
            </Checkbox>
            <Button
              alignItems="center"
              ml="auto"
              size="xs"
              colorScheme={"red"}
              onClick={() => onDelete(element, "unchecked")}
              flexShrink="0"
            >
              delete
            </Button>
          </Box>
          <br />
        </React.Fragment>
      );
    });
  };

  const renderCheckedItems = () => {
    return finishedArr.map((element) => {
      return (
        <React.Fragment key={element.key}>
          <Box display="flex" m="-2">
            <Checkbox
              defaultChecked
              onChange={(event) => onCheck(event, element)}
              className="task"
              pl="3"
            >
              <Text pb="1">
                <s>{element.name}</s>
              </Text>
            </Checkbox>
            <Button
              alignItems="center"
              ml="auto"
              size="xs"
              colorScheme={"red"}
              onClick={() => onDelete(element, "checked")}
            >
              delete
            </Button>
          </Box>
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <Box m="2">
      <Text fontSize="xl" mt="4" mb="4">
        Things To do:
      </Text>
      {renderUncheckedItems()}
      <hr />
      <Text fontSize="xl" mt="4" mb="4">
        Finished Task:
      </Text>
      {renderCheckedItems()}
    </Box>
  );
}

export { FormCheckbox };
