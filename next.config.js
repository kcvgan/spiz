const path = require('path');
const webpack = require('webpack');
const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    webpack: config => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    }
});