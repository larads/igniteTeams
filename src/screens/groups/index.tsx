import { useState } from 'react';
import { Highlight } from '@components/Highlight';
import * as S from './styles';
import { Header } from '@components/Header';
import { GroundCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [ groups, setGroups ] = useState<string[]>([]);

  return (
    <S.Container>
      <Header />

      <Highlight
         title='Turmas' 
         subTitle='Jogue com a turma'
      />

      <FlatList 
          data={groups} 
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroundCard 
              title={item}
            />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() =>(
              <ListEmpty
                 message="Que tal cadastrar a primeira turma?"
              />
            )}
      />

    </S.Container>
  );
}