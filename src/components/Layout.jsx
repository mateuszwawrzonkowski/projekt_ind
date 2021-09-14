import { useEffect } from "react";

import { Splitter, SplitterPanel } from "primereact/splitter";
import Menu from "components/Menu/Menu";
import UpperMenu from "components/Menu/UpperMenu";
import Content from "components/TabsAndContent";
import { addPath, addTab } from "store";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    addPath(location.pathname);
    addTab(location.pathname);
  }, [location.pathname]);

  return (
    <Splitter style={{ height: "100vh" }}>
      <SplitterPanel size={80}>
        <Splitter layout="vertical">
          <SplitterPanel className="p-d-flex p-ai-center  w-100" size={1}>
            <UpperMenu />
          </SplitterPanel>
          <SplitterPanel size={85}>
            <Splitter>
              <SplitterPanel
                className="p-d-flex p-ai-start p-jc-center"
                size={10}
              >
                <Menu />
              </SplitterPanel>
              <SplitterPanel className="p-d-flex  p-jc-center" size={90}>
                <Content />
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  );
}
