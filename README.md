# Internet History app for an ambient data monitoring system

Build a Restful CRUD API application using Node.js, MongoDB and Express (JS).

Virtopeanu Alexandru, 1231B

Stefan Corneteanu, 1231A

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
node server.js
```

3. Connect via browser to `http://localhost:3000`.

4. Login as an admin, or as a user (input the username).

Note: We assume that the internet history is automatically being POSTed to the DB externally. This project doesn't handle internet history gathering! CRUD API is at <http://localhost:3000>.


## DB 

##### Models

For the DB we use NoSQL MongoDB. We have two models: `user` and `request`. A request is meant to represent a visited site. We can link a request to the user who made it via the `userIp` variable. The admin isn't able to see this data via the front-end HTML page.

##### Routes

Most important:

```
GET all history for a specific user: http://localhost:3000/requests/:username -> this first interrogates the users model by username, gets IP, then looks in the requests model for all requests from that specific IP
GET all history: http://localhost:3000/requests
GET all users: http://localhost:3000/users
POST new history: http://localhost:3000/request
POST new user: http://localhost:3000/user
```
(and more)

##### Controllers

The controller functions are using basic queries to MongoDB. Functions used include `Mongoose.find`, `Mongoose.remove`, `Mongoose.findOne`, etc. These are called with an anonymous callback func.


## Front-end

We use JS to link the DB to the HTML page. All requests are simply printed in a list for the admin.

![image](https://user-images.githubusercontent.com/44416281/149515282-31a5661c-503e-45f6-92a0-84308893a1a3.png)

For a simple user, only their personal history is shown.

