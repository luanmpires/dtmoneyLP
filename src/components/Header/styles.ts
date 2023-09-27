import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 4rem 0 12rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`

export const NewTransactionButton = styled.button`
  height: 5rem;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 2rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
