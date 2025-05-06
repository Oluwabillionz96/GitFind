# GitFind

GitFind is a React-Based Github profile finder web application. It allows it's users to search for **any Github profile** by entering a **valid Github username** in the search input and clicking the Search button to search or **see a random Github profile** by clicking on the "Fetch Random Profile" button. On page load, the website displays its **builder's Github Profile**.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [ScreenShots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Demo

Live site: _Coming soon_

## Features

- [x] Displays it's developer's Github profile on load.
- [x] Search for any Github profile by inputing a valid username into the search input.
- [x] Displays full users profile including: - Repositories - Followers and Following - Github profile Statistics
- [x] Generate a random Github Profile
- [x] Filter Repositories based on Languages
- [x] Resposive Design (mobile/ tablet support)

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
``` bash 
npm run dev
```

5. Open in browser at the given port.

## Usage

- On load, the builder's Github profile is shown.
- Type a valid Github username  (like kaksie-codes) in the search bar or click the 'Fetch Random Profile' button.

- The Github profile searched or the random one generated will replace the builder's profile which was initially displayed on the page.

-  Navigate to other pages using the toggleable side bar on the left. The sidebar is toggled by the button in the to left side of the header.

-  View all the public Repositories on the Repositories page only viewing **20 Repositories at a time**.

-  To view the rest of the Repositories, there is a navigation button at the buttom of the Repositories page that shows the next set of 20 Repositories when clicked

- There is a Dropdown menu just below the profile card on the  Repositories page for filtering Repositories based on languages.

- All Followers and Following can be viewed by navigating to their respective pages through the sidebar.

- Profile Statistics like: Most used languages and overall profile stats can be seen by navigating to the stats page.
