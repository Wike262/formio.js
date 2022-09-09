export const deeplinkService = 'ru.gid.app://service/form/';

export const fontWeightOptions = [
  { label: '100', value: 100 },
  { label: '200', value: 200 },
  { label: '300', value: 300 },
  { label: '400', value: 400 },
  { label: '500', value: 500 },
  { label: '600', value: 600 },
  { label: '700', value: 700 },
  { label: '800', value: 800 },
  { label: '900', value: 900 },
];

const minFontSize = 8;
const maxFontSize = 73;
export const fontSizeOptions = Array.from({ length: maxFontSize - minFontSize }, (_, index) => ({
  label: index + minFontSize,
  value: index + minFontSize,
}));
