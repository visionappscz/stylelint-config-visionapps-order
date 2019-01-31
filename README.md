# stylelint-config-visionapps-order

[![NPM version](http://img.shields.io/npm/v/@visionappscz/stylelint-config-visionapps-order.svg)](https://www.npmjs.org/package/@visionappscz/stylelint-config-visionapps-order)
[![Build Status](https://travis-ci.org/visionappscz/stylelint-config-visionapps-order.svg?branch=master)](https://travis-ci.org/visionappscz/stylelint-config-visionapps-order)
[![dependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps-order/status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps-order)
[![peerDependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps-order/peer-status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps-order?type=peer)
[![devDependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps-order/dev-status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps-order?type=dev)

VisionApps' shareable config of properties order for
[Stylelint](https://github.com/stylelint/stylelint).

This config allows linting properties by defined [order](./index.js). It requires
[Stylelint](https://github.com/stylelint/stylelint) and its
[stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin.

1. Install `stylelint`, `stylelint-order` and this config:

    ```sh
    $ npm install --save-dev stylelint stylelint-order @visionappscz/stylelint-config-visionapps-order
    ```

2. Add `"extends": "@visionappscz/stylelint-config-visionapps-order"` to your `.stylelintrc` file.
