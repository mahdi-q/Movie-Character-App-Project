import { XCircleIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import Icon from "../../ui/Icon";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  background-color: rgba(63, 69, 76, 0.8);
`;

const ModalContainer = styled.div`
  width: 90%;
  min-height: 250px;
  max-height: 350px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--slate-900);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 50px var(--slate-600);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  @media screen and (min-width: 768px) {
    max-width: 30rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--slate-600);

  h2 {
    color: var(--slate-200);
  }

  button {
    color: var(--rose-500);
  }
`;

function Modal({ title, children, open, onOpen }) {
  if (!open) return null;

  return (
    <div>
      <Backdrop onClick={() => onOpen(false)}></Backdrop>

      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={() => onOpen(false)}>
            <Icon>
              <XCircleIcon />
            </Icon>
          </button>
        </ModalHeader>

        {children}
      </ModalContainer>
    </div>
  );
}

export default Modal;
