# Player-facing Wallflower: Part I Data for Comp/Con

## Installation

```js
npm add @compcon/wallflower-data
//or
yarn add @compcon/wallflower-data
```

## Usage

```js
import * as wallflower from '@compcon/wallflower-data';

const wallflowerFrameData = wallflower.frames;
```

## Building LCP

```js
yarn && yarn build
// or
npm install && npm run build
```

produces a versioned LCP file in `dist/`
