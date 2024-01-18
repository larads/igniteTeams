import { useState } from 'react';
import { Highlight } from '@components/Highlight';
import * as S from './styles';
import { Header } from '@components/Header';
import { GroundCard } from '@components/GroupCard';
import { FlatList } from 'react-native';

export function Groups() {
  const [ groups, setGroups ] = useState(['ghg', 'amigos']);

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
          renderItem={({ item }) => 
            <GroundCard 
              title={item}
            />}
      />

    </S.Container>
  );
}