<h1 align="center">Welcome to Jaime's Playground</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> I use this repo and its different versions to practice new stuff I'm learning.

This project is based on a coding challenge accessible  <a href="https://github.com/VictorRodriguezIronhack/reto_web">here</a>.

Data is stored in <code>MongoDB</code> Atlas and served through an <code>API REST</code> built using <code>Express.js</code> and <code>Node.js</code>, and deployed to Heroku.

Client was built with <code>React</code> using <code>Hooks</code>, <code>React Bootstrap</code> components and some <code>Saas</code>, and also deployed to Heroku.

Access the app in the link below!👇

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[Jaime's Playground](https://jaimes-playground.herokuapp.com/)


## Install

```sh
cd client; npm install; cd ../server; npm install;
```
Paste the following in the <code>.env</code> file:

```sh
PORT=5000

DB_NAME=phoneCave

DB_HOST=mongodb://localhost

DOMAIN=http://localhost:3000
```

## Usage

In different terminals:

```sh
cd server; npm run dev;
```
```sh
cd client; npm start;
```

## Endpoints Table

### Client

| Verb | Endpoint         | Result        |
| ---- | ---------------- | ------------- |
| GET  | "/"              | Home page     |
| GET  | "/teléfonos"     | Phones list   |
| GET  | "/teléfonos/:id" | Phone details |

### Server

| Verb | Endpoint            | Result                              |
| ---- | ------------------- | ----------------------------------- |
| GET  | "/api/phones"       | All phones json              |
| GET  | "/api/phones/:id"   | Selected phone json fetched by Id  |

## Author

👤 **Jaime Fernández-Castaño**

* Github: [@jaimeferncast](https://github.com/jaimeferncast)
* LinkedIn: [@jaimeferncast](https://linkedin.com/in/jaimeferncast)

<br/>
<br/>
<br/>

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
