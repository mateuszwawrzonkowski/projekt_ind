import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
        gender
        type
      }
    }
  }
`;

const REGISTER_USER = gql`
  mutation registerUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $gender: String!
    $type: Int!
  ) {
    registerUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      gender: $gender
      type: $type
    ) {
      id
      firstName
    }
  }
`;

export { LOGIN_USER, REGISTER_USER };
