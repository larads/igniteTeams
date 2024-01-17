import { Highlight } from '@components/Highlight';
import * as S from './styles';
import { Header } from '@components/Header';

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight
         title='Turmas' 
         subTitle='Jogue com a turma'
      />
    </S.Container>
  );
}