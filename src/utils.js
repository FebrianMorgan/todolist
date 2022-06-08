import React from "react";

function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const localValue = window.localStorage.getItem(key);
    if (localValue) return deserialize(localValue);
    return defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorageState };
