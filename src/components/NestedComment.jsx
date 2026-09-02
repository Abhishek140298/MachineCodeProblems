import React from "react";

let data = [
  {
    id: 1,
    text: "Great post!",
    authorId: "u1",
    children: [
      {
        id: 2,
        text: "Agreed!",
        authorId: "u2",
        children: [
          { id: 4, text: "Why though?", authorId: "u4", children: [] },
        ],
      },
      { id: 3, text: "Same here", authorId: "u3", children: [] },
    ],
  },
  { id: 5, text: "Disagree", authorId: "u5", children: [] },
];

const CommentTree = ({ comment }) => {
  console.log("com", comment);
  return comment.map((com, index) => {
    console.log(com);
    if (!com?.children.length) {
      return <span style={{marginLeft:'30px'}}>{com.text}</span>;
    } else {
      return (
        <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
          <span style={{marginLeft:'30px'}}>{com.text}</span>
          <CommentTree comment={com.children} />
        </div>
      );
    }
  });
};

const NestedComment = () => {
  return (
    <div style={{ display: "flex" ,flexDirection:'column'}}>
      Post1
      <div style={{ display: "flex",flexDirection:'column' }}>
        {" "}
        <CommentTree comment={data} />
      </div>
    </div>
  );
};

export default NestedComment;
