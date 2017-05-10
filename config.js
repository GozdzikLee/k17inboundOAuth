var config = {};  

// Replace <instance> with your Lab Instance prefix
config.instanceURL = 'https://ccw3959d-031.lab.service-now.com';   

// OAuth Configuration  
config.oauth = {};  
config.oauth.authURL      = config.instanceURL + '/oauth_auth.do';  
config.oauth.tokenURL     = config.instanceURL + '/oauth_token.do';  

// Replace <glitch-project> with your project name
config.oauth.callbackURL  = 'https://peridot-exhaust.glitch.me/auth/provider/callback';  

module.exports = config; 