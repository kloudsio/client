import { element } from 'deku'

import Form from './form'

async function register(email, password) {

  if (password !== password2) {
    return { error: 'Passwords do not match.' }
  }

  return login(email, password)
  let { data, err } = await Api.register({email, password})
  if (err) {
    console.error(err);
    return { error: err.error }
  }

  Api.setAuthToken(data.token)
  return data
}

let Register = {
  render({state, props}) {
    return <Form onSubmit={register} class="login">
        <h4>Email</h4>
        <input type="email" class="email" />
        <h4>Password</h4>
        <input type="password" class="password" />
        <h4> Confirm Password </h4>
        <input type="password" class="password2" />
        <input type="button" class="register-btn" value="Register" />
     </Form>
  }
}


export default Register
