import { themes } from '@storybook/theming'
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css'

const isProductionEnvironment = process.env.NODE_ENV === "production"
const serviceWorkerUrl = isProductionEnvironment ? "ignite-lab-design-system/mockServiceWorker.js" : "mockServiceWorker.js"

// Initialize MSW
initialize({
  onUnhandledRequest: "bypass",
  serviceWorker: {
    url: serviceWorkerUrl
  }
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  }
}