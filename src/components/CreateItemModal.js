import { useState } from 'react';
import styled from 'styled-components';
import { CreateItem } from './CreateItem';

export const CreateItemModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtnContainer>
          <ModalBtn onClick={ModalHandler}>
            {isOpen ? <>&times;</> : <>+</>}
          </ModalBtn>
        </ModalBtnContainer>
        {isOpen ? (
          <ModalBackdrop onClick={ModalHandler}>
            <ModalView onClick={(event) => event.stopPropagation()}>
              <CloseBtnContainer>
                <CloseBtn onClick={ModalHandler}>&times;</CloseBtn>
              </CloseBtnContainer>
              <CreateItem />
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30rem;
  margin-top: 3rem;
`;

export const ModalBtn = styled.button`
  cursor: grab; // π
  width: 3rem;
  height: 3rem;
  font-size: 2rem;

  border: none;
  color: white;
  background-color: #3bba8d;
  border-radius: 0.55rem;
`;

export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4); // π aλ ν¬λͺλ
  position: fixed; // π μ μ²΄λ₯Ό μ±μ°κ³  μΆμ λ! λ³΄μ΄λ νλ©΄ μμμ κ³ μ  (μμΉλ top~~μΌλ‘ μ€μ  ) cf) absoluteλ μ λμ  μμΉ κ³ μ 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: top;
`;

export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const CloseBtn = styled.button`
  cursor: grab; // π
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;

  border: none;
  color: white;
  background-color: #3bba8d;
  border-radius: 0.5rem;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs λ©μλλ₯Ό μ΄μ©ν΄μ μλμ κ°μ΄ div μλ¦¬λ¨ΌνΈμ μμ±μ μΆκ°ν  μ μμ΅λλ€.
  role: 'dialog',
}))`
  background-color: white;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  margin-top: 12rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  > p.modalText {
    font-size: 25px;
    color: #5c5c5c;
    margin: 20px;
  }
`;
