interface Props {
  channelName: string;
  position:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';
  theme: 'light' | 'dark';
}
