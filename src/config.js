/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

import WeatherEdit from './components/Blocks/Weather/Edit';
import WeatherView from './components/Blocks/Weather/View';
import worldSVG from '@plone/volto/icons/world.svg';
// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config.blocks.blocksConfig.weather = {
    id: 'weather',
    title: 'Weather',
    icon: worldSVG,
    group: 'common',
    edit: WeatherEdit,
    view: WeatherView,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blocks: {},
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
}
