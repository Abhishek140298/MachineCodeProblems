import React from "react";

//Navigation with nested Items

const navItems = [
  { name: "Home" },
  {
    name: "Subscription",
    subNav: [{ name: "Monthly" }, { name: "Yealy" }, { name: "lifetime" }],
  },
  { name: "Mysubcriptions" },
  { name: "payment", subNav: [{ name: "online" }, { name: "offline" }] },
];

function NavTab({ items,isSub }) {
  const [openCurrent, setOpenCurrent] = React.useState(null);
  const handleOpenMenu = (index) => {
    setOpenCurrent(prev=>prev!==index?index:null);
  };
  return (
    <div style={{display:isSub?'block':'flex',paddingLeft: isSub ? "-20px" : "0",marginTop:isSub?'20px':'0px', flexDirection: isSub ? "column" : "row",
      gap: "20px",}}>
      {items?.map((item, index) => {
        if (item.subNav) {
          return (
            <>
              <div onClick={() => handleOpenMenu(index)}>
                {item.name}
                {openCurrent == index ? "▲" : "▼"}
              </div>

              {openCurrent == index ? <NavTab items={item?.subNav} isSub={true} /> : null}
            </>
          );
        } else {
          return <div key={index}>{item.name}</div>;
        }
      })}
    </div>
  );
}

export default function NavigationBar() {
  return (
    <div >
      <NavTab items={navItems} isSub={false} />
    </div>
  );
}
