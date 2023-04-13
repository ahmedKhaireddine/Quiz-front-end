import React from "react";

import Input from "../tests/Input";

const SearchTermsInput = ({ setSearchTerms }) => {
  const handleSearchTerms = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerms(value);
  };

  return <Input placeholder="Question..." onChange={handleSearchTerms} />;
};

export default SearchTermsInput;
