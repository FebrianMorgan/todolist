import React from "react";
import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function FormCheckbox({ onDelete, onCheck, todolistArr, finishedArr }) {
  const renderUncheckedItems = () => {
    console.log(todolistArr);
    return todolistArr.map((element) => {
      return (
        <React.Fragment key={element.key}>
          <Checkbox onChange={(event) => onCheck(event, element)}>
            {element.name}
          </Checkbox>
          <Button
            size="xs"
            colorScheme={"red"}
            onClick={() => onDelete(element, "unchecked")}
          >
            delete
          </Button>
          <br />
        </React.Fragment>
      );
    });
  };

  const renderCheckedItems = () => {
    return finishedArr.map((element) => {
      return (
        <React.Fragment key={element.key}>
          <s>
            <Checkbox
              defaultChecked
              onChange={(event) => onCheck(event, element)}
            >
              {element.name}
            </Checkbox>
          </s>
          <Button
            size="xs"
            colorScheme={"red"}
            onClick={() => onDelete(element, "checked")}
          >
            delete
          </Button>
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <h1>To do:</h1>
      {renderUncheckedItems()}
      <h1>Finished:</h1>
      {renderCheckedItems()}
    </>
  );
}

export { FormCheckbox };
