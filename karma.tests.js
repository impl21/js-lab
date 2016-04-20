var webContext = require.context('./web/test', true, /-spec\.js?$/);
webContext.keys().forEach(webContext);