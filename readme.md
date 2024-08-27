# Assignment - First images and containers with Docker

I'm using an example server from the User-centric Application Develoment course. To check that it works locally, I ran the commands `npm i` and `npm run dev`. After confirming it works, I initialized Docker using the `docker init` command.

I reviewed the Dockerfile and added the watch configuration to the `compose.yaml` file. I also changed the host address to `0.0.0.0` in the `index.js` file.

I added Mongo functionality by first running the command `$env:MONGODB_VERSION="6.0-ubi8"` and then `docker run --name mongodb -d mongodb/mongodb-community-server:$env:MONGODB_VERSION`. I also added Mongo to the `compose.yaml` file.

Finally, I used the command `docker compose up --build` to build the application. Unfortunately, it doesn't work under Docker.
