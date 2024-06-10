import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div
          onClick={() => setExpand(!expand)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            padding: "6px 8px",
            backgroundColor: "grey",
            display: "flex",
            width: "250px",
            margin: "2px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>🗂️+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>📃+</button>
          </div>
        </div>
        <div
          style={{
            display: expand ? "block" : "none",
            padding: "0px",
            marginLeft: "10px",
          }}
        >
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span
        style={{
          fontSize: "20px",
          marginLeft: "10px",
          padding: "5px 5px",
          display: "block",
          width: "200px",
        }}
      >
        📄{explorer.name}
      </span>
    );
  }
};

export default Folder;
