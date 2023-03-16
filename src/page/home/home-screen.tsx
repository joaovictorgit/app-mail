import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import EmailModal from "../../components/modal-email/email-modal";
import api from "../../service/service";
import { style } from "./home-style";

const HomeScreen = () => {
  const [totalEmails, setTotalEmails] = useState(0);
  const [email, setEmail] = useState("");
  const [listEmails, setListEmails] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getEmails = async () => {
    try {
      /*await api.get("/email").then((response: any) => {
        setListEmails(response.data);
      });*/
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const addEmail = () => {
    setTotalEmails(totalEmails + 1);
    setEmail("teste@gmail.com");
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <View style={style.globalView}>
      <Icon
        name="ios-alert-circle"
        size={30}
        color="#fff"
        style={style.alert}
      />
      <View style={style.viewInfo}>
        <Text style={style.title}>Total de Emails: {totalEmails}</Text>
        <View style={style.viewButtons}>
          <TouchableOpacity onPress={addEmail} style={style.touchButton}>
            <Text style={style.textButtons}>Adicionar Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.touchButton}>
            <Text style={style.textButtons}>Adicionar Mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.touchButton}>
            <Text style={style.textButtons}>Enviar Email</Text>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
              setModalVisible(!isModalVisible);
            }}
          ></Modal>
        </View>
      </View>
      <View style={style.viewEmail}>
        <Text style={style.titleList}>Lista de Email</Text>
        <SafeAreaView style={style.safeArea}>
          <ScrollView style={style.scrollView}>
            {listEmails
              ? listEmails.map((email: any, index: number) => (
                  <View style={style.listEmail} key={index}>
                    <Icon name="ios-mail" color="#00000060" size={20} />
                    <Text>{email}</Text>
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
