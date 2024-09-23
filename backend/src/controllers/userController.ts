import { Router, Request, Response } from "express";
import UserRepository from "../repositories/userRepository";
import { UserService } from "../services/userService";
import { asyncHandler } from "../../utils/asyncHandler";

const router = Router();
const userService = new UserService(UserRepository);

router.get("/", asyncHandler(async (req: Request, res: Response) => {
    const users = await userService.findAllUsers();
    res.json(users);
}));

router.get("/:id", asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.findUserById(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
}));

router.post("/create", asyncHandler(async (req: Request, res: Response) => {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
}));

router.put("/update/:id", asyncHandler(async (req: Request, res: Response) => {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
}));

router.delete("/delete/:id", asyncHandler(async (req: Request, res: Response) => {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
}));

router.get("/email/:email", asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.findUserByEmail(req.params.email);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
}));

router.get("/username/:username", asyncHandler(async (req: Request, res: Response) => {
    const user = await userService.findUserByUsername(req.params.username);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
}));

router.get("/country/:country", asyncHandler(async (req: Request, res: Response) => {
    const users = await userService.findUserByCountry(req.params.country);
    res.json(users);
}));

router.get("/gender/:gender", asyncHandler(async (req: Request, res: Response) => {
    const users = await userService.findUserByGender(req.params.gender);
    res.json(users);
}));

export default router;