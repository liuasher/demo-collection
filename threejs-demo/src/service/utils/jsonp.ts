// Callback index.
let count = 0;

// Noop function
function noop() { }

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url: string, opts: any, fn: any) {
    if (typeof opts === 'function') {
        fn = opts;
        opts = {};
    }

    if (!opts) {
        opts = {};
    }

    const prefix = opts.prefix || '__jp';

    // use the callback name that was passed if one was provided.
    // otherwise generate a unique name by incrementing our counter.
    const id = opts.name || prefix + (count += 1);

    const param = opts.param || 'callback';
    const timeout = opts.timeout ? opts.timeout : 60000;
    const enc = encodeURIComponent;
    const target = document.getElementsByTagName('script')[0] || document.head;
    let script: any;
    let timer: any;

    function cleanup() {
        if (script.parentNode) {
            script.parentNode.removeChild(script);
        }
        (<any>window)[id] = noop;

        if (timer) {
            clearTimeout(timer);
        }
    }

    if (timeout) {
        timer = setTimeout(() => {
            cleanup();
            if (fn) {
                const error: any = {
                    code: -9999,
                    data: null,
                    msg: new Error('Timeout')
                };
                fn(error);
            }
        }, timeout);
    }

    function cancel() {
        if ((<any>window)[id]) {
            cleanup();
        }
    }

    (<any>window)[id] = function succeess(data: any) {
        cleanup();
        if (fn) {
            fn(data);
        }
    };

    // add qs component
    url += `${(~url.indexOf('?') ? '&' : '?') + param}=${enc(id)}`;
    url = url.replace('?&', '?');

    // console.log('jsonp req "%s"', url);

    // create script
    script = document.createElement('script');
    script.src = url;
    target.parentNode.insertBefore(script, target);

    return cancel;
}

export default jsonp;
