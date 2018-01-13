// src/components/main/main.js

import "./main.css"

class Main {

    constructor(vnode) {
        this._componentName = this.constructor.name
    }

    oninit({state}) {
        // init code
    }

    view({attrs}) {
        return m('#main', attrs, "Hello world")
    }

    oncreate({attrs, state}) {
        if (process.env.NODE_ENV !== 'production') {
            let logStateAttrs = {
                attrs: attrs,
                state: state
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }

}

export default Main
