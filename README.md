# Pen 99 - Glowing Dropdown - The Most Hearted Pens of 2023

My rebuilt version of [LuckyVJ's Pen](https://codepen.io/LukyVj/pen/ZEMrgMr?editors=0100) using React. 

## video Of My Version:

[![My Version U.I.](./designs/screenshot-mine.jpg)](https://youtu.be/_npbRSXYD0Q)

- [Full video here]()

## Screenshot Of The Original Design

![Original Design](./designs/screenshot.jpg)


## Key Features

```
[x] Glowing border animation
[x] Dropdown growth animation 
    [x] Calculate height of the options box based on the number of elements using javascript
[x] Accessibility
[x] Use of CSS Houdini APIs 
[x] Rounded Borders Calculation in nested elements
[ ] 
```

## Bugs / Fixes

### Initial Loads have Incorrect calculated heights

Turns out that the delayed loading of the custom font is skewing the calculated height to be shorted than needed. The height calculation is taken before the custom font is loaded so when the custom font (which is bigger) than the default is loaded our measurement comes up short and some elements overflow.

The solution is to use the `document.fonts.ready` callback in our `useEffect`:

```js
React.useEffect(() => {
  document.fonts.ready.then(function () {
    console.log('Fonts currently being used on the page are now loaded.');
    // Calculate height now
  });  
}, []);
```

- [Solution Reference - StackOverflow](https://stackoverflow.com/questions/67275928/react-inaccurately-calculating-the-height-of-a-div-on-first-page-load)


--- 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


---

## Meta Data

Started On: 2024-02-02

### References:

- [Inspiration - CodePen](https://codepen.io/LukyVj/pen/ZEMrgMr?editors=0100)
- [The Most Hearted Pens of 2023 - Codepen.io](https://codepen.io/2023/popular/pens/1)
- [Fontawesome for the icons](https://fontawesome.com/icons/)
- [Favicon Generator](https://www.favicon-generator.org/)
- [Color Palette Selector - Coolors.co](https://coolors.co/001524-ff7d00-417b5a-cedfd9-78290f)
- [Hex to RGB Converter](https://www.rgbtohex.net/hex-to-rgb/)
- [Video Review of the project - YouTube](https://youtu.be/_npbRSXYD0Q)
- []()
- []()
