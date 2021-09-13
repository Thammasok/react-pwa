import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// PWA
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

// Redux Store
import configStore from './redux/Store'

// Routers
import mainRouter from './routers'

// Layout & Views
import Layout from './layouts'
import NotFoundPage from './views/NotFound'

// i18n & Styles
import './i18n'
import './styles/Main.css'

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="Loading">
        <Router>
          <Switch>
            {mainRouter.map(route => {
              return (
                <Route
                  key={`router-${route.path.replaceAll('/', '-')}`}
                  path={route.path}
                  exact={route.exact}
                  render={() => {
                    return (
                      <Layout isAuth={route.isAuth} layout={route.layout}>
                        <route.component />
                      </Layout>
                    )
                  }}
                />
              )
            })}

            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
