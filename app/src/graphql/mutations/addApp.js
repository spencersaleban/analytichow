import gql from 'graphql-tag';

export default gql`
  mutation AddApp($name: String!, $type: String!){
    addApp(name: $name, type: $type){
      name
      id
    }
  }
`;
