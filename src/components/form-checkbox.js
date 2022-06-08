import React, { useEffect } from "react";
import { Checkbox } from "@chakra-ui/react";

function FormCheckbox({ onCheck, todolistArr, finishedArr }) {
  const renderUncheckedItems = () => {
    console.log(todolistArr);
    return todolistArr.map((element) => {
      return (
        <React.Fragment key={element.key}>
          <Checkbox onChange={(event) => onCheck(event, element)}>
            {element.name}
          </Checkbox>
          <br />
        </React.Fragment>
      );
    });
  };

  const renderCheckedItems = () => {
    return finishedArr.map((element) => {
      return (
        <React.Fragment key={element.key}>
          <Checkbox
            defaultChecked
            onChange={(event) => onCheck(event, element)}
          >
            {element.name}
          </Checkbox>
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
// import React, { useEffect } from "react";
// import { Checkbox } from "@chakra-ui/react";

// function FormCheckbox({ onCheck, todolistArr }) {
//   const [counter, setCounter] = React.useState(0);
//   const uncheckedArr = todolistArr.filter((todo) => todo.value === false);
//   const checkedArr = todolistArr.filter((todo) => todo.value === true);

//   const _onCheck = (index) => {
//     onCheck(index);
//     // setCounter((prev) => ++prev);
//   };

//   const renderUncheckedItems = () => {
//     return uncheckedArr.map((element, index) => {
//       return (
//         <>
//           <Checkbox onChange={() => _onCheck(index)}>{element.name}</Checkbox>
//           <br />
//         </>
//       );
//     });
//   };

//   console.log("rerender checkbox");

//   const renderCheckedItems = () => {
//     return checkedArr.map((element, index) => {
//       return (
//         <>
//           <Checkbox defaultChecked onChange={() => _onCheck(index)}>
//             {element.name}
//           </Checkbox>
//           <br />
//         </>
//       );
//     });
//   };

//   return (
//     <>
//       <h1>To do:</h1>
//       {renderUncheckedItems()}
//       <h1>Finished:</h1>
//       {renderCheckedItems()}
//     </>
//   );
// }

// export { FormCheckbox };
