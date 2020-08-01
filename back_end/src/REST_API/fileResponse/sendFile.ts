import express from "express";
import { binaryFileLocation } from "../../GlobalLib/assets/im_here";

const whereFile = (req: any) =>
  binaryFileLocation(req.params.convertedFileName);

const router = express.Router();

router.get("/:convertedFileName/image/read", (req, res) => {
  res.sendFile(whereFile(req));
});

router.get("/:convertedFileName/video/read", (req, res) => {
  res.sendFile(whereFile(req));
});

router.get("/:convertedFileName/audio/read", (req, res) => {
  res.sendFile(whereFile(req));
});

export default router;
