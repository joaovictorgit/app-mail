import { View, Text } from "react-native";

const EmailModal = (props: any) => {
  const { toogleModal } = props;
  return (
    <View>
      <Text onPress={toogleModal}>Teste</Text>
    </View>
  );
};

export default EmailModal;
