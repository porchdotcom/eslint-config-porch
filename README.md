# @porch/eslint-config-porch

[![Build Status](https://travis-ci.org/porchdotcom/eslint-config-porch.svg?branch=master)](https://travis-ci.org/porchdotcom/eslint-config-porch)

Porch's [eslint](https://eslint.org/) configuration for JavaScript libraries and React applications.

## Installation

`npm install eslint @porch/eslint-config-porch --save-dev`

## Usage

`.eslintrc`

```json
{
  "extends": "@porch/porch"
}
```

`package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ext .js --ext .jsx"
  }
}
```

## Prettier

Eslint config now comes bundled with prettier, using `eslint-config-prettier` and `eslint-preset-prettier`.

Prettier overrides some eslint rules and controls styling of your code.

Prettier can auto format your code, and you have options how you do this.

### 1. Eslint Fix
Because prettier is implemented with eslint, you can run this command in your codebase and all of your files will beformatted according to the eslint / prettier rules.
`eslint . --fix --ext .js --ext .jsx`

### 2. Vscode

Install `Prettier - JavaScript formatter` extension through VS Code extensions .
Set `prettier.eslintIntegration` to true in your vscode setting (default to false). This will allow prettier to look at your eslint settings as a base instead of prettier defaults in vscode.

Using Command Palette (CMD/CTRL + Shift + P)

```
1. CMD + Shift + P -> Format Document
OR
1. Select the text you want to Prettify
2. CMD + Shift + P -> Format Selection
Custom keybindings
```

If you don't like the defaults, you can rebind `editor.action.formatDocument` and `editor.action.formatSelection` in the keyboard shortcuts menu of vscode.

Format On Save

Respects `editor.formatOnSave` setting.

You can turn off format-on-save on a per-language basis by scoping the setting:
```
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[javascript]": {
    "editor.formatOnSave": true
}
```

### Precommit

Install the package:
`yarn add pre-commit --dev`

and add this config to your package.json:
```
{
  "scripts": {
      "lint": "eslint .",
      "pretty-eslint-precommit": "npm run lint -- --fix . && git add . && git status"
  },
  "pre-commit": [
    "pretty-eslint-precommit"
  ]
}
```
