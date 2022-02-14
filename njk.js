const env = nunjucks.configure({autoescape: true, web: {async: true}});


// Add another filters and global for demo
env.addFilter('time', datetime => new Date(+datetime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
env.addGlobal('now', () => Date.now());

export default env; 
