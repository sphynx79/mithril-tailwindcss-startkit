if (module.hot) {
    module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
    // console.log('Looks like we are in development mode!');
    (function(global) {
        var console_log = global.console.log
        global.console.log = function() {
            if (!(
            arguments.length == 1 &&
                typeof arguments[0] === 'string' &&
                arguments[0].match(/^\[(HMR|WDS)\]/)
        )) {
                console_log.apply(global.console,arguments)
            }
        }
    })(window)
}

import "../init"
