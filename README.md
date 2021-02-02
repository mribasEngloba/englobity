# Englobity

Engloba Tech custom react-material components

## How to run it locally

to try it localy, we must install this package in other project.

first of all we need to clone the repository in our machine, then, run this comand inside `englobity` folder

> npm install

then, go to the project you want to try this package and run this commands.

> npm insta <local-englobity-path<l>>/englobity

and then link react

> npm link <local-englobity-path<l>>/node_modules/react

after those commands, you can run the selected project, and try your localy englobity

## How to publish new version

This package is registred in [Engloba Tech GitHub](https://github.com/orgs/Engloba-Tech/packages?repo_name=englobity) registry. So, if you dont have permissions in this organizations, you cannot publish new versions of this package.

Having this clear, we must obtain an acces token from our github account.

[here you have a link](https://docs.github.com/es/github/authenticating-to-github/creating-a-personal-access-token)

and mark `write:packages` option.

After generating acces token, we must login in our machin, following this command

> npm login

```bash
## npm login output

Username: user github name
Password: github acces token
Email: your github acout email

```

Then, we will name next package version with this command

> npm version x.x.x

where X is the number of version.

and finnaly

> npm publish

## How to test it
