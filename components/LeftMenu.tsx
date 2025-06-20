import React from "react";
type Props = {};

function LeftMenu({ }: Props) {
  const items = [
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Skills",
      link: "#skills",
    },
    {
      label: "Experience",
      link: "#experience",
    },
    {
      label: "Projects",
      link: "#projects",
    },
  ];
  return (
    <div className="left-navigation">
      {items.map((item) => {
        return (
          <a href={item.link} className="left-navigation__item" key={item.label}>
              <div className="bar"></div>
              <span className="link-item label-2">
                {item.label}
              </span>
            </a>
        );
      })}
    </div>
  );
}

export default LeftMenu;