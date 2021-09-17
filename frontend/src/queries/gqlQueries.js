import { gql } from "@apollo/client";

const GET_USER = gql`
  query getUser($id: Int!) {
    getUser(id: $id) {
      firstName
      lastName
      email
      gender
      type
    }
  }
`;

const GET_ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      firstName
      lastName
      email
      gender
    }
  }
`;

export { GET_USER, GET_ALL_USERS };
