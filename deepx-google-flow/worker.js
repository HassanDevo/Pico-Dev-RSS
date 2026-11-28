// DeepX Google Flow Studio — Pico Dev plugin worker. All logic lives in deepx-core.js.
import { configureDeepX, deepxExecute, mcpListener } from './deepx-core.js';
configureDeepX({ pluginId: 'deepx-google-flow', version: '1.2.4' });
chrome.runtime.onMessage.addListener(mcpListener(deepxExecute));
