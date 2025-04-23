import axios from "axios";

export async function fetchItems(url) {
  try {
    const response = await axios.get(url);
    if (!response.status === 200) {
      throw new Error();
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}
