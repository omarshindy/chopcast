# chopcast Telegram Bot
## Live Chat with your customers from one place 

ChopcastBot is an admin chat-based website enables chopcast admins to interact and chat with Telegram Users through admin website built with rails and ReactJS.

## Links

- Telegram ChopcatBot: [Chopcast](https://t.me/chopcastbot)
- Admin Portal: [Admin](http://localhost:8080/)  "after finishing the installation guide"

## Features

- Realtime chat with possible leads and customers from Telegeram.
- Handling Images sent from Telegram user and show it in admin dashboard.
- and a lot to be added!


## Tech

Dillinger uses a number of open source projects to work properly:

- Ruby on rails [To build the main Backend services]
- ReactJS [To build the UI and Handle Requests from FE to BE]
- telegram-bot-rb [To handle TelegramBot to Rails integration]
- Docker [To containerize the application]
- Material UI 


## Installation

## Docker

ChopcastBot is very easy to install using Docker containers.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd chopcast
docker-compose up --build "for the first build only"
docker-compose up -d "after the first build"
```

This will run and build the chopcastBot image and start all the services.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8080
```
# RESTAPIDocs Examples

These examples were taken from project.

Ue Can find a [Postman](https://www.getpostman.com/collections/d300b931b9c14c6c0c8b)

to use it you should import the collection localy from postman app.

## Users Endpoint

* [Get All Users](readme/GetUsers.md) : `GET /api/users`

## Messages Endpoints

* [Get All Messages](readme/GetAllMessages.md) : `GET /api/messages`
* [Get User Messages](readme/GetUserMessages.md) : `GET /api/:chat_id/messages`
* [Post Message to user](readme/PostMessages.md) : `POST /api/:chat_id/messages`

## Enhancements and Development

* The Frontend isn't realtime ----> we should implement sockets between frontend and backend to establish realtime connection.
* I searched rspecs to dump data and test restapis but didn't had time to do so.
