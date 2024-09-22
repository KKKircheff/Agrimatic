import {extendTheme, PaletteRange} from '@mui/joy/styles';

declare module '@mui/joy/styles' {
    interface ColorPalettePropOverrides {
        // apply to all Joy UI components that support `color` prop
        secondary: true;
    }

    interface Palette {
        // this will make the node `secondary` configurable in `extendTheme`
        secondary: PaletteRange;
    }

    interface Radius {
        full: string;
    }

    interface FontSize {
        xSmallTitle: string;
        smallTitle: string;
        mediumTitle: string;
        largeTitle: string;
        xLargeTitle: string;
        xxLargeTitle: string;
        xxxLargeTitle: string;
    }
}

export const theme = extendTheme({
    fontFamily: {
        body: 'HelveticaNeue',
        display: 'HelveticaNeue',
        code: 'HelveticaNeue',
        fallback: 'sans-serif',
    },

    fontSize: {
        xSmallTitle: '0.9rem',
        smallTitle: '1.2rem',
        mediumTitle: '1.7rem',
        largeTitle: '2rem',
        xLargeTitle: '2.3rem',
        xxLargeTitle: '2.7rem',
        xxxLargeTitle: '3rem',
    },

    radius: {
        xs: '5px',
        sm: '10px',
        md: '15px',
        lg: '20px',
        xl: '25px',
        full: '50px',
    },
    // box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    // box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    shadow: {
        xs: 'var(--joy-shadowRing, 0 0 #000), 0px 1px 2px 0px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.12))',

        sm: 'var(--joy-shadowRing, 0 0 #000), 0px 1px 2px 1px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08)), 0px 2px 2px 1px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.08))',

        md: 'var(--joy-shadowRing, 0 0 #000), 0px 2px 8px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.12)), 0px 6px 12px -2px rgba(var(--joy-shadowChannel, 21 21 21) / var(--joy-shadowOpacity, 0.12))',
    },

    colorSchemes: {
        light: {
            palette: {
                primary: {
                    '50': '#f9dad1',
                    '100': '#f0b5a4',
                    '200': '#e39179',
                    '300': '#d46c50',
                    '400': '#c24429',
                    '500': '#DD0000',
                    '600': '#940d03',
                    '700': '#7b1204',
                    '800': '#621404',
                    '900': '#4b1404',
                    solidHoverBg: 'var(--joy-palette-primary-400)',
                },
                secondary: {
                    '50': '#e8f1cb',
                    '100': '#dceab1',
                    '200': '#d0e497',
                    '300': '#c3dd7d',
                    '400': '#b6d662',
                    '500': '#a8cf44',
                    '600': '#8eae3c',
                    '700': '#758f34',
                    '800': '#5d712b',
                    '900': '#465423',
                    solidColor: 'var(--joy-palette-secondary-50)',
                    solidBg: 'var(--joy-palette-secondary-400)',
                    solidHoverBg: 'var(--joy-palette-secondary-700)',
                    solidActiveBg: 'var(--joy-palette-secondary-500)',
                    solidDisabledColor: 'var(--joy-palette-neutral-500)',
                    solidDisabledBg: 'var(--joy-palette-neutral-800)',
                    outlinedBorder: 'var(--joy-palette-secondary-500)',
                    outlinedColor: 'var(--joy-palette-secondary-700)',
                    outlinedActiveBg: 'var(--joy-palette-secondary-100)',
                    softColor: 'var(--joy-palette-secondary-800)',
                    softBg: 'var(--joy-palette-secondary-200)',
                    softActiveBg: 'var(--joy-palette-secondary-300)',
                    plainColor: 'var(--joy-palette-secondary-700)',
                    plainActiveBg: 'var(--joy-palette-secondary-100)',
                },
                neutral: {
                    50: '#ffffff',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
                danger: {
                    '50': '#ffc5b7',
                    '100': '#ff9e89',
                    '200': '#ff8973',
                    '300': '#fe735e',
                    '400': '#f95c49',
                    '500': '#F44034',
                    '600': '#d63b2f',
                    '700': '#b9362a',
                    '800': '#9d3025',
                    '900': '#67241b',
                },
                success: {
                    '50': '#e4fbdc',
                    '100': '#c9f7b9',
                    '200': '#abf296',
                    '300': '#89ed72',
                    '400': '#5fe74a',
                    '500': '#05E105',
                    '600': '#00b400',
                    '700': '#008800',
                    '800': '#005e00',
                    '900': '#003800',
                    solidHoverBg: 'var(--joy-palette-success-400)',
                },
                warning: {
                    '50': '#fff4e4',
                    '100': '#ffeac8',
                    '200': '#ffdfad',
                    '300': '#ffd592',
                    '400': '#ffca77',
                    '500': '#ffc05a',
                    '600': '#e99900',
                    '700': '#d38700',
                    '800': '#bd7600',
                    '900': '#a86400',
                    solidHoverBg: 'var(--joy-palette-warning-400)',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    '50': '#e8f1cb',
                    '100': '#dceab1',
                    '200': '#d0e497',
                    '300': '#c3dd7d',
                    '400': '#b6d662',
                    '500': '#a8cf44',
                    '600': '#8eae3c',
                    '700': '#758f34',
                    '800': '#5d712b',
                    '900': '#465423',
                    solidHoverBg: 'var(--joy-palette-primary-400)',
                },
                secondary: {
                    '50': '#d9deec',
                    '100': '#b4bfd9',
                    '200': '#8fa0c5',
                    '300': '#6a82b3',
                    '400': '#4266a0',
                    '500': '#4470cf',
                    '600': '#0e3f74',
                    '700': '#13335c',
                    '800': '#142845',
                    '900': '#121d30',
                    solidColor: 'var(--joy-palette-secondary-50)',
                    solidBg: 'var(--joy-palette-secondary-400)',
                    solidHoverBg: 'var(--joy-palette-secondary-700)',
                    solidActiveBg: 'var(--joy-palette-secondary-500)',
                    solidDisabledColor: 'var(--joy-palette-neutral-500)',
                    solidDisabledBg: 'var(--joy-palette-neutral-800)',
                    outlinedBorder: 'var(--joy-palette-secondary-500)',
                    outlinedColor: 'var(--joy-palette-secondary-700)',
                    outlinedActiveBg: 'var(--joy-palette-secondary-100)',
                    softColor: 'var(--joy-palette-secondary-800)',
                    softBg: 'var(--joy-palette-secondary-200)',
                    softActiveBg: 'var(--joy-palette-secondary-300)',
                    plainColor: 'var(--joy-palette-secondary-700)',
                    plainActiveBg: 'var(--joy-palette-secondary-100)',
                },
                neutral: {
                    50: '#ffffff',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
                danger: {
                    '50': '#ffc5b7',
                    '100': '#ff9e89',
                    '200': '#ff8973',
                    '300': '#fe735e',
                    '400': '#f95c49',
                    '500': '#F44034',
                    '600': '#d63b2f',
                    '700': '#b9362a',
                    '800': '#9d3025',
                    '900': '#67241b',
                },
                success: {
                    '50': '#e4fbdc',
                    '100': '#c9f7b9',
                    '200': '#abf296',
                    '300': '#89ed72',
                    '400': '#5fe74a',
                    '500': '#05E105',
                    '600': '#00b400',
                    '700': '#008800',
                    '800': '#005e00',
                    '900': '#003800',
                },
                warning: {
                    '50': '#fff4e4',
                    '100': '#ffeac8',
                    '200': '#ffdfad',
                    '300': '#ffd592',
                    '400': '#ffca77',
                    '500': '#ffc05a',
                    '600': '#ffb63b',
                    '700': '#e99900',
                    '800': '#d38700',
                    '900': '#bd7600',
                },
            },
        },
    },

    components: {
        JoyButton: {
            styleOverrides: {
                root: ({theme, ownerState}) => {
                    const borderRadius = theme.vars.radius.xl;
                    const fontWeight = theme.vars.fontWeight.md;

                    const color = ownerState.variant !== 'solid' ? '' : 'white';

                    const hoverBackgroundColor =
                        theme.vars.palette[ownerState.color!].solidHoverBg;
                    const hoverColor =
                        ownerState.variant === 'solid' ? '' : 'white';

                    return {
                        borderRadius,
                        fontWeight,
                        color,
                        '&:hover': {
                            backgroundColor: hoverBackgroundColor,
                            color: hoverColor,
                        },
                    };
                },
            },
        },
    },
});

export default theme;
