import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("user page");
});

export default router;
