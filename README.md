# React Kursor 🔥🔥

> Simple react custom cursor based on plain javascript package &quot;Kursor&quot;

[![NPM](https://img.shields.io/npm/v/react-kursor.svg)](https://www.npmjs.com/package/react-kursor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-kursor
```

## Usage

```jsx
import React from 'react'
import Kursor from 'react-kursor'

function App(){
    return (
        <Kursor color="#ffffff">
            // Content goes here...
        </Kursor>
    )
}
```

## Implement hover functionality on kursor wrapped component
```jsx
import React from 'react'
import { useKursor } from 'react-kursor'

function Button(){
    const { hoverIn, hoverOut } = useKursor();
    return (
        <div className="button" onMouseEnter={ hoverIn } onMouseLeave={ hoverOut }>
            Button 
        </div>
    )
}
```

## Options
* removeDefaultCursor = true \<boolean\>
* color = "#000000" \<string (either hexcode or rgb)\>

## Options coming soon
* kursorId: key = "" \<any\>
* local = false \<boolean\>
* shouldRender = true \<boolean\>
* type = 1 \<int\>


## License

MIT © [kostberg](https://github.com/kostberg)
