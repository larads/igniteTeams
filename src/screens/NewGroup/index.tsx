import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

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

                <Input 
                    placeholder='Nome da Turma'
                    
                />

                <Button 
                    title='Criar'
                    style={{ marginTop: 20}}
                />
            </S.Content>
        </S.Container>
    )
}