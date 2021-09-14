import { gql } from "@apollo/client";
import { makeVar } from "@apollo/client";

const tabsVar = makeVar([]);
const pathsVar = makeVar([]);

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

export { tabsVar, GET_TABS, GET_PATHS, addPath, addTab, closeTab };
