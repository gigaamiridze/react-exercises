import React from 'react';
import sortBy from 'sort-by';

const DATA = {
  title: "Menu",
  items: [
    { id: 1, name: "tacos", type: "mexican" },
    { id: 2, name: "burrito", type: "mexican" },
    { id: 3, name: "tostada", type: "mexican" },
    { id: 4, name: "mushy peas", type: "english" },
    { id: 5, name: "fish and chips", type: "english" },
    { id: 6, name: "black pudding", type: "english" }
  ]
};

function Menu() {
  const items = DATA.items
    .filter(item => item.type === 'mexican')
    .sort(sortBy('name'))
    .map(item => <li key={item.id}>{item.name}</li>)

  return (
    <>
      <h3>{DATA.title}</h3>
      <ul>{items}</ul>
    </>
  );
}

export default Menu;
