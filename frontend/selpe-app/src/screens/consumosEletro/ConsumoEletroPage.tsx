import { View, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import { styles } from './style';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import { useState } from 'react';
import { api } from '../../services/Api';

export default function ConsumoEletroPage() {
  const navigation = useNavigation<StackType>();

  const [name, setName] = useState('');
  const [kwh, setKwh] = useState(0);
  const [dinheiro, setDinheiro] = useState(0);

  const handleSaveConsumoEletro = async () => {
    try {
      const data = {
        name,
        kwh,
        dinheiro
      };

      const response = await api.post('api/consumosEletro/', data);
      alert('Consumo de eletrodoméstico salvo com sucesso!');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View>
      <View style={styles.form}>
        <Input
          createfunction={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setName(e.nativeEvent.text)
          }
          placeholder="Eletrodoméstico"
          security={false}
        ></Input>
        <Input
          createfunction={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setKwh(Number(e.nativeEvent.text))
          }
          placeholder="Kwh"
          security={false}
        ></Input>
        <Input
          createfunction={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setDinheiro(Number(e.nativeEvent.text))
          }
          placeholder="Dinheiro"
          security={true}
        ></Input>
      </View>
      <View style={styles.btn}>
        <Button label="Registrar consumo" createfunction={handleSaveConsumoEletro}></Button>
      </View>
    </View>
  );
}
