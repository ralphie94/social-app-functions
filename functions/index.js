const functions = require('firebase-functions');

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require("./handlers/users")

const express = require("express");
const app = express();

const FBAuth = require("./util/fbAuth")

// Scream Routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

// Users routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage)

exports.api = functions.https.onRequest(app);