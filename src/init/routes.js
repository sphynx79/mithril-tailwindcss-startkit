import Layout from 'components/layout/layout.js'
import Main   from 'components/main/main.js'

m.route.prefix('')

m.route(document.getElementById("app"), '/', {
    '/': {render: () => {return m(Layout,{main: Main})}}
    })

