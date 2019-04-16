import React from "react";

// Most simple component
export function FunctionalComponent() {
  return "a";
}

// Arrow functional component that returns a value
export const ArrowFunctionalComponent = () => "a";

// Arrow functional component that does something, then retuns a value
export const FunctionalComponent2 = () => {
  const a = 5;
  const b = 10;
  return a + b;
};

// Component with PROPS and shorthand fragment
// Fragment is used because we have 2 props without a parent
// Each react element needs to have a parentƒ
export const PersonWithShortFragment = ({ firstName, lastName }) => (
  <>
    {/* inline comment */}
    <span>{firstName}</span> <span>{lastName}</span>
  </>
);

// Component with PROPS and long fragment
export const Person = ({ firstName, lastName }) => (
  <React.Fragment>
    <span>{firstName}</span>
    <span>{lastName}</span>
  </React.Fragment>
);

// Component that returns a single element without a fragment
export const Name = ({ ime }) => <span>{ime}</span>;
