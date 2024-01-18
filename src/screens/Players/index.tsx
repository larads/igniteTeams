import { ButtonIcon } from '@components/ButtonIcon';
import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

export function Players() {
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

        </S.Container>
    )
}