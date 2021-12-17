import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.125);
  color: #888;
  padding: 0.5rem 2rem;
  font-weight: 600;
`;

const ProviderButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '100%'};
  gap: 0.25rem;
  background-color: ${(props) => props.bgcolor || 'transparent'};
  color: ${(props) => props.color || '#565656'};
  padding: 0.5rem 2rem;
  font-weight: 600;
  font-size: ${(props) => props.size || '1.125rem'};
  cursor: pointer;
`;
export { Button, ProviderButton };
