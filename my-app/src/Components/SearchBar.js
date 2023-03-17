import React from 'react';

function SearchBar({ str }) {
  const reversedStr = str.split('').reverse().join('');
  return (
    <div>
      <p>Input: {str}</p>
      <p>Output: {reversedStr}</p>
    </div>
  );
}

export default SearchBar;