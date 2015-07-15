import { element } from 'deku'

import Debug from './components/debug'
import LogoText from './components/logo-text'
import Paypal from './templates/paypal'
import Stripe from './components/stripe'
import Apps from './components/apps'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Register from './components/register'
import NumText from './components/num-text'
import Row from './components/grid-row'
import Col from './components/grid-col'

let Layout = {

  initialState() {
    return {
      page: 'login',
      app: {},
    }
  },

  render(c, update) {
    let { props, state } = c

    let login = () => update({ page: 'login' })
    let apps = () => update({ page: 'apps' })
    let payment = app => {
      console.log(app)
      update({ page: 'payment', app: app })
    }
    let dashboard = () => update({ page: 'dashboard' })

    let onLaunch = payment

    return (
      <ul class="page">
        <LogoText>Klouds.io</LogoText>
        <Debug><button onClick={login}>LOGIN</button><button onClick={apps}>APPS</button><button onClick={payment}>PAYMENT</button><button onClick={dashboard}>DASHBOARD</button></Debug>

        <li class={{ active: state.page === 'login' }}>
          <NumText left="">Open Klouds</NumText>
          <Row xs={'center'}>
            <Col xs={[6]}>
              <Login />
            </Col>
            <Col xs={[6]}>
              <Register />
            </Col>
          </Row>
        </li>

        <li class={{ active: state.page === 'apps' }}>
          <NumText left="">Browse Apps</NumText>
          <Apps onLaunch={onLaunch} />
        </li>

        <li class={{ active: state.page === 'payment' }}>
          <NumText left="">Checkout</NumText>

          <Stripe {... state.app } />
        </li>

        <li class={{ active: state.page === 'dashboard' }}>
          <NumText left="">Dashboard</NumText>
          <Dashboard />
        </li>

      </ul>
    )
  }
}

export default Layout
