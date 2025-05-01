import fetchData from "./FetchData";

export const handleDataFetch = async (
  input,
  loadingSetter,
  dataSetter,
  errorSetter
) => {
  try {
    loadingSetter(true);
    const response = await fetchData(input);
    dataSetter(response);
  } catch (err) {
    errorSetter({ isError: true, message: err.message });
    console.error("Sorry");
  } finally {
    loadingSetter(false);
  }
};