import styled from 'styled-components';

const Container = styled.div`
  display:flex; 
  justify-content: space-between; 
  align-items: center;

  margin: 3.5rem 0; 
  padding-bottom: 1rem; 
  border-bottom: 1px solid #d7d8da; 

  font-weight: 500;
  span:first-child {
    font-size: 1.25rem;
      }
  span:last-child {
    font-size: 1.5rem;
      }
`;

export default Container