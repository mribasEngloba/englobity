# How to publish new version

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

where X is the number of version. Then execute:

> npm install

and finnaly

> npm publish --access public

**WARNING**: if is the first time that you are running the publish command, first register engloba-tech in your terminal

> npm adduser engloba-tech
