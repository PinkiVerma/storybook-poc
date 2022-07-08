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

Makes it easy to build components in isolation(i.e storybook runs outside of main react application ) without worrying about app specific dependencies and requirements.​
Changes
package.json:
storybook is required only during developement, therefore all the dependencies are dev dependencies
Two scripts are added: 1st one is to run storybook in development mode and 2nd one is to build it for production

Addition of the default storybook configuration i.e storybook folder. It contains two files:
In main.js(which conatins configuration for storybook itself), we export an object with two properties, 
1) is stories, which indicates that all files within src folder that end with extension .stories.mdx/js/jsx/ts/tsx have to be treated as stories for our storybook app.
I'll talk about 2)addons later in the presentation

2nd file is preview.js that contains configuration for the stories that we write

and it adds some boiler plate stories for us to get started within stories folder

what is storybook?
Storybook is a collection of stories and each story represents a single visual state of a component.

either we can put component,css and story of that component in one folder or we can follow this pattern.



How to write stories?
Stories are written in Component Story Format (CSF). The key ingredients are the default export that describes the component, and one or more named exports that describe the stories.
Default export
The default export metadata controls how Storybook lists your stories and provides information used by addons. 
Defining stories
Use the named exports of a CSF file to define your component’s stories. We recommend you use UpperCamelCase for your story exports. Here’s how to render Button in the “primary” state and export a story called Primary.

What is args mechanism?
In v6 version, each story is considered to be a component with a set of arguements, for ex: props are considered as arguements.

creating template out of button component
Template.bind({}) is a standard JavaScript technique for making a copy of a function. We copy the Template so each exported story can set its own properties on it.
//Args approach is better cause the code becomes more readable. Using it, we are creating different stories which represent different states of the component && we can extend the props from different stories also.
We can set args at the component level which will be applied to all the component stories.
NOTE: Args at story level will overwrite the args at component level

Add ons:
They are used to implememt extra features for storybooks to make them more useful

1) Changing the background colour. This addon is very useful when we have to test components with white background
2) Controls addon: It lets us change the arguements for a story or with react , we can say that it lets us dynamically change the props of the component. We actually get it when args mech is used.
3)Actions addon: It lets us log user actions and it works really well with args mech. this addon helps us to ensure that oue events are working fine
4)Docs addon:so if let's say i'm working in a team and i want to use components created by other devs.This addon gives us the code of each of the stories, we can simply and ocpy it into our editor.
5) viewPort addon: It lets us select different viewport sizes that helps us to develop and test responsive components


Topics not covered up
Theme & decorators
