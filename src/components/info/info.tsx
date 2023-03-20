import { Modal, Pressable, Text, View } from "react-native";
import EmailModal from "../modal-email/email-modal";
import MessageModal from "../modal-message/message-modal";
import { style } from "./info-style";

const InfoView = (props: any) => {
  const {
    listEmails,
    setModalVisible,
    setSelectEmail,
    createAlertSendEmails,
    isModalVisible,
    selectEmail,
    toggleModal,
    title,
    setTitle,
    email,
    setEmail,
    message,
    setMessage,
    addEmail,
    addMessage,
  } = props;

  return (
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
        <Pressable
          style={style.touchButton}
          onPress={() => createAlertSendEmails()}
        >
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
  );
};

export default InfoView;
