# uru-web-2-final-project-api-wrapper

JavaScript client for the Web 2 final project API. It exposes each endpoint as a method of one class, so a frontend can call the API without writing `fetch` code.

**Note:** This repository is archived and read-only, and it is coursework. It is published as the npm package `@ralvarezdev/uru-web-2-final-project-api-wrapper`.

The wrapper targets [`uru-web-2-final-project-api`](https://github.com/uru-web-2/uru-web-2-final-project-api): it sends JSON `POST` requests to routes such as `/signup`, and sends multipart forms (a `file`, `images` and the JSON body as a `stringify` field) for operations that upload files.

## Usage

`index.js` exports `APIWrapper`, an ES module class built with the API host. It has about 70 methods, named after the operation (`SignUp`, `LogIn`, `LogOut`, `SendEmailVerification`, `VerifyEmail`, `ForgotPassword`, `ResetPassword`, `Execute`, `CreateProfile`, `UpdateProfile` and so on). Each returns the `fetch` response.

```js
import {APIWrapper} from '@ralvarezdev/uru-web-2-final-project-api-wrapper'

const api = new APIWrapper('http://localhost:3000')
const response = await api.LogIn(/* credentials */)
```

Check the method signatures in `index.js` before use; the example above is only the call shape.

## License

GNU General Public License v3.0. `package.json` declares `GPL-3.0-only`, matching the `LICENSE` file.
