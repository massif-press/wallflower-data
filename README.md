# Player-facing Wallflower: Part I Data for Comp/Con

## Installation

```js
npm add @massif/wallflower-data
//or
yarn add @massif/wallflower-data
```

## Usage

```js
import * as wallflower from '@massif/wallflower-data';

const wallflowerFrameData = wallflower.frames;
```

## Building LCP

```js
yarn && yarn build
// or
npm install && npm run build
```

produces a versioned LCP file in `dist/`
