import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../style/Style";

// Import Componentes
import TxtComponent from "../components/TxtComponent";

// Import Hook useNavigation
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TxtComponent title="Home" />

      <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
        <Text>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CalculandoTemperatura")}
      >
        <Text>Calcular Temperatura</Text>
      </TouchableOpacity>
    </View>
  );
}
