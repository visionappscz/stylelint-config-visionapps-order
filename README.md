# DEPRECATED — stylelint-config-visionapps-order

⚠️ This package is deprecated in favour of
[stylelint-config-visionapps/order](https://github.com/visionappscz/stylelint-config-visionapps)
config.

[![NPM version](http://img.shields.io/npm/v/@visionappscz/stylelint-config-visionapps-order.svg)](https://www.npmjs.org/package/@visionappscz/stylelint-config-visionapps-order)
[![Build Status](https://github.com/visionappscz/stylelint-config-visionapps-order/workflows/Build%20and%20run%20tests/badge.svg)](https://github.com/visionappscz/stylelint-config-visionapps-order/actions)
![dependencies Status](https://img.shields.io/david/visionappscz/stylelint-config-visionapps-order)
![devDependencies Status](https://img.shields.io/david/dev/visionappscz/stylelint-config-visionapps-order)
[![Downloads per month](https://img.shields.io/npm/dm/@visionappscz/stylelint-config-visionapps-order.svg?style=flat)](https://npmcharts.com/compare/@visionappscz/stylelint-config-visionapps-order)

> VisionApps' shareable config of properties order for
> [Stylelint](https://github.com/stylelint/stylelint).

This config allows linting properties by defined [order](./index.js).

## Installation

Install [Stylelint](https://github.com/stylelint/stylelint),
[stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin, and
this config:

```bash
$ npm install --save-dev @visionappscz/stylelint-config-visionapps-order
```

👉 **Tip:** This config pairs up nicely with
[stylelint-config-visionapps](https://github.com/visionappscz/stylelint-config-visionapps).

## Usage

Apply the config in your Stylelint config:

```json
{
  "extends": "@visionappscz/stylelint-config-visionapps-order"
}
```
