# Quod Ai challange

This project is used to show list of issues from Github domain.

## Dependency

- [query-string](https://www.npmjs.com/package/query-string) (^4.3.4): generate query string
  + `npm i query-string` to install
- [dotenv](https://www.npmjs.com/package/dotenv) (^8.2.0): load environment variable in non-product stage
  + `npm i --save-dev dotenv` to install
  
## Available Scripts

- For WSL, you can run directly scripts below
- For Window, you need to install react-script as global dependency `npm i -g react-script`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment

The project is hosted by Heroku using connection to Github repository

### Procedure

- Add environment variable.
  + to asign, you need access config vars session in setting tab
  + example: `REACT_APP_API_URL_DOMAIN=https://domain.com`
- Add buildpack.
  + Paste [https://github.com/Maithanhdanh/create-react-app-buildpack.git](https://github.com/Maithanhdanh/create-react-app-buildpack.git)
- Deploy app.
  + Authenticate Github account
  + Search repositionry
  + Select branch
  + Push deploy button
  
## Technical decision

### Styling

- I used SCSS with BEM.
- It allows me to control the behavior of each element, and it is a useful tool for styling layout or whole component. However, for big applications, it takes a lot of time to set for all elements, so style-component is a good choice in this case.
- I choose this approach because the challenge doesn't have many elements. The layout contains 2 components, which just has a few children.

### Share state

- I used Context API combined with reducer.
- It allows me to control the behavior of each action, the combination of context with reducer will act as Redux without any other dependency. In projects that just need to share state between direct children, using Context or Redux may course the project more complicated.
- I choose this approach because the list of issues is set in the body component, while it is used in children of the header component.

### React hook

- I used React hooks.
- It is easy to use and design. However, we need to follow its rules, and it needs time to practice

### Improve

- For current challenge, I still don't have any idea to improve.
- In case I want to go further with this challenge, I need to use style-component in order to create general styles for the same elements

### Prevent wasted renders

- For `li`, I set its key as issue id
- For the list of highlighted issues, I add some conditional statement to dismount unused components

### Handle side-effects

- For fetching data, I used useEffect depended on current page. The useEffect hook just run whenever user change the current page to new value.
- In each component, i try to avoid to change state of another one as much as posiable
- By doing this way, I can improve the performance of the web app and also reduce the workload of the backend. In order to handle all of the side-effects, a developer needs to know clearly about the project's front-end architecture
