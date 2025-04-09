# product-catalog-front
Product catalog test frontend. Application is a frontend React app for a Java api.

This backend uses Basic Authentication by request, so for simplicity it has one programmed user:
```
Username: user
Password: password
```

This user and password will be sent on the authorization header of every api call, encoded.

By default, the app will communicate with a backend at localhost:8080. If you need to chenge this,
edit the .env file on the project root and change this line to what is your server address:
```
REACT_APP_API_URL=http://localhost:8080/api/v1
```

Usual approach would be to use JWT, and store the token either in local or session storage with a cookie.
Since this is basic authentication, the auth header is being stored in a cookie, but without it being http only
and secure for simplicity while showing usual ways to use it.

## How to run

In the project directory, run:
```
yarn install
```

When it is done, you can run with the scripts below.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
