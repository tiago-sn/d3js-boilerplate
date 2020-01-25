import { Configuration } from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common';

const config: Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // hot: true
  }
};

export default merge(common, config);
