export const setError = (toast, title, description) => {
  return toast({
    title,
    description,
    status: "error",
    duration: 5000,
    isClosable: true,
  });
};
