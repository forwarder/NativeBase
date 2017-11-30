import { Platform } from 'react-native'

import variable from "./../variables/platform";

export default (variables = variable) => {
  let pickerTheme = {};

  if (Platform.OS === 'android') {
    pickerTheme = {
      ".note": {
        color: "#8F8E95"
      },
      width: 90,
      marginRight: -4
    };
  }

  return pickerTheme;
};
