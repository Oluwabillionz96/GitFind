import axios from "axios";

export default async function fetchData(userInput) {
  let url = "https://api.github.com/users/";

  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  };

  if (userInput) {
    url += `${userInput}`;
  } else {
    url += `oluwabillionz96`;
  }

  const response = await axios.get(url, { headers });
  if (!response.status === 200) {
    throw new Error();
  }
  const data = response.data;
  return data;
}

export async function fetchRandomUser() {
  const response = await axios.get("https://api.github.com/users?per_page=100");

  if (!response.status === 200) {
    throw new Error();
  }

  const data = response.data;
  return data;
}
