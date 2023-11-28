const { spawn } = require( 'child_process' );

try {
    spawn( 'npx', ['npm-force-resolutions'], {shell: true});
} catch(e) {}
