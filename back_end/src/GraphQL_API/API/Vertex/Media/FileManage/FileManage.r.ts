import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
  Query: {
    FileManage: async (_: void, __: void, { req, isAuthenticated }: any) => {
      isAuthenticated(req);
      const { user } = req;
      try {
        const images = await prisma.image.findMany({
          where: {
            directory_directoryToimage: {
              user: user.user_id,
            },
          },
          select: {
            volume: true,
          },
        });
        const musics = await prisma.music.findMany({
          where: {
            directory_directoryTomusic: {
              user: user.user_id,
            },
          },
          select: {
            volume: true,
          },
        });
        const videos = await prisma.video.findMany({
          where: {
            directory_directoryTovideo: {
              user: user.user_id,
            },
          },
          select: {
            volume: true,
          },
        });
        let imageVolumeArr: number[] = [];
        let musicVolumeArr: number[] = [];
        let videoVolumeArr: number[] = [];
        for (let i = 0; i < images.length; i++) {
          const { volume: deConstructed } = images[i];
          imageVolumeArr = imageVolumeArr.concat(deConstructed);
        }
        for (let i = 0; i < musics.length; i++) {
          const { volume: deConstructed } = musics[i];
          musicVolumeArr = musicVolumeArr.concat(deConstructed);
        }
        for (let i = 0; i < videos.length; i++) {
          const { volume: deConstructed } = videos[i];
          videoVolumeArr = videoVolumeArr.concat(deConstructed);
        }
        const imgVsum = imageVolumeArr.reduce((a, b) => a + b);
        const MscVsum = musicVolumeArr.reduce((a, b) => a + b);
        const vdoVsum = videoVolumeArr.reduce((a, b) => a + b);
        return {
          images: {
            count: images.length,
            volume: imgVsum,
          },
          musics: {
            count: musics.length,
            volume: MscVsum,
          },
          videos: {
            count: videos.length,
            volume: vdoVsum,
          },
        };
      } catch (e) {
        console.log(e);
        return null;
      }
    },
  },
};
