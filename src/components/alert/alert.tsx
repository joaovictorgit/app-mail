import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { style } from "./alert-style";

const AlertView = (props: any) => {
  const { icon, messageColor } = props;
  return (
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
  );
};

export default AlertView;
