/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      ['@babel/preset-typescript', { allowDeclareFields: true }],
    ],
  }),
  webpackFinal: async (config) => {
    // Resolve aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      fonts: require('path').resolve(__dirname, '../src/fonts'),
      components: require('path').resolve(__dirname, '../src/components'),
      src: require('path').resolve(__dirname, '../src'),
    };

    // Настройка для SCSS модулей
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    });

    // Настройка для обычных SCSS файлов
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
};

export default config;
