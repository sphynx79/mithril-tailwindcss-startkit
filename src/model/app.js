import stream  from 'mithril/stream'

class App {

    constructor() {
        this._modelName = this.constructor.name
    }

    dispatch(action, args) {
        this[action].apply(this, args || [])
        requestAnimationFrame(function() {
            localStorage["transmission"] = JSON.stringify(this)
        })
    }
 
}

window.appState = new App()

