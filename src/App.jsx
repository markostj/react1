import React from "react";
import { Person, Name } from "./functional-components";
import { KlasnaKomponenta } from "./class-components";
import { Counter } from "./Counter";
import { ToDo } from "./ToDo";

export const App = () => (
  <>
    {/* <Person firstName={0 + 2} lastName="Perić" />
    <br />
    <Name ime="Časlav" />
    <br />
    <Person firstName="Ivan" lastName="Ivić" /> */}

    {/* <KlasnaKomponenta ime="Filip" prezime="Filipović" godiste={100} /> */}

    {/* <Counter /> */}

    <ToDo />
  </>
);
