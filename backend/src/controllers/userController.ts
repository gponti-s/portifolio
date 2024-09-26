import { Router, Request, Response, NextFunction } from "express";
import UserRepository from "../repositories/userRepository";
import { UserService } from "../services/userService";
import { asyncHandler } from "../utils/asyncHandler.js";
import IUserInput from "models/userModels/IUserInput";

const router = Router();
const userService = new UserService(new UserRepository());

router.get("/", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.findAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}));

router.get("/:id", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}));

router.post("/create", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser: IUserInput = req.body;
        const createdUser = await userService.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
}));

router.put("/update/:id", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userToUpdate: IUserInput = req.body;
        const updatedUser = await userService.updateUser(req.params.id, userToUpdate);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}));

router.delete("/delete/:id", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
}));

router.get("/email/:email", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findUserByEmail(req.params.email);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}));

router.get("/username/:username", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.findUserByUsername(req.params.username);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}));

router.get("/country/:country", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.findUsersByCountry(req.params.country);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}));

router.get("/gender/:gender", asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.findUsersByGender(req.params.gender);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}));

export default router;