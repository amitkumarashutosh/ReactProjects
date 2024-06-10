import React, { useState } from "react";
import { explorer } from "./data";
import Folder from "./Folder";

const Fileexplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
};

export default Fileexplorer;
