# GitFind

GitFind is a React-Based Github profile finder web application that allows it's users to search for **any Github profile** by entering a **valid Github username** in the search input and clicking the Search button to search or **see a random Github profile** by clicking on the "Fetch Random Profile" button. On page load, the website displays its **builder's Github Profile**.

## Table of Contents

- [GitFind](#gitfind)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)
- [Folder Structure](#folder-structure)
  - [API Enpoints Used](#api-enpoints-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Demo

Live site: _Coming soon_

## Features

- [x] Displays it's developer's Github profile on load.
- [x] Search for any Github profile by inputing a valid username into the search input.
- [x] Displays full users profile including: - Repositories - Followers and Following - Github profile Statistics
- [x] Generate a random Github Profile
- [x] Filter Repositories based on Languages
- [x] Resposive Design (mobile/ tablet support)
- [x] Light/ Dark Theme toggle

## Screenshots

_Comming Soon_

## Tech Stack

- **Frontend :** React, Vite/CRA, TailwindCSS
- **Routing :** react-router-dom
- **HTTP Requests :** axios
- **Profile Data API :** [Github](https://github.com/)
- **Others :** react-icons, antd, linkify-react

## Installation

1. Clone the repository

```bash
git clone
https://github.com/Oluwabillionz96/github-profile-finder.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file and add your Github token

```bash
VITE_GITHUB_TOKEN  = your_github_token_here
```

4. Run the development server

```bash
npm run dev
```

5. Open in browser at the given port.

## Usage

- On load, the builder's Github profile is shown.
- Type a valid Github username (like kaksie-codes) in the search bar or click the 'Fetch Random Profile' button.

- The Github profile searched or the random one generated will replace the builder's profile which was initially displayed on the page.

- Navigate to other pages using the toggleable side bar on the left. The sidebar is toggled by a button in the top left side of the header.

- View all the public Repositories on the Repositories page only viewing **20 Repositories at a time**.

- To view the rest of the Repositories, there is a navigation button at the buttom of the Repositories page that shows the next set of 20 Repositories when clicked

- There is a Dropdown menu just below the profile card on the Repositories page for filtering Repositories based on languages. There is also a button to show the index of repository page you are on.

- All Followers and Following can be viewed by navigating to their respective pages through the sidebar.

- The **View Profile Button** on each follower's or following's card takes a user to their Github Profile on [Github](https://github.com)

- Profile Statistics like: Most used languages,overall profile stats and a graph to show how often a user Interacts with Github can be seen by navigating to the stats page.

- Toggle between dark and light mode by clicking on the button at the top right coner of the page.

# Folder Structure

```bash
     GitFind/
     |
     |__Public/
     |     |
     |     |_gitfind-logo-light.webp
     |     |_gitfind-logo.webp
     |__src/
     |   |
     |   |__assets/
     |   |     |
     |   |     |__connect.svg
     |   |     |__desert.svg
     |   |
     |   |__components/
     |   |      |_Bio.jsx
     |   |      |_Card.jsx
     |   |      |_Contact.jsx
     |   |      |_DropDown.jsx
     |   |      |_Error.jsx
     |   |      |_FollowersAndFollowing.jsx
     |   |      |_FollowersAndFollowingLoading.jsx
     |   |      |_LoadingProfileCard.jsx
     |   |      |_LoadingRepositories.jsx
     |   |      |_ProfileCard.jsx
     |   |      |_RepositoryCard.jsx
     |   |      |_SearchBar.jsx
     |   |      |_SharedContext.jsx
     |   |      |_SideBar.jsx
     |   |      |_TopProfileCard.jsx
     |   |
     |   |__Layouts/
     |   |      |__RootLayout.jsx
     |   |
     |   |__Logic/
     |   |     |__FetchData.js
     |   |     |__FetchItems.js
     |   |     |__HandleDataFetch.js
     |   |
     |   |__pages/
     |   |     |_FollowersPage.jsx
     |   |     |_FollowingPage.jsx
     |   |     |_HomePage.jsx
     |   |     |_RepositoriesPage.jsx
     |   |     |_StatsPage.jsx
     |   |
     |   |__styles/
     |        |_error.css
     |        |_followers-following-loading.css
     |        |_followers-followingPage.css
     |        |_loadingProfileCard.css
     |        |_LoadingRepositories.css
     |        |_profileCard.css
     |        |_stats.css
     |
     |__.env
     |__.gitignore
     |__eslint.config.js
     |__index.html
     |__package-lock.json
     |__package.json
     |__README.md
     |__vite.config.js
```

## API Enpoints Used

Here are the lists of [Github](https;//github.com) API EndPoints Used.

-

```bash
 https://api.github.com/users/<username>
```

Returns a JSON response of a user's profile and other endpoints to get Information about the user.

- ```bash
  https://api.github.com/users?per_page=100
  ```
  This Endpoint returns a list of 100 random user's profile, which is then selected at random an rendered when the "Fetch Random User" button is clicked.


# Contributing

Feel free to fork the repo and submit a pull request. Issues and suggestions are welcome.

# Contact

**Goodluck Reuben**

- X: [@gudluck_reuben](#https://x.com/gudluck_reuben)
- Email: [goodluckreuben6@gmail.com](goodluckreuben96@gmail.com)
