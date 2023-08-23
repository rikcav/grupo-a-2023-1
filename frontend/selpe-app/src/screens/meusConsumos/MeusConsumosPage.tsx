import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import { api } from '../../services/Api';

export default function MeusConsumosPage() {
  const navigation = useNavigation<StackType>();

  const handleGetConsumos = async () => {
    const response = await api.get('api/consumos/');
    return response;
  };

  return <View>handleGetConsumos()</View>;
}
