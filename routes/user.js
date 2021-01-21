import express from 'express';
import { loginController, registerController } from '../controller/user.controller';

const userRoute = new express.Router();

userRoute.post('/register', registerController)
userRoute.post('/login', loginController)

export default userRoute;