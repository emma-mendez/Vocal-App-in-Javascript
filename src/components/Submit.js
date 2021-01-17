import React, { useState} from "react";


function Submit() {
    const [mongoEndpoint, setTypedName] = useState();
    const typedPassword = "";


return (
    <div>
    <button class='wordOnly'
        onClick={() => {
          console.log(
            `Clicked the button with a endpoint of Mongo ${mongoEndpoint} and a password of ${typedPassword}`
          );
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Submit;