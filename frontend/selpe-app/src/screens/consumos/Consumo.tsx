import { View, Text, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import { styles } from './style';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import { useState } from 'react';
import { api } from '../../services/Api';

export default function Consumo() {
  const navigation = useNavigation<StackType>();

  const [date, setDate] = useState(Date());

  const handleSaveConsumoEletro = async () => {
    try {
      const data = { date };
      const response = await api.post('api/consumos/', data);
      // navigation.navigate('ConsumosEletro');
    } catch (error) {
      alert(error);
    }
  };

  function goToConsumosEletro() {
    // navigation.navigate('ConsumosEletro');
  }

  return (
    <View>
      <View>
        <Text style={styles.text}>Consumo</Text>
      </View>

      <Button label={'+'} createfunction={goToConsumosEletro}></Button>

      <View style={styles.btn}>
        <Button label="Registrar consumo" createfunction={handleSaveConsumoEletro}></Button>
      </View>
    </View>
  );
}
