var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context: ['/api', '/upload'],
  target: 'https://www.techbrainsinnovative.com',
  secure: false,
  logLevel: 'debug'
}];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);