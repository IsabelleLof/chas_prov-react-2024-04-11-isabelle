// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";
import Article from "./Article";
//import ButtonWithIcon from "./ButtonWithIcon";
//import { BsTrash, BsFillHandThumbsUpFill } from "react-icons/bs";

function App() {
  return (
    <div>
      <div>
        <Button title="First Button" color="red" />
        <Button title="Second Button" color="yellow" />
      </div>
      <div>
        <ButtonWithChildren color="blue">Third Button</ButtonWithChildren>
        <ButtonWithChildren color="purple">Fourth Button</ButtonWithChildren>
      </div>
      <div>
        <Article type="text" title="Text 1" text="cats"></Article>
        <Article type="text" title="text 2" text="dogs"></Article>
      </div>
    </div>
  );
}

export default App;
