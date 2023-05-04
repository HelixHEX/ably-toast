import React from 'react';
import { configureAbly, useChannel } from '@ably-labs/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ablyKey = process.env.REACT_APP_ABLY_KEY;

if (!ablyKey) {
  throw new Error(
    'Please provide an Ably API key (we recommend using the subscriber key)'
  );
}

configureAbly({
  key: ablyKey,
  clientId: process.env.REACT_APP_ClIENTID || 'clientid',
});

const AblyReactToast = ({
  channelName = 'notifications',
  theme = 'light',
  position,
}: Props) => {
  useChannel(channelName, notification => {
    const data = JSON.parse(notification.data);
    console.log(position);
    toast(data.text, {
      position: data.position || position,
      theme: data.theme || theme,
      type: data.type || 'default',
    });
  });
  return <ToastContainer />;
};

export default AblyReactToast;
