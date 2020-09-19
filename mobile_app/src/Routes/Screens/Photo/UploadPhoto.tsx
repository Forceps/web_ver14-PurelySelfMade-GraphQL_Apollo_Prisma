import React, { useState } from "react";
import { Image, ActivityIndicator, Alert, Platform } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { FEED_QUERY } from "../Tabs/Home";
import { useNavigation, useRoute } from "@react-navigation/native";
import { gql, useMutation } from "@apollo/client";
import useInput from "../../../GlobalLib/RecycleFunction/Hooks/useInput";
import constants from "../../../GlobalLib/RecycleFunction/etc/constants";
import Theme from "../../../GlobalLib/Styles/GlobalStyle/Theme";
import { http_BackEnd } from "../../../GlobalLib/Apollo/apolloSetting/BackendWay";

const UPLOAD = gql`
  mutation upload($caption: String!, $files: [String!]!, $location: String) {
    upload(caption: $caption, files: $files, location: $location) {
      id
      caption
      location
    }
  }
`;
const View = styled.View`
  flex: 1;
`;
const Container = styled.View`
  padding: 20px;
  flex-direction: row;
`;
const Form = styled.View`
  justify-content: flex-start;
`;
const STextInput = styled.TextInput`
  margin-bottom: 10px;
  border: 0px solid ${Theme.lightGreyColor};
  border-bottom-width: 1px;
  padding-bottom: 10px;
  width: ${constants.width - 180};
`;
const Button = styled.TouchableOpacity`
  background-color: ${Theme.blueColor};
  padding: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  font-weight: 600;
`;

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setIsLoading] = useState(false);
  const photo = route.params?.photo ?? "photo";
  const captionInput = useInput("dfdf");
  const locationInput = useInput("dfdfd");
  const [uploadMutation] = useMutation(UPLOAD, {
    refetchQueries: () => [{ query: FEED_QUERY }],
  });
  let photoFileType = "";
  if (Platform.OS === "ios") {
    photoFileType = "jpg";
  } else {
    photoFileType = "image/jpeg";
  }
  const handleSubmit = async () => {
    if (captionInput.value === "" || locationInput.value === "") {
      Alert.alert("All fields are required");
    }
    //사진이나 동영상과 같은 대규모 파일을 업로드 할 때는 GraphQL을 사용하는 것보다 REST를 사용하는 것이 더 낫다. 여기서 사용한 end point는 "/api/upload"로 설정했다.
    const formData = new FormData();
    const name = photo.filename;
    formData.append(
      "file",
      JSON.stringify({
        type: photoFileType,
        uri: photo.uri,
      }),
      name
    );
    try {
      setIsLoading(true);
      const {
        data: { path },
      } = await axios.post(http_BackEnd.toString() + "/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const {
        data: { upload },
      } = await uploadMutation({
        variables: {
          files: [path],
          caption: captionInput.value,
          location: locationInput.value,
        },
      });
      if (upload.id) {
        navigation.navigate("TabNavigation");
      }
    } catch (e) {
      Alert.alert("Can't upload", "Try later");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View>
      <Container>
        <Image
          source={{ uri: photo.uri }}
          style={{ height: 80, width: 80, marginRight: 30 }}
        />
        <Form>
          <STextInput
            onChangeText={captionInput.onChange}
            value={captionInput.value}
            placeholder="Caption"
            multiline={true}
            placeholderTextColor={Theme.darkGreyColor}
          />
          <STextInput
            onChangeText={locationInput.onChange}
            value={locationInput.value}
            placeholder="Location"
            multiline={true}
            placeholderTextColor={Theme.darkGreyColor}
          />
          <Button onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text>Upload </Text>
            )}
          </Button>
        </Form>
      </Container>
    </View>
  );
};
