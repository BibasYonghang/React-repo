
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" about="aboutTextUtils" /> */}
      <Navbar title="TextUtils"/>
      <div className="container my-3"/>
      <TextForm heading='Enter the text to analyze below' />
    </>
  );
}

export default App;
