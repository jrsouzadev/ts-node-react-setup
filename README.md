<h1>Full Stack App Setup (Typescript, Node and React)</h1>
by João Ricardo de Souza, October 2020<br>
Using create-react-app for client and node-typescript-structure by Rocketseat<br>
(https://github.com/rocketseat-content/node-typescript-structure)<br><br>

Stack:
- Typescript
- Node
- Express
- React (create-react-app)
- Socket IO
- Babel
- ESLint
- Jest

Run <code>npm install && cd client && npm install</code> to add dependencies and it's ready for development


<b>DEVELOP</b>

<code>npm run dev:server (server)</code><br>
<code>npm run dev:client (client)</code><br>
<code>npm run dev (both)</code><br>
When not in production, server will not serve static assets


<b>TEST</b>

<code>npm run test</code><br>
Run tests with Jest


<b>BUILD</b>

<code>npm run build:client</code><br>
This command will build the client folder<br>
CRA was ejected and tweaked so the client will be built in dist/public

<code>npm run build</code><br>
This will build the server after the client is done


<b>START</b>

<code>npm run start</code><br>
Client must be built for distribution<br>
Will start node in dist/index.js in production mode


<b>DEPLOY</b>

Can be deployed easily into Heroku, for instance<br>
<code>heroku-prebuild</code> command will build the client automatically for you once in their server<br>
<code>git add . && git commit -a && git push heroku master</code>