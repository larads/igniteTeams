import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

export function NewGroup(){
    return(
        <S.Container>
            <Header showsBackButton />

            <S.Content>
                <S.Icon />

                <Highlight
                    title='Nova Turma'
                    subTitle='Crie a Turma para adicionar as Peassoas'
                />

                <Button title='Criar'/>
            </S.Content>
        </S.Container>
    )
}