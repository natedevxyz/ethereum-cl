import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/dm-sans';

const fonts = {
	...chakraTheme.fonts,
	body: '"DM Sans", sans-serif',
	heading: '"Poppins", sans-serif',
};

const breakpoints = {
	sm: '320px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
};

const overrides = {
	...chakraTheme,
	fonts,
	breakpoints,
	fontWeights: {
		normal: 300,
		medium: 600,
		bold: 700,
	},
	fontSizes: {
		xs: '12px',
		sm: '14px',
		md: '16px',
		lg: '18px',
		xl: '20px',
		'2xl': '24px',
		'3xl': '28px',
		'4xl': '36px',
		'5xl': '48px',
		'6xl': '64px',
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;
