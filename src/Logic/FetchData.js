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

  try {
    const response = await axios.get(url, { headers });

    console.log("Rate Limit:", response.headers["x-ratelimit-limit"]);
    console.log("Remaining:", response.headers["x-ratelimit-remaining"]);
    console.log(
      "Reset At:",
      new Date(response.headers["x-ratelimit-reset"] * 1000)
    );

    if (!response.status === 200) {
      throw new Error();
    }
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);

    console.log("Rate Limit:", response.headers["x-ratelimit-limit"]);
    console.log("Remaining:", response.headers["x-ratelimit-remaining"]);
    console.log(
      "Reset At:",
      new Date(response.headers["x-ratelimit-reset"] * 1000)
    );
  }
}

export async function fetchRandomUser() {
  try {
    const response = await axios.get(
      "https://api.github.com/users?per_page=100"
    );

    if (!response.status === 200) {
      throw new Error();
    }

    const data = response.data;
    return data;
  } catch (error) {}
}

export async function rateCheck() {
  const res = await axios.get("https://api.github.com/rate_limit", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  console.log(res.data);
}
