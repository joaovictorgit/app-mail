import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import EmailModal from "../../components/modal-email/email-modal";
import MessageModal from "../../components/modal-message/message-modal";
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
      <View style={style.alert}>
        {icon !== null ? (
          <Icon
            name={icon}
            size={30}
            color={icon === "ios-alert-circle" ? "#c7d31d" : "#4fdf16"}
          />
        ) : null}
        <Text style={style.alertText}>{messageColor}</Text>
      </View>

      <View style={style.viewInfo}>
        <Text style={style.title}>Total de Emails: {listEmails.length}</Text>
        <View style={style.viewButtons}>
          <Pressable
            onPress={() => {
              setModalVisible(true);
              setSelectEmail("email");
            }}
            style={style.touchButton}
          >
            <Text style={style.textButtons}>Adicionar Email</Text>
          </Pressable>
          <Pressable
            style={style.touchButton}
            onPress={() => {
              setModalVisible(true);
              setSelectEmail("message");
            }}
          >
            <Text style={style.textButtons}>Adicionar Mensagem</Text>
          </Pressable>
          <Pressable style={style.touchButton} onPress={() => sendEmails()}>
            <Text style={style.textButtons}>Enviar Email</Text>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              setModalVisible(!isModalVisible);
            }}
          >
            {selectEmail === "email" ? (
              <EmailModal
                toggleModal={toggleModal}
                email={email}
                setEmail={setEmail}
                addEmail={addEmail}
              />
            ) : (
              <MessageModal
                toggleModal={toggleModal}
                title={title}
                setTitle={setTitle}
                message={message}
                setMessage={setMessage}
                addMessage={addMessage}
              />
            )}
          </Modal>
        </View>
      </View>
      <View style={style.viewEmail}>
        <Text style={style.titleList}>Lista de Email</Text>
        <SafeAreaView style={style.safeArea}>
          <ScrollView style={style.scrollView}>
            {listEmails
              ? listEmails.map((emailList: any, index: number) => (
                  <View style={style.listEmail} key={index}>
                    <Icon name="ios-mail" color="#00000060" size={20} />
                    <Text style={style.textList}>{emailList}</Text>
                  </View>
                ))
              : null}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HomeScreen;
