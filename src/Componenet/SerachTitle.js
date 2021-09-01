import React, { useState } from "react";
function SerachTitle({ setSearch }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Movie"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SerachTitle;
