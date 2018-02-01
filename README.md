# styled-component-with-ui-lib
Repo for testing a posible bug in styled-components v3.15


## Usage

First of, you need to link the ui lib with your frontend client

```
cd example-ui-lib
npm install
npm link
npm build

cd ../with-styled-components
npm install
npm link example-ui-lib
npm run dev
```

