# Monorepo starter

Welcome to the project!

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Monorepo starter](#monorepo-starter)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Available Scripts](#available-scripts)
    - [`install`](#install)
    - [`yarn start:webapp`](#yarn-startwebapp)
    - [`yarn build:webapp`](#yarn-buildwebapp)
    - [`yarn build:dep:webapp`](#yarn-builddepwebapp)
    - [`yarn test:webapp`](#yarn-testwebapp)
    - [`yarn start:common`](#yarn-startcommon)
    - [`yarn build:common`](#yarn-buildcommon)
    - [`yarn build:dep:common`](#yarn-builddepcommon)
    - [`yarn test:common`](#yarn-testcommon)
    - [`yarn clean`](#yarn-clean)
    - [`yarn clean:install`](#yarn-cleaninstall)
    - [`yarn build`](#yarn-build)
    - [`yarn test`](#yarn-test)
    - [`yarn test:watch`](#yarn-testwatch)
    - [`yarn test:ci`](#yarn-testci)
    - [`yarn lint`](#yarn-lint)
    - [`yarn release`](#yarn-release)
    - [`yarn release:patch`](#yarn-releasepatch)
    - [`yarn release:minor`](#yarn-releaseminor)
    - [`yarn release:major`](#yarn-releasemajor)
    - [`yarn release:tags`](#yarn-releasetags)
    - [`yarn ncu`](#yarn-ncu)
  - [Generate changelog](#generate-changelog)
  - [Installing a Dependency](#installing-a-dependency)
  - [Updating Dependencies](#updating-dependencies)
  - [Importing a Component](#importing-a-component)
    - [`Button.tsx`](#buttontsx)
    - [`ButtonAndMore.tsx`](#buttonandmoretsx)
  - [Styling with Emotion](#styling-with-emotion)
    - [`Button.tsx`](#buttontsx-1)
    - [`RedButton.tsx`](#redbuttontsx)
  - [Adding Custom Environment Variables](#adding-custom-environment-variables)
    - [Adding Temporary Environment Variables In Your Shell](#adding-temporary-environment-variables-in-your-shell)
      - [Windows (cmd.exe)](#windows-cmdexe)
      - [Linux, OS X (Bash)](#linux-os-x-bash)
    - [Adding Development Environment Variables In `.env`](#adding-development-environment-variables-in-env)
  - [Using HTTPS in Development](#using-https-in-development)
      - [Windows (cmd.exe)](#windows-cmdexe-1)
      - [Linux, OS X (Bash)](#linux-os-x-bash-1)
  - [Running Tests](#running-tests)
    - [Filename Conventions](#filename-conventions)
    - [Command Line Interface](#command-line-interface)
    - [Version Control Integration](#version-control-integration)
    - [Writing Tests](#writing-tests)
    - [Testing Components](#testing-components)
    - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
    - [Initializing Test Environment](#initializing-test-environment)
      - [`src/setupTests.js`](#srcsetuptestsjs)
    - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
    - [Coverage Reporting](#coverage-reporting)
    - [Editor Integration](#editor-integration)
  - [Developing Components in Isolation](#developing-components-in-isolation)
  - [Troubleshooting](#troubleshooting)
  - [Usefull VSCode extensions](#usefull-vscode-extensions)

## Folder Structure

This monorepo is structured as follows

```
monorepo/
  README.md
  node_modules/
  package.json
  packages/
    webapp/
      node_modules/
      package.json
      ...
    common/
      node_modules/
      package.json
      ...
  [...configFiles]
```

You may create new workspaces inside `packages`. Depending on being a new app or a new lib, it has its specific subfolder. Each folder with a `package.json` file will be a new workspace.

## Available Scripts

In the project directory, you can run:

### `install`

Run

```
yarn
```

to install the projects dependencies, and the dependencies within the different workspaces. You can run also

```
yarn `command`
```

which will do whatever `command` does, and must be defined on `scripts` section in [`package.json`](./package.json)

### `yarn start:webapp`

Runs the Main web application in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build:webapp`

Generates the build folder of the compiled files for Main web application <br>
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn build:dep:webapp`

Generates the build folder of the compiled files for Main web application <br>
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn test:webapp`

Launches the test runner for the Main web application.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn start:common`

Runs the Common components library in the development mode.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build:common`

Generates the build folder of the compiled files for Common components library<br>
The build is minified and the filenames include the hashes.<br>
It will generate a static folder that can be deployed anywhere.<br>

### `yarn build:dep:common`

Generates the build folder of the compiled files for Main web application <br>
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn test:common`

Launches the test runner for the Common components library.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn clean`

Removes `dist` folder.<br>

### `yarn clean:install`

Removes `node_modules` folder and executes installation command.<br>

### `yarn build`

Generates builds for Common components library and Main web application<br>

### `yarn test`

Launches the test runner for entire monorepo.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn test:watch`

Launches the test runner in interactive mode for entire ts-monorepo.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn test:ci`

Launches the test runner for entire ts-monorepo and generates the coverage folder.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn lint`

Launches eslint checker in the entire monorepo.<br>

### `yarn release`

Releases an automatic version bump based on commit messages and generates the Changelog.md.<br>

### `yarn release:patch`

Releases a patch version bump based on commit messages and generates the Changelog.md. <br>

### `yarn release:minor`

Releases a minor version bump based on commit messages and generates the Changelog.md. <br>

### `yarn release:major`

Releases a major version bump based on commit messages and generates the Changelog.md.<br>

### `yarn release:tags`

Releases an automatic version bump based on commit messages and generates the Changelog.md. It generate Git tags and pushes them.<br>

### `yarn ncu`

Checks the dependencies in all `package.json` files to see if there are updates.<br>

## Generate changelog

To generate the changelog from the latest git tag, follow the next steps:

1. Open a branch `chore/release` from latest `master`
2. Execute one of the `release` commands (_release_, _release:patch_, _release:minor_, _release:major_)
   1. This command will update the [CHANGELOG.md](./CHANGELOG.md) adding the commits from the latest git tag
   2. Then an automatic commit will be created and will tag the commit with the new tag according to the version number of the main `package.json`
3. Push the changes with the tags with `git push --follow-tags origin chore/release`
4. Open a PR and **merge** the `chore/release` branch (DO NOT SQUASH IT) into `master` branch

You can run `yarn release:tags` that will run steps `2` to `3` but it will decide automatically which version to apply, (_patch_, _minor_, _major_)

## Installing a Dependency

You may install other dependencies with `yarn`. The flag `-W` indicates that the dependency must be installed in the package.json at root level.

```
yarn -W add <library-name>
```

If you want to install a dependency in a specific workspace, then you can do:

```
yarn workspace <workspace_name> add <library-name>
```

## Updating Dependencies

You can install globally [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) and run:

```
ncu
```

that will show the dependencies with new versions available to download.

With the following command, you will be able to upgrade versions number:

```
ncu -u
```

and then

```
yarn
```

## Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

### `Button.tsx`

```js
import React from 'react'

export const Button: React.FunctionComponent = () => {
  ...
}
```

### `ButtonAndMore.tsx`

```js
import React from 'react';
import { Button } from './Button'; // Import a component from another file

export const ButtonAndMore: React.FunctionComponent = () => {
  <>
    <Button />
    ...
  </>;
};
```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

- [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
- [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
- [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## Styling with Emotion

This project setup uses [Emotion](https://emotion.sh/docs/introduction) for styling. This library allow us to write styles in js files and extending styles with a lot of flexibility.

### `Button.tsx`

```js
import React from 'react';
import styled from '@emotion/styled';

export const Button: React.FunctionComponent = props => <StyledButton {...props} />;

const StyledButton = styled.button`
  background: white;
`;
```

### `RedButton.tsx`

```js
import React from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';

export const RedButton: React.FunctionComponent = props => <RedStyledButton {...props} />;

const RedStyledButton = styled(Button)`
  background: red;
`;
```

## Adding Custom Environment Variables

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By
default you will have `NODE_ENV` defined for you, and any other environment variables starting with
`REACT_APP_`. These environment variables will be defined for you on `process.env`. For example, having an environment
variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`, in addition
to `process.env.NODE_ENV`.

> Note: Changing any environment variables will require you to restart the development server if it is running.

These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.

First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined
in the environment inside a `<form>`:

```jsx
const MyComponent = () => (
  <div>
    <small>
      You are running this application in <b>{process.env.NODE_ENV}</b> mode.
    </small>
    <form>
      <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
    </form>
  </div>
);
```

During the build, `process.env.REACT_APP_SECRET_CODE` will be replaced with the current value of the `REACT_APP_SECRET_CODE` environment variable. Remember that the `NODE_ENV` variable will be set for you automatically.

When you load the app in the browser and inspect the `<input>`, you will see its value set to `abcdef`, and the bold text will show the environment provided when using `npm start`:

```html
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

The above form is looking for a variable called `REACT_APP_SECRET_CODE` from the environment. In order to consume this
value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in a `.env` file.

### Adding Temporary Environment Variables In Your Shell

Defining environment variables can vary between OSes. It's also important to know that this manner is temporary for the
life of the shell session.

#### Windows (cmd.exe)

```cmd
set REACT_APP_SECRET_CODE=abcdef&&npm start
```

(Note: the lack of whitespace is intentional.)

#### Linux, OS X (Bash)

```bash
REACT_APP_SECRET_CODE=abcdef npm start
```

### Adding Development Environment Variables In `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
REACT_APP_SECRET_CODE=abcdef
```

These variables will act as the defaults if the machine does not explicitly set them.<br>
Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

> Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need
> these defined as well. Consult their documentation how to do this. For example, see the documentation for [Travis CI](https://docs.travis-ci.com/user/environment-variables/) or [Heroku](https://devcenter.heroku.com/articles/config-vars).

## Using HTTPS in Development

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature](#proxying-api-requests-in-development) to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

#### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(Note: the lack of whitespace is intentional.)

#### Linux, OS X (Bash)

```bash
HTTPS=true npm start
```

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Running Tests

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js` suffix.
- Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder in every package.

We recommend to put the test files next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `yarn test:watch`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `yarn start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode](https://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

By default, when you run `yarn test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration](#continuous-integration) server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/api.html#expect-value).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](http://facebook.github.io/jest/docs/api.html#tobecalled) to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`render()` rendering API](https://testing-library.com/docs/react-testing-library/api/#render) from [Testing Library](https://testing-library.com/). You can write a smoke test with it too:

```js
import { render } from '@testing-library/react';
import React from 'react';
import { Component } from './Component';
describe('Flex', () => {
  it('renders component', () => {
    const renderInstance = render(<Component />);
    expect(renderInstance.asFragment().firstChild).toBeDefined();
  });
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/api.html#expect-value).<br>
Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to, as described below.

### Using Third Party Assertion Libraries

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please [file those against Jest](https://github.com/facebook/jest/issues/new), and we’ll fix them. We intend to keep making them better for React, supporting, for example, [pretty-printing React elements as JSX](https://github.com/facebook/jest/pull/1566).

However, if you are used to other libraries, such as [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/), or if you have existing code using them that you’d like to port over, you can import them normally like this:

```js
import sinon from 'sinon';
import { expect } from 'chai';
```

and then use them in your tests like you normally do.

### Initializing Test Environment

We have a `src/setupTests.js` in each workspace. It will be automatically executed before running tests.

For example:

#### `src/setupTests.js`

```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
```

### Focusing and Excluding Tests

You can replace `it()` with `it.skip()` to temporarily exclude a test from being executed.<br>
Similarly, `it.only()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `yarn test:ci` to include a coverage report like this:

![coverage report](https://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### Editor Integration

If you use [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## Developing Components in Isolation

We are using [Storybook](https://storybook.js.org/) to build isolated components(atoms, molecules, organisms) and its diferent states

## Troubleshooting

yarn error when installing dependencies in workspace

```bash
error An unexpected error occurred: "expected workspace package to exist for \"eslint\"".
info If you think this is a bug, please open a bug report with the information provided in "/Users/user/Documents/yourcompany/monorepo-starter/packages/webapp/yarn-error.log"
```

## How to fix it

https://github.com/yarnpkg/yarn/issues/8405

## Usefull VSCode extensions

This is a list of recommended VSCode extensions that can help you to the development of this project:

- [Bracket pair colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer): visual hints for knowing which bracket or curly brace is the closing one
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): must for enable auto linting while developing
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph): Git Graphical integration in VSCode
- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): God
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest): Jest integration in VSCode to see realtime test status
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Tons of icons for each kind of filetype
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Another must to lint and prettify your code on file save automatically
- [Vscode styled components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components): Syntax Highlighting for CSS in JS files
