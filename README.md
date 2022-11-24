### PM 10

Helper to show the name of the 10th Prime Minister of Malaysia

### Installation

`yarn add pm10` or `npm i pm10`

### Usage

```
import { pm10 } from 'pm10';

console.info(pm10());
// Anwar bin Ibrahim
```

### Options

`showTitle: (Boolean)`

Option to show/hide the title, defaults to `false`

```
import { pm10 } from 'pm10';

console.info(pm10({ showTitle: true }));
// Yang Amat Berhormat Dato' Seri Haji Anwar bin Ibrahim
```
