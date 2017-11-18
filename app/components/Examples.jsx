import React from 'react';
import { Link } from 'react-router';

const Examples = (props) => (
  <div>
    <h1 className="text-center">Examples!</h1>
    <p>Welcome to examples page!</p>
    <ol>
      <li>
        <Link to='/?location=Minsk'>Minsk, BRL</Link>
      </li>
      <li>
        <Link to='/?location=New%20York'>New York, USA</Link>
      </li>
    </ol>
  </div>
)

export default Examples;