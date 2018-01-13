// src/components/layout/layout.js

import "./layout.css";

class Layout {

    constructor() {
        this._componentName = this.constructor.name
    }

    view({attrs, state}) {
        return m("#layout", {class: "min-h-screen flex items-center justify-center bg-blue"}, [
            // m(attrs.sidebar, {class: (appState.sidebar ? "active" : "") + " " }),
            m(attrs.main, {onclick: () => {console.log("Hello from main")}}),
        ])
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

export default Layout
