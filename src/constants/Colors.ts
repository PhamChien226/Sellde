const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';


const Colors = {
  white: 'white',
  purpleDark: "#4642D4",
  purpleLight: "#3F51B5",
  purpleLightest: "#E2E3F8",
  orange: "#FF7F5F",
  gray:'#9394A6'
}

const Sizes = {
  textSmallest:12,
  textSmall:14,
  textMedium:16,
  textLarge:18,
  textLargest:22,
  header:28,
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },

};

export{
  Colors,
  Sizes,
}
