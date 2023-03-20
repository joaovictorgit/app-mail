import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./email-style";

const EmailView = (props: any) => {
  const { listEmails } = props;

  return (
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
  );
};

export default EmailView;
