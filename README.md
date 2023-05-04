# The (Unofficial) Ably Toast Component

A simple component that allows you to easily send toast notifications to your users via Ably.

## Installation

### NPM
```bash
npm install ably-toast
```

### Yarn
```bash
yarn add ably-toast
```

### PNPM
```bash
pnpm add ably-toast
```

## Usage

**Note:**
- Be sure to include REACT_APP_ABLY_KEY and REACT_APP_CLIENTID in your .env
- We recommend using the subscriber key for your REACT_APP_ABLY_KEY until token authentication is implemented

### Client
```jsx
import { AblyReactToast } from 'ably-toast';

const App = () => {
  return (
    <AblyReactToast
      channelName="YOUR_CHANNEL_NAME (default is 'notifications')"
    />
  )
}

export default App;
```


### Server (Node.js)
```js
var client = new Ably.Realtime(key: string);
var channel = client.channels.get('YOUR_CHANNEL_NAME (default is 'notifications')');

// Note: Including the text in channel data is required, but the other properties are optional

channel.publish('YOUR_CHANNEL_NAME', {
  type: "default" || "success" || "error" || "warning" || "info",
  text: "Your message here",
  position: "top-right" || "top-center" || "top-left" || "bottom-right" || "bottom-center" || "bottom-left",
});
```

### Server (typescript)
```ts
import * as Ably from 'ably';

const client = new Ably.Realtime(key: string);
const channel = client.channels.get('YOUR_CHANNEL_NAME (default is 'notifications')');

//Note: Including the text in channel data is required, but the other properties are optional.

channel.publish('YOUR_CHANNEL_NAME', {
  type: "default" || "success" || "error" || "warning" || "info",
  text: "Your message here",
  position: "top-right" || "top-center" || "top-left" || "bottom-right" || "bottom-center" || "bottom-left",
});
```
## Props

| Property    | Description                                                                                                                                                    | Type   | Required | Default         |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|----------|-----------------|
| channelName | What channel to subscribe to                                                                                                                                   | string | yes      | 'notifications' |
| position    | You can either declare the position globally or per event. Available options are top-right, top-center, top-left, bottom-right, bottom-center, and bottom-left | string | no       | 'top-right'     |
| theme       | light \| dark                                                                                                                                                  | string | no       | 'light'           |