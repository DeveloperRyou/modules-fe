import type { Config } from 'tailwindcss';
import { merge } from 'lodash';
import ColorGroundConfig from './colorGround/ColorGround.config';
import tailwindColorConfig from './themeGround/tailwind_color.config';
import tailwindElevationConfig from './themeGround/tailwind_elevation.config';
import tailwindSpacingConfig from './themeGround/tailwind_spacing.config';
import tailwindRadiusConfig from './themeGround/tailwind_radius.config';
import tailwindMotionsConfig from './themeGround/tailwind_motions.config';
import tailwindTypographyConfig from './themeGround/tailwind_typography.config';

const baseConfig: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

const config: Config = merge(
    baseConfig,
    ColorGroundConfig,
    tailwindElevationConfig,
    tailwindSpacingConfig,
    tailwindRadiusConfig,
    tailwindMotionsConfig,
    tailwindTypographyConfig,
    tailwindColorConfig
);

export default config;
