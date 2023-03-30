import React from 'react';

const props = {
  name: String,
};
function Greet() {
  return <div>Hello {props.name}</div>;
}
export default Greet;
