import fetchData from "./FetchData";

export const handleDataFetch = async (
  input,
  loadingSetter,
  dataSetter,
  errorSetter,
  inputSetter
) => {
  try {
    loadingSetter(true);
    errorSetter({ isError: false, message: null });
    const response = await fetchData(input);
    dataSetter(response);
    inputSetter("");
  } catch (err) {
    if (err.response.status === 404) {
      errorSetter({ isError: true, message: 404 });
    }
  } finally {
    loadingSetter(false);
  }
};
