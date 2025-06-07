
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button, CheckBox } from 'react-native';

const treinoData = {
  Push: [
    "Supino Reto com barra",
    "Supino Inclinado com halteres",
    "Desenvolvimento com halteres",
    "Elevação lateral",
    "Tríceps testa com barra EZ",
    "Tríceps corda no cross"
  ],
  Pull: [
    "Barra fixa",
    "Remada unilateral com halter",
    "Remada baixa com triangulo",
    "Face pull",
    "Rosca direta barra EZ",
    "Rosca martelo com corda"
  ],
  Legs: [
    "Agachamento livre",
    "Leg Press",
    "Cadeira extensora",
    "Mesa flexora",
    "Elevação de quadril com barra",
    "Prancha isométrica"
  ]
};

export default function App() {
  const [dia, setDia] = useState("Push");
  const [execucao, setExecucao] = useState({});
  const [cargas, setCargas] = useState({});

  const toggleExecucao = (exercicio) => {
    setExecucao({ ...execucao, [exercicio]: !execucao[exercicio] });
  };

  const atualizarCarga = (exercicio, valor) => {
    setCargas({ ...cargas, [exercicio]: valor });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Weekly Gym</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        {Object.keys(treinoData).map((key) => (
          <Button key={key} title={key} onPress={() => setDia(key)} />
        ))}
      </View>

      {treinoData[dia].map((exercicio) => (
        <View key={exercicio} style={{ marginBottom: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>{exercicio}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox value={execucao[exercicio]} onValueChange={() => toggleExecucao(exercicio)} />
            <TextInput
              style={{ borderBottomWidth: 1, marginLeft: 10, flex: 1 }}
              placeholder="Carga (kg)"
              keyboardType="numeric"
              value={cargas[exercicio] || ''}
              onChangeText={(text) => atualizarCarga(exercicio, text)}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
