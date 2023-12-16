
const fontConfig = {
  SemiBold700: {
    fontFamily: 'SegoeUI-Bold',
    fontWeight: '700',
  },
  SemiBold600: {
    fontFamily: 'SegoeUI-Bold',
    fontWeight: '600',
  },
  Regular: {
    fontFamily: 'SegoeUI-Regular',
    fontWeight: '400',
  },
};

const presets = {
  hero1: {
    // ...fontConfig.SemiBold,
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0,
  },
  hero2: {
    // ...fontConfig.Regular,
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0,
  },
  h1: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0,
  },
  h2: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0,
  },
  h4: {
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0,
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
  },
  subhead: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0,
  },
  footnote: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
};

const getFontStyleObject = (preset, type = 'Regular') => {
  if (type === 'semibold') {
    if (['hero1', 'hero2', 'h1', 'h2'].includes(preset)) {
      return {
        ...presets[preset],
        ...fontConfig.SemiBold700,
      };
    } else {
      return {
        ...presets[preset],
        ...fontConfig.SemiBold600,
      };
    }
  }
  return {
    ...presets[preset],
    ...fontConfig.Regular,
  };
};
export { presets, fontConfig, getFontStyleObject };
