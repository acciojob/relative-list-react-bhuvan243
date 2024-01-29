import React from "react";

const relativesList = ["Aaya", "Thatha", "Mama", "Aththai"];

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol id="relativeList">
        {relativesList.map((relative, index) => (
          <li id={`relativeListItem${index+1}`}>{relative}</li>
        ))}
      </ol>

    </div>);
};

export default App;
