export const fontFamilyClasses = [
  'open-sans',
  'ubuntu',
  'cormorant-garamond',
  'days-one',
  'merriweather',
] as const;

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];

export type OptionType = {
  title: string;
  value: string;
  className: string;
  optionClassName?: string;
};

export const fontFamilyOptions: OptionType[] & {
  optionClassName?: FontFamiliesClasses;
} = [
  { title: 'Open Sans', value: 'Open Sans', className: fontFamilyClasses[0] },
  { title: 'Ubuntu', value: 'Ubuntu', className: fontFamilyClasses[1] },
  {
    title: 'Cormorant Garamond',
    value: 'Cormorant Garamond',
    className: fontFamilyClasses[2],
  },
  { title: 'Days One', value: 'Days One', className: fontFamilyClasses[3] },
  {
    title: 'Merriweather',
    value: 'Merriweather',
    className: fontFamilyClasses[4],
  },
];

export const fontColors: OptionType[] = [
  {
    title: 'Schwarz',
    value: '#000000',
    className: 'font-black',
    optionClassName: 'option-black',
  },
  {
    title: 'Weiß',
    value: '#FFFFFF',
    className: 'font-white',
    optionClassName: 'option-white',
  },
  {
    title: 'Grau',
    value: '#C4C4C4',
    className: 'font-gray',
    optionClassName: 'option-gray',
  },
  {
    title: 'Rosa',
    value: '#FEAFE8',
    className: 'font-pink',
    optionClassName: 'option-pink',
  },
  {
    title: 'Pink',
    value: '#FD24AF',
    className: 'font-fuchsia',
    optionClassName: 'option-fuchsia',
  },
  {
    title: 'Gelb',
    value: '#FFC802',
    className: 'font-yellow',
    optionClassName: 'option-yellow',
  },
  {
    title: 'Grün',
    value: '#80D994',
    className: 'font-green',
    optionClassName: 'option-green',
  },
  {
    title: 'Hellblau',
    value: '#6FC1FD',
    className: 'font-blue',
    optionClassName: 'option-blue',
  },
  {
    title: 'Violett',
    value: '#5F0DEE',
    className: 'font-purple',
    optionClassName: 'option-purple',
  },
];

export const backgroundColors: OptionType[] = [
  {
    title: 'Weiß',
    value: '#FFFFFF',
    className: 'bg-white',
    optionClassName: 'option-white',
  },
  {
    title: 'Schwarz',
    value: '#000000',
    className: 'bg-black',
    optionClassName: 'option-black',
  },
  {
    title: 'Grau',
    value: '#C4C4C4',
    className: 'bg-gray',
    optionClassName: 'option-gray',
  },
  {
    title: 'Rosa',
    value: '#FEAFE8',
    className: 'bg-pink',
    optionClassName: 'option-pink',
  },
  {
    title: 'Pink',
    value: '#FD24AF',
    className: 'bg-fuchsia',
    optionClassName: 'option-fuchsia',
  },
  {
    title: 'Gelb',
    value: '#FFC802',
    className: 'bg-yellow',
    optionClassName: 'option-yellow',
  },
  {
    title: 'Grün',
    value: '#80D994',
    className: 'bg-green',
    optionClassName: 'option-green',
  },
  {
    title: 'Hellblau',
    value: '#6FC1FD',
    className: 'bg-blue',
    optionClassName: 'option-blue',
  },
  {
    title: 'Violett',
    value: '#5F0DEE',
    className: 'bg-purple',
    optionClassName: 'option-purple',
  },
];

export const contentWidthArr: OptionType[] = [
  {
    title: 'Breit',
    value: '1394px',
    className: 'width-wide',
    optionClassName: 'option-wide',
  },
  {
    title: 'Schmal',
    value: '948px',
    className: 'width-narrow',
    optionClassName: 'option-narrow',
  },
];

export const fontSizeOptions: OptionType[] = [
  { title: '18px', value: '18px', className: 'font-size-18' },
  { title: '25px', value: '25px', className: 'font-size-25' },
  { title: '38px', value: '38px', className: 'font-size-38' },
];

export const defaultArticleState = {
  fontFamilyOption: fontFamilyOptions[0],
  fontColor: fontColors[0],
  backgroundColor: backgroundColors[0],
  contentWidth: contentWidthArr[0],
  fontSizeOption: fontSizeOptions[0],
};

export type ArticleStateType = typeof defaultArticleState;
