import React, { useState, useEffect, useRef } from "react";
import * as Permissions from "expo-permissions";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Platform, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../../Components/ElementEtc/Effect/Loading";
import constants from "../../../GlobalLib/RecycleFunction/etc/constants";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.View``;
const Button = styled.View`
  width: 80;
  height: 80;
  border-radius: 40px;
  border: 10px solid ${Theme.lightGreyColor};
`;

export default () => {
  const navigation = useNavigation();
  const cameraRef = useRef<Camera>(null);
  const [canTakePhoto, setCanTakePhoto] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const takePhoto = async () => {
    if (!canTakePhoto) {
      return;
    }
    try {
      setCanTakePhoto(false);
      if (cameraRef.current) {
        const { uri } = await cameraRef.current.takePictureAsync({
          quality: 1,
        });
        const asset = await MediaLibrary.createAssetAsync(uri);
        setCanTakePhoto(true);
        navigation.navigate("UploadPhoto", { photo: asset });
      }
    } catch (e) {
      console.log(e);
      setCanTakePhoto(true);
    }
  };
  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === "granted") {
        setHasPermission(true);
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    } finally {
      setLoading(false);
    }
  };
  const toggleType = () => {
    if (cameraType === Camera.Constants.Type.front) {
      setCameraType(Camera.Constants.Type.back);
    } else {
      setCameraType(Camera.Constants.Type.front);
    }
  };
  useEffect(() => {
    askPermission();
  }, []);
  return (
    <View>
      {loading ? (
        <Loading />
      ) : hasPermission ? (
        <>
          <Camera
            ref={cameraRef}
            type={cameraType}
            style={{
              justifyContent: "flex-end",
              padding: 15,
              width: constants.width,
              height: constants.height / 2,
            }}
          >
            <TouchableOpacity onPress={toggleType}>
              <Icon>
                <Ionicons
                  name={
                    Platform.OS === "ios"
                      ? "ios-reverse-camera"
                      : "md-reverse-camera"
                  }
                  size={32}
                  color={"white"}
                />
              </Icon>
            </TouchableOpacity>
          </Camera>
          <View>
            <TouchableOpacity onPress={takePhoto} disabled={!canTakePhoto}>
              <Button />
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};
