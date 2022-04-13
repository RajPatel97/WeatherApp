import React from 'react';
import {
  WiThunderstorm,
  WiStormShowers,
  WiShowers,
  WiRain,
  WiRainWind,
  WiSnow,
  WiSleet,
  WiCloudyWindy,
  WiMoonAltFull,
  WiCloud,
  WiCloudy,
} from 'react-icons/wi';

/**
 * @description this function is used to get the icon for the weather condition
 *
 * @param {number} iconCode - the weather condition code from the API
 * @param {string} color - the color of the icon
 * @param {number} size - the size of the icon
 * @returns {React.ReactElement} - the icon for the weather condition
 */
const getIcon = (iconCode, color, size) => {
  switch (iconCode) {
    case 200:
    case 201:
    case 202:
      return <WiThunderstorm color={color} size={size} />;
    case 230:
    case 231:
    case 232:
    case 233:
      return <WiStormShowers color={color} size={size} />;
    case 300:
    case 301:
    case 302:
      return <WiShowers color={color} size={size} />;
    case 500:
    case 501:
      return <WiRain color={color} size={size} />;
    case 502:
      return <WiRainWind color={color} size={size} />;
    case 511:
    case 520:
    case 521:
    case 522:
      return <WiRain color={color} size={size} />;
    case 600:
    case 601:
    case 602:
    case 610:
      return <WiSnow color={color} size={size} />;
    case 611:
    case 612:
      return <WiSleet color={color} size={size} />;
    case 615:
    case 621:
    case 622:
    case 623:
      return <WiSnow color={color} size={size} />;
    case 700:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
      return <WiCloudyWindy color={color} size={size} />;
    case 800:
      return <WiMoonAltFull color={color} size={size} />;
    case 801:
      return <WiCloud color={color} size={size} />;
    case 802:
    case 803:
    case 804:
      return <WiCloudy color={color} size={size} />;
    case 900:
      return <WiRain color={color} size={size} />;
    default:
      return <WiMoonAltFull color={color} size={size} />;
  }
};

export default getIcon;
