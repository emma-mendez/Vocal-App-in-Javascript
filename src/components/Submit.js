import React, { useState} from "react";


function Submit() {
    const [mongoEndpoint, setmongoEndpoint] = useState();
    const typedPassword = "";


return (
    <div
    class='wordOnly'
        onClick={() => {
          console.log(
            `Clicked the button with a endpoint of Mongo 
            ${mongoEndpoint} and a password of 
            ${typedPassword}`
          );
        }}>
        Submit
    </div>
  );
}

export default Submit;