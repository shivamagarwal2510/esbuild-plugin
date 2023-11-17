import React, {useState} from 'react';
const App: React.FC = () => {
  const [node, setNode] = useState("Select Node");
  window.onmessage = (event) => {
    const {type, colorArr} = event.data.pluginMessage;
    if (type === "nodes-arr"){
      console.log("Data recieved", colorArr);
      setNode(colorArr? JSON.stringify(colorArr, null, 1):'Select Node');
    }
  }
  return (
    <div>
        <h1>Select filled Nodes to get their hexcodes</h1>
      <div>{node}</div>
    </div>
  );
};

export default App;