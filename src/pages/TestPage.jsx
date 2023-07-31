import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import { styled } from 'styled-components';

function TestPage() {
  return (
    <Layout>
      <Header />
      <TestButton>login test</TestButton>
    </Layout>
  );
}
const TestButton = styled.button`
  padding: 20px 40px;
  color: whitesmoke;
`;

export default TestPage;
