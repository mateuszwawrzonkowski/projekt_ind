import { gql } from "@apollo/client";
import { makeVar } from "@apollo/client";

const tabsVar = makeVar([]);
const pathsVar = makeVar([]);
const isLoggedInVar = makeVar(!!localStorage.getItem("token"));
const cartItemsVar = makeVar([]);

const GET_USER = gql`
  query GetUser {
    user @client
  }
`;

const GET_TABS = gql`
  query GetTabs {
    tabs @client
  }
`;

const GET_PATHS = gql`
  query GetPaths {
    paths @client
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const addTab = (path) => {
  if (tabsVar().includes(path)) return;
  return tabsVar([...tabsVar(), path]);
};

const addPath = (path) => {
  if (path === "/") return;
  return pathsVar([
    path,
    ...pathsVar().filter((historyPath) => historyPath !== path),
  ]);
};

const closeTab = (path) => {
  return tabsVar([...tabsVar().filter((tab) => tab !== path)]);
};

export {
  tabsVar,
  cartItemsVar,
  isLoggedInVar,
  IS_LOGGED_IN,
  GET_USER,
  GET_TABS,
  GET_PATHS,
  addPath,
  addTab,
  closeTab,
};
