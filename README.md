![](https://github.com/wniemiec-component-reactnative/legend/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Legend</h1>
<p align='center'>Displays the meaning of a set of colors.</p>
<p align="center">
	<a href="https://github.com/wniemiec-component-reactnative/legend/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-component-reactnative/legend/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/legend/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-component-reactnative/legend/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-component-reactnative/legend/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-component-reactnative/legend/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://www.npmjs.com/package/@wniemiec-component-reactnative/legend"><img src="https://img.shields.io/npm/v/@wniemiec-component-reactnative/legend" alt="Release"></a>
	<a href="https://github.com/wniemiec-component-reactnative/legend/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-component-reactnative/legend" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React Native component that that displays a color mapping, with the color next to its meaning. Useful to complement graphics or component that use different colors to represent something. 

## 🖼 Gallery

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap"
<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/legend/master/docs/img/screens/img1.png" alt="image 1" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/legend/master/docs/img/screens/img2.png" alt="image 2" />

<img height=400 src="https://raw.githubusercontent.com/wniemiec-component-reactnative/legend/master/docs/img/screens/img3.png" alt="image 3" />
</div>

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec-component-reactnative/legend
```

2. Import the component
```
import Legend from '@wniemiec-component-reactnative/legend';
```

3. Use it
```
[...]

import React, { useState } from 'react';
import { View } from 'react';

[...]

const legendMapping = [
  {color: 'red', label: 'Label 1'},
  {color: 'purple', label: 'Label 2'},
  {color: 'green', label: 'Label 3'},
  {color: 'blue', label: 'Label 4'},
  {color: 'orange', label: 'Label 5'},
  {color: 'yellow', label: 'Label 6'},
  {color: 'black', label: 'Label 7'},
];

[...]

<View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Legend 
	mapping={legendMapping}
	fgColor='#333333'
  />
</View>

[...]
```


## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|mapping |`array: object`|Mapping containing the meaning (label) of each color | [{color: '', label: ''}] |
|fgColor |`string`|Text color|`"#555555"`|

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-component-reactnative/legend/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-component-reactnative/legend/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
