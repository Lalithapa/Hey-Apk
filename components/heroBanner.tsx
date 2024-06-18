import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

const HeroBanner = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Image
    source={{
      uri: 'https://www.hokmakeup.com/cdn/shop/files/LA-girl-Desktop.png?v=1718519925',
    }}
    style={{
      width: 390,
      height: 200,
    }}
  />
  );
};

export default HeroBanner;
