import store from './State';

export function handleValues(expect, value, render) {
    console.log(expect);
    switch(expect) {
        case 'start':
            currentButtonStart(value, render);
            break;
        case 'stop':
            break;
        case 'reset':
            reset(render);
            break;
        default:
            return;
    }
}

function currentButtonStart(value, render) {
    let [h, m, s] = value.split(':');

    if(parseInt(s) === 59) {
        s = 0;
        m = parseInt(m) + 1
    } else s = parseInt(s) + 1;

    if(parseInt(m) === 60) {
        m = 0;
        h = parseInt(h) + 1
    }

    h = parseInt(h);
    m = parseInt(m);


    store.record = [h, m, s];
    render();
}

function reset(render) {
    let [h, m, s] = [0, 0, 0];
    store.record = [h, m, s];
    render();
}