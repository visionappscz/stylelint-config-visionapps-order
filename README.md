# stylelint-config-visionapps-order

[![Build Status](https://travis-ci.org/visionappscz/stylelint-config-visionapps-order.svg?branch=master)](https://travis-ci.org/visionappscz/stylelint-config-visionapps-order)
[![dependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps-order/status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps-order)
[![peerDependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps-order/peer-status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps-order?type=peer)
[![devDependency Status](https://david-dm.org/visionappscz/stylelint-config-visionapps-order/dev-status.svg)](https://david-dm.org/visionappscz/stylelint-config-visionapps-order?type=dev)

VisionApps' shareable config of properties order for [stylelint](https://github.com/stylelint/stylelint).

This config allows linting properties by defined [order](./index.js). It requires [stylelint](https://github.com/stylelint/stylelint) and its [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin.

1. Install `stylelint` and `stylelint-order`

    ```sh
    $ yarn add stylelint stylelint-order --dev
    ```

2. Add `"extends": "stylelint-config-visionapps-order"` to your `.stylelintrc` file
