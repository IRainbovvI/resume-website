import React from 'react';
import { useState } from 'react';
import '../index.css';

export const Skill = ({ item }) => {
  const [mouseOver, setMouuseOver] = useState(false);

  const SkillPoints = ({ lvl }) => {
    if (lvl === 3) {
      return (
        <>
          <article id='skill-lvl-1'></article>
          <article id='skill-lvl-1'></article>
          <article id='skill-lvl-1'></article>
        </>
      );
    } else if (lvl === 2) {
      return (
        <>
          <article id='skill-lvl-1'></article>
          <article id='skill-lvl-1'></article>
        </>
      );
    } else {
      return <article id='skill-lvl-1'></article>;
    }
  };

  return (
    <li
      onMouseOver={() => {
        setMouuseOver(true);
      }}
      onMouseOut={() => {
        setMouuseOver(false);
      }}
    >
      {item.name}
      <div className={`skill-point-container ${mouseOver && 'dark'}`}>
        {mouseOver ? (
          <span className='skill-lvl-name'>{item.lvlName}</span>
        ) : (
          <SkillPoints lvl={item.lvl} />
        )}
      </div>
    </li>
  );
};
