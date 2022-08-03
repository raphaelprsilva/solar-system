import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #38444d;
  border-radius: 6px;
`;

export const Paragraph = styled.p`
  text-align: center;
  padding: 0.15rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const FirstParagraph = styled(Paragraph)`
  color: #ca2a87;
  margin: 0;
  padding-bottom: 0.5rem;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #38444d;
`;
