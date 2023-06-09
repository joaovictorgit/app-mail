import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./message-modal-style";

const MessageModal = (props: any) => {
  const { toggleModal, title, setTitle, message, setMessage, addMessage } =
    props;
  const registerMessage = () => {
    addMessage();
    toggleModal();
  };
  return (
    <View style={style.containerModal}>
      <View style={style.modalView}>
        <Icon
          name="ios-close"
          size={22}
          color="#000"
          onPress={toggleModal}
          style={style.iconClose}
        />
        <Text>Titulo:</Text>
        <TextInput
          value={!title ? title : null}
          onChangeText={setTitle}
          style={style.textInput}
        />
        <Text>Menssagem:</Text>
        <TextInput
          value={!message ? message : null}
          onChangeText={setMessage}
          style={style.textMessage}
        />
        <TouchableOpacity style={style.buttonModal} onPress={registerMessage}>
          <Icon name="ios-add" size={20} color="#fff" />
          <Text style={style.textButtonModal}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageModal;
