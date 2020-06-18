import React, {
  useState,
  ChangeEvent,
  useRef,
  MouseEvent,
  useEffect,
} from "react";
import UploadAudioPre from "./UploadMusicPre";
import { useMutation } from "@apollo/react-hooks";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";
import { BatchInfoMidPros, argsProcess } from "./UploadMusicLib";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { removeDuplicatesArray } from "../../../../GlobalLib/RecycleFunction/etc/ArrayProcessing";
import FileTransmissionAndResponse from "../../../../GlobalLib/RecycleFunction/etc/FileTransmissionAndResponse";
import { DefaultNumPros } from "../MediaUploadLib";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { MUSIC_GET } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioR";
import { AUDIO_UPLOAD } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Audio/AudioCUD";

type UploadAudioConProps = {
  setAddAudioScn: any;
  zIndex?: number;
  refetch?: any;
};
export default ({
  setAddAudioScn,
  zIndex = 20,
  refetch,
}: UploadAudioConProps) => {
  const DS = useDummyState();
  const DC = useDirMode();
  const PfM = useProfileMode();
  const [FileName, setFileName] = useState<any>([]);
  const [ImSelected, setImSelected] = useState<any>(null);
  const [AssignDirSeries, setAssignDirSeries] = useState<number[]>([]);
  const files = useRef<FileList | null>(null);
  const [ReadFiles, setReadFiles] = useState<any>([]);
  const [DirApOpen, setDirApOpen] = useState(false);
  const [UploadLoading, setUploadLoading] = useState(false);
  const [AddThumbnail, setAddThumbnail] = useState(false);
  // const [ThumbnailPath, setThumbnailPath] = useState("");
  // const [Thumbnails, setThumbnails] = useState<string[]>([]);

  const EachDirSet = () => {
    const { num } = ImSelected;
    setAssignDirSeries((p: number[]) => {
      p.splice(num, 1, DC.Location);
      return p;
    });
  };
  const SelectedFileNamesProcessing = (e: ChangeEvent<HTMLInputElement>) => {
    setImSelected(null);
    files.current = e.target.files;
    const { names } = BatchInfoMidPros(files);
    setFileName(names);
    // setThumbnails(TNpath);
    setAssignDirSeries(DefaultNumPros(files.current, DC));
    if (files.current) {
      let AudioUrls: any = [];
      for (let i = 0; i < files.current.length; i++) {
        AudioUrls = AudioUrls.concat([
          [i, URL.createObjectURL(files.current[i])],
        ]);
      }
      setReadFiles(AudioUrls);
    }
  };
  const fileDetailShow = (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    fewthOrder: number
  ) => {
    spaped(e);
    DC.setLocation(AssignDirSeries[fewthOrder]);
    // setThumbnailPath(Thumbnails[fewthOrder]);
    if (files.current) {
      let FInfo = files.current[fewthOrder];
      setImSelected({ FInfo, num: fewthOrder });
    }
    console.log();
  };
  const [uploadMutation] = useMutation(AUDIO_UPLOAD, {
    refetchQueries: () => [{ query: MUSIC_GET }],
  });
  const handleSubmit = async (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    spaped(e);
    if (!UploadLoading) {
      setUploadLoading(true);
      try {
        const paths = await FileTransmissionAndResponse(files.current);
        const { caption, volume, type } = argsProcess(files);
        await uploadMutation({
          variables: {
            address: paths,
            caption,
            volume,
            directory_id: AssignDirSeries,
            type,
            // thumbnail: Thumbnails,
          },
        });
        const refetchDirThings = removeDuplicatesArray(AssignDirSeries);
        for (let i = 0; i < refetchDirThings.length; i++) {
          DC.setLocation(refetchDirThings[i]);
          await DC.DirData_refetch();
        }
        if (refetch) {
          refetch();
        }
        setAddAudioScn(false);
      } catch (e) {
        console.log(e);
      } finally {
        setUploadLoading(false);
      }
    }
  };
  const Selected = FileName.length !== 0;
  // const thumbnailPathInsert = (e: any, address: string) => {
  //   spaped(e);
  //   document.getElementById("CUedit")?.focus();
  //   const { num } = ImSelected;
  //   setThumbnails((p: string[]) => {
  //     p.splice(num, 1, address);
  //     return p;
  //   });
  //   setThumbnailPath(address);
  //   setAddThumbnail(false);
  // };
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ImSelected, ReadFiles]);
  useEffect(() => {
    PfM.setMode(["Archive"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UploadAudioPre
      zIndex={zIndex}
      setAddAudioScn={setAddAudioScn}
      FileName={FileName}
      SelectedFileNamesProcessing={SelectedFileNamesProcessing}
      handleSubmit={handleSubmit}
      ImSelected={ImSelected}
      fileDetailShow={fileDetailShow}
      ReadFiles={ReadFiles}
      Selected={Selected}
      DirApOpen={DirApOpen}
      setDirApOpen={setDirApOpen}
      EachDirSet={EachDirSet}
      files={files}
      AddThumbnail={AddThumbnail}
      setAddThumbnail={setAddThumbnail}
      // thumbnailPathInsert={thumbnailPathInsert}
      // ThumbnailPath={ThumbnailPath}
    />
  );
};
