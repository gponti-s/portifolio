import { Router, Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/userRepository.js";
import { UserService } from "../services/userService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import IUserModel from "../services/interfaces/models/IUserModel.js";
import { verifyToken } from "../utils/authentication/token.js";
import Mapper from "../utils/mappers.js";

const router = Router();
const userService = new UserService(new UserRepository());

router.get("/", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await Mapper.toUserModel(req)
        const users = await userService.findAllUsers(user);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}));

router.get("/:id", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}));

router.post("/register", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        const newUser: IUserModel = {
            reqBody: req.body
        };
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
}));

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { email, password } = req.body;
        const login = await userService.userLogin(email, password);
        res.status(200).json(login)
    } catch (error) {
        next(error)
    }
})

router.put("/update/:id", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const request = await Mapper.toUserModel(req);
        const updatedUser = await userService.updateUser(req.params.id, request);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}));

router.delete("/delete/:id", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await Mapper.toUserModel(req);
        console.log('Attempting to delete user:', {
            targetId: req.params.id,
            loggedUser: user.userLogged
        });
        const deletedUser = await userService.deleteUser(req.params.id, user);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error('Delete user error:', error);
        next(error);
    }
}));

router.get("/email/:email", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findUserByEmail(req.params.email);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}));

router.get("/username/:username", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findUserByUsername(req.params.username);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}));

router.get("/country/:country", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.findUsersByCountry(req.params.country);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}));

router.get("/gender/:gender", verifyToken, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.findUsersByGender(req.params.gender);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}));

export default router;