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
        return m('#main.text-5xl.text-yellow.hover:text-purple.font-sans.p-5', attrs, "Hello world")
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
