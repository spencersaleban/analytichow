import gql from 'graphql-tag';

export default gql`
  query {
    apps  {
      name
      id
    }
  }
`;


