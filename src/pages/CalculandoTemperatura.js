import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../style/Style";

// Import Hook useState
import React, { useState } from "react";

// Import Componentes
import TextoInputComponent from "../components/TextoInputComponent";
import { TextInput } from "react-native-web";

export default function CalculandoTemperatura() {
  const [temperatura, setTemperatura] = useState("");
  const [visible, setVisible] = useState(false);

  const calc_tmp = () => {
    const Calctmp = temperatura * 1.8 + 32;
    setTemperatura(Calctmp)
    setVisible(true);
  };

  const calcularNovamente = () => {
    setTemperatura("");
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Calcular IMC</Text>

      <TextoInputComponent
        txtplace="Digite a temperatura em c"
        value={temperatura}
        changeText={setTemperatura}
      />
      <TouchableOpacity onPress={calc_tmp}>
        <Text>Calcular Temperatura</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <View style={styles.modal}>
        
          <TouchableOpacity onPress={calcularNovamente}>
            <Text>Fechar</Text>
          </TouchableOpacity>
          <Text>{temperatura}</Text>
        </View>
      </Modal>
    </View>
  );
}
