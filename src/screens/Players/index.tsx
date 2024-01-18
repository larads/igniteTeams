import * as S from './styles';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';

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

            <Filter
                title='Time A'
                isActive
            />

        </S.Container>
    )
}