import express from "express";
import path from "path";
import { assetsLocation } from "../../../assets/im_here";

const router = express.Router();

const whereFile = (req: any) =>
  path.join(
    assetsLocation() + `/uploadedFiles/${req.params.convertedFileName}`
  );

router.get("/uploadedFiles/:convertedFileName/image/read", (req, res) => {
  res.sendFile(whereFile(req));
});

router.get("/uploadedFiles/:convertedFileName/video/read", (req, res) => {
  res.sendFile(whereFile(req));
});

router.get("/uploadedFiles/:convertedFileName/audio/read", (req, res) => {
  res.sendFile(whereFile(req));
});

export default router;
