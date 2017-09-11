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
