import React from "react";

const relativesList = ["Aaya", "Thatha", "Mama", "Aththai"];

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {relativesList.map((relative, index) => (
          <li key={"relativeListItem" + {index}}>{relative}</li>
        ))}
      </ol>

    </div>);
};

export default App;
