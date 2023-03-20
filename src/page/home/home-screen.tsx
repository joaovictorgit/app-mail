import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import AlertView from "../../components/alert/alert";
import EmailView from "../../components/email/email";
import InfoView from "../../components/info/info";
import api from "../../service/service";
import { style } from "./home-style";

const HomeScreen = () => {
  const [messageColor, setMessageColor] = useState("");
  const [icon, setIcon] = useState("");
  const [selectEmail, setSelectEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [listEmails, setListEmails] = useState<string[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const createAlertSendEmails = () => {
    Alert.alert(
      "Alerta!",
      "Você deseja enviar esta menssagem para os emails listados ?",
      [
        {
          text: "Não",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => sendEmails(),
        },
      ]
    );
  };

  const addMessage = async () => {
    try {
      await api
        .post("/message", {
          title: title,
          message: message,
        })
        .then((response: any) => {
          console.log(response.data.result);
          setIcon("ios-checkmark-circle");
          setMessageColor("Menssagem adicionada com sucesso!");
        });
    } catch (error: unknown) {
      console.log(error);
      setMessageColor("Erro!");
      setIcon("ios-alert-circle");
    }
  };

  const addEmail = async () => {
    //setListEmails([...listEmails, email]);
    try {
      await api
        .post("/email", {
          email: email,
        })
        .then((response: any) => {
          console.log(response.data);
          setListEmails([...listEmails, email]);
          setIcon("ios-checkmark-circle");
          setMessageColor("Email adicionado com sucesso!");
        });
    } catch (error: unknown) {
      console.log(error);
      setMessageColor("Erro!");
      setIcon("ios-alert-circle");
    }
  };

  const sendEmails = async () => {
    try {
      await api.post("/send").then((response: any) => {
        console.log(response.data);
        setMessageColor("Emails enviados com sucesso!");
      });
    } catch (error: unknown) {
      console.log(error);
      setMessageColor("Erro!");
      setIcon("ios-alert-circle");
    }
  };

  return (
    <View style={style.globalView}>
      <AlertView icon={icon} messageColor={messageColor} />

      <InfoView
        listEmails={listEmails}
        setModalVisible={setModalVisible}
        setSelectEmail={setSelectEmail}
        createAlertSendEmails={createAlertSendEmails}
        isModalVisible={isModalVisible}
        selectEmail={selectEmail}
        toggleModal={toggleModal}
        title={title}
        setTitle={setTitle}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
        addEmail={addEmail}
        addMessage={addMessage}
      />
      <EmailView listEmails={listEmails} />
    </View>
  );
};

export default HomeScreen;
