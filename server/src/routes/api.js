import express from "express";
import SignUp from "../controllers/SignUp.controller.js";
import Login from "../controllers/Login.controller.js";
import Logout from "../controllers/Logout.controller.js";
import { AdminDashoard, ApproveUserAccount } from "../controllers/AdminDashboard.controller.js";

const apiRoute = express.Router();
export const apiProtected = express.Router();

//SignUp route
apiRoute.post('/signup', SignUp);

//Login route 
apiRoute.post('/login', Login);

// Logout route - clear session variables and destroy JWT token
apiRoute.get('/logout', Logout);

//Protected routes (routes that require user to be logged in)

// Admin Dashboard Routes
apiProtected.get('/admin/dashboard', AdminDashoard);

// Apprive  User Account Route
apiProtected.post('/admin/dashboard/approve', ApproveUserAccount);

export default apiRoute;