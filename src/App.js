import EmojiPicker from "emojione-picker";
import "./picker.css";
import "./emojione.css";




function App() {
  const logChoice = function(emoji) {
    console.log(emoji);
  }

  return (
    <>
    <h1>EmojiOne picker</h1>
    <EmojiPicker onChange={logChoice} />


    </>

  );
}

export default App;
