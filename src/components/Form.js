import React, { useState} from "react";


function Form() {
    const [typedName, setTypedName] = useState();
    const typedPassword = "";


return (
    <div>
      <input
        placeholder="Username"
        value={typedName}
        onChange={(event) => {
          setTypedName(event.target.value);
        }}
      />
      <input placeholder="Password" value={typedPassword} />
      <button
        onClick={() => {
          console.log(
            `Clicked the button with a username of ${typedName} and a password of ${typedPassword}`
          );
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Form;