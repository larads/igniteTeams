import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';

export function Players() {
    return(
        <S.Container>
            <Header showsBackButton />
            
            <Highlight 
                title='Nome da Turma'
                subTitle='Adicione a galera e separe os Times'
            />

        </S.Container>
    )
}