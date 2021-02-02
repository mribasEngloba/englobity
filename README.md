# Englobity

React Material-ui custom web components

## Installation

> npm i --save @material-ui/pickers @material-ui/core @material-ui/lab @engloba-tech/englobity

## How to run it locally

to try it localy, we must install this package in other project.

first of all we need to clone the repository in our machine, then, run this comand inside `englobity` folder

> npm install

once all dependencies installed, go to the project you want to try this package and run this commands.

> npm insta <local-englobity-path<l>>/englobity

and then link react

> npm link <local-englobity-path<l>>/node_modules/react

after those commands, you can run the selected project, and try your local englobity

## How to publish new version

This package is associated to NPM englba-tech organization, so, u must have permisions first, after publish new package version.

Lets login as a user organization

> npm login

```bash
## npm login output

Username: user npm account
Password: password npm account
Email: email npm account

```

Then, we will name next package version with this command

> npm version x.x.x

where X is the number of version.

and finnaly

> npm publish --access public
