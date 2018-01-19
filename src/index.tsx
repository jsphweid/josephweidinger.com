import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Main from './app/main'

import './styles.scss'

ReactDOM.render(
    <Main />,
    document.getElementById('app')
)

if (module.hot) module.hot.accept()
