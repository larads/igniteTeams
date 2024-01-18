import * as S from './styles';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';
import { FlatList } from 'react-native';
import { useState } from 'react';

export function Players() {
    const [ team , setTeam ] = useState('Time A');
    const [ players, setPlayers ] = useState([]);

    return(
        <S.Container>
            <Header showsBackButton />

            <Highlight 
                title='Nome da Turma'
                subTitle='Adicione a galera e separe os Times'
            />

            <S.Form>
                <Input 
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon icon='add' />
            </S.Form>

            <S.HeaderList>
                <FlatList 
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <S.NumberOfPlayers>
                    {players.length}
                </S.NumberOfPlayers>
            </S.HeaderList>
        </S.Container>
    )
}