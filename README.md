# mongodb-crud
crud with mongodb (native drive)

## REST API

List of user routes:

| Route               | HTTP          | Description      |
|:--------------------|:-------------:|:----------------|
| `/api/signup`       |POST           | Sign up with new user info|
| `/api/signin`       |POST           | Sign in with avaliable user info|
| `/api/users`        |GET            | Get all the users (admin only)|
| `/api/users/:id`    |GET            | Get a single user (admin and authenticated user)|
| `/api/users`        |POST           | Create a user (admin only)|
| `/api/users/:id`    |DELETE         | Delete a user (admin only)|
| `/api/users/:id`    |PUT            | Update a user with new info (admin and authenticated user)|

## Usage
with only npm :
```
$ npm install
$ npm start
$ npm run dev
```
