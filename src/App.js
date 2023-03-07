import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* //Create an outer div to encapsulate 4 divs. The fourth div will have
      another div nested within it. */}
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
   // unsure why but the changes will not show in the preview tab on Codesandbox.io
   // The HTML will show up correctly when clicking to open the browser in a new window
  );
}
