import React, {
  useState,
  ChangeEvent,
  useRef,
  MouseEvent,
  useEffect,
} from "react";
import UploadImagePre from "./UploadImagePre";
import { useMutation } from "@apollo/client";
import { useDummyState } from "../../../../GlobalLib/Context/Lib/DummyState";
import { BatchInfoMidPros, argsProcess } from "./UploadImageLib";
import { useDirMode } from "../../../../GlobalLib/Context/ProfileContext/DirMode";
import { spaped } from "../../../../GlobalLib/RecycleFunction/etc/StopAndPrevent";
import { removeDuplicatesArray } from "../../../../GlobalLib/RecycleFunction/etc/ArrayProcessing";
import FileTransmissionAndResponse from "../../../../GlobalLib/RecycleFunction/etc/FileTransmissionAndResponse";
import { DefaultNumPros } from "../MediaUploadLib";
import { useProfileMode } from "../../../../GlobalLib/Context/ProfileContext/ProfileMode";
import { IMG_GET } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageR";
import { IMG_UPLOAD } from "../../../../GlobalLib/Apollo/GraphQL_Client/Media/Image/ImageCUD";

type UploadImageConProps = {
  setAddImgScn: any;
  zIndex?: number;
  refetch?: any;
};
export default ({
  setAddImgScn,
  zIndex = 20,
  refetch,
}: UploadImageConProps) => {
  const DS = useDummyState();
  const DC = useDirMode();
  const PfM = useProfileMode();
  const [FileName, setFileName] = useState<any>([]);
  const [ImSelected, setImSelected] = useState<any>(null);
  const [AssignDirSeries, setAssignDirSeries] = useState<number[]>([]);
  const files = useRef<FileList | null>(null);
  const readFiles = useRef<any>(null);
  const [DirApOpen, setDirApOpen] = useState(false);
  const [UploadLoading, setUploadLoading] = useState(false);

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
    setFileName(BatchInfoMidPros(files));
    setAssignDirSeries(DefaultNumPros(files.current, DC));
  };
  const fileDetailShow = (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    fewthOrder: number
  ) => {
    spaped(e);
    DC.setLocation(AssignDirSeries[fewthOrder]);
    if (files.current) {
      let FInfo = files.current[fewthOrder];
      readFiles.current = {
        src: URL.createObjectURL(FInfo),
      };
      setImSelected({ FInfo, num: fewthOrder });
    }
  };
  const [uploadMutation] = useMutation(IMG_UPLOAD, {
    refetchQueries: () => [{ query: IMG_GET }],
  });
  const handleSubmit = async (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    spaped(e);
    if (!UploadLoading) {
      setUploadLoading(true);
      try {
        const fileNames = await FileTransmissionAndResponse(files.current);
        const { caption, volume, type } = argsProcess(files);
        await uploadMutation({
          variables: {
            address: fileNames,
            caption: caption,
            volume: volume,
            directory_id: AssignDirSeries,
            type: type,
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
        setAddImgScn(false);
      } catch (e) {
        console.log(e);
      } finally {
        setUploadLoading(false);
      }
    }
  };
  const Selected = FileName.length !== 0;
  useEffect(() => {
    DS.setDummyState((p: number) => p + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ImSelected, readFiles.current, DC]);
  useEffect(() => {
    PfM.setMode(["Archive"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UploadImagePre
      zIndex={zIndex}
      setAddImgScn={setAddImgScn}
      FileName={FileName}
      SelectedFileNamesProcessing={SelectedFileNamesProcessing}
      handleSubmit={handleSubmit}
      ImSelected={ImSelected}
      fileDetailShow={fileDetailShow}
      readFiles={readFiles}
      Selected={Selected}
      DirApOpen={DirApOpen}
      setDirApOpen={setDirApOpen}
      EachDirSet={EachDirSet}
      files={files}
    />
  );
};
