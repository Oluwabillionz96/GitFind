import axios from "axios";

export async function fetchItems(url) {
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  };

  const response = await axios.get(url, { headers });
  if (response.status !== 200) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const data = response.data;

  return data;
}
