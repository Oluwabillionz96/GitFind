import axios from "axios";

export default async function fetchData() {
  try {
    const response = await axios.get("../../random.json");
    if (!response.statusText === "OK") {
      throw new Error();
    }
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
}
