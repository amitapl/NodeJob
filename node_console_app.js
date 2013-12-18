var fs = require('fs');

fs.writeFileSync(process.env['WEBROOT_PATH'] + '\\..\\..\\LogFiles\\node_console_app.txt', 'Verified!!!');

function whileLoop() {
  console.log('In while loop');
  setTimeout(whileLoop, 1000);
}

whileLoop();
