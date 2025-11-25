import React from "react";

const folderStructure = `[
    {
      "id": 1,
      "name": "README.md"
    },
    {
      "id": 2,
      "name": "Documents",
      "children": [
        {
          "id": 3,
          "name": "Word.doc"
        },
        {
          "id": 4,
          "name": "Powerpoint.ppt"
        }
      ]
    },
    {
      "id": 5,
      "name": "Downloads",
      "children": [
        {
          "id": 6,
          "name": "unnamed.txt"
        },
        {
          "id": 7,
          "name": "Misc",
          "children": [
            {
              "id": 8,
              "name": "foo.txt"
            },
            {
              "id": 9,
              "name": "bar.txt"
            }
          ]
        }
      ]
    }
  ]`;

const folderMapping = (file) => (
  <>
    {file?.map((fi, index) => {
      if (!fi.children) {
        return <h6>{fi.name}</h6>;
      } else {
        return (
          <h3 key={fi.id} >
            {fi.name}
            {folderMapping(fi.children)}
          </h3>
        );
      }
    })}
  </>
);

const FileExplorer = () => {
  const fileFolderData = JSON.parse(folderStructure);
  console.log("File", fileFolderData);
  return (
    <div style={{ display: "flex", margin: "30px" }}>
      <h2>Folder Structure</h2>

      <div> {folderMapping(fileFolderData)}</div>
    </div>
  );
};

export default FileExplorer;
