import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./email-modal-style";
import Icon from "react-native-vector-icons/Ionicons";
const EmailModal = (props: any) => {
  const { toggleModal, email, setEmail, addEmail } = props;

  const registerEmail = () => {
    addEmail();
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
        <Text>Email:</Text>
        <TextInput
          value={!email ? email : null}
          onChangeText={setEmail}
          style={style.textInput}
        />
        <TouchableOpacity style={style.buttonModal} onPress={registerEmail}>
          <Icon name="ios-add" size={20} color="#fff" />
          <Text style={style.textButtonModal}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailModal;
