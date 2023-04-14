# Github Profile Explorer

This web application allows users to explore Github users and their repositories by searching for their usernames. It was built with React and utilizes the Github API to retrieve user and repository data.

## Basic Features

- Search for Github users by their username
- View user details, such as name, avatar, bio, and number of followers/following
- View user repositories, including name, description, language, and number of stars/forks/watchers
- Click on a repository to open it on Github in a new browser tab
- Display a loading indicator while requests are pending

## Bonus Features

- Load more repositories by clicking on the "Load More" button
- Deployed on Vercel
- Display a custom error page if the API request fails or there are no search results
- Display a message when there are no search results
- The website responsive and suitable for different screen sizes

## Getting Started

To run this application locally, clone this repository and run the following commands:

```bash
 cd github-profile-explorer
 npm install
 npm start
```

This will start the application on http://localhost:3000.

To build the application for production, run the following command:

```bash
 npm run build
```

This will create an optimized build of the application in the `build` directory.

## Technologies Used

- React
- Github API
- CSS

## Credits

This project was created as an exercise for the Hipo Frontend Developer Intern position. The design for this application was provided by Hipo, and the implementation was done by me.
