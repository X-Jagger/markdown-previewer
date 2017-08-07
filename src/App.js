import React, {
  Component
} from 'react';
import marked from 'marked'
import './App.css';
const text = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.
 
 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`

const height = 600;
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Markdown Previewer</h1>
        <Result></Result>
      </div>
    );
  }
}
class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text,
      height: height,
    }
    this.changeLength = this.changeLength.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeScroll = this.changeScroll.bind(this);
  }
  changeLength(newHeight) {
    this.setState({
      height: newHeight
    });
  }

  changeText(newText) {
    this.setState({
      text: newText,
    })
  }
  changeScroll(height) {
    window.scrollTo(height, height)
  }
  render() {
      const {
        text,
        height,
      } = this.state;
      const markup = {
        __html: marked(text)
      };
      return (
          <div className="result">
      
      < textarea 
      className="input"
      id = "textarea"
      style={{height:height}}
      onChange={() => {
        const newText = document.getElementById('textarea').value;
        const newHeight = document.getElementById('output').offsetHeight/1.1;
        this.changeScroll(newHeight);
        // console.log(newHeight);
        this.changeLength(newHeight);
        this.changeText(newText);
        document.getElementById('output').innerHTML = marked(newText)
      }} >
       {text}< /textarea>
   
    <div className="output">
      <div id ="output" 
      dangerouslySetInnerHTML={markup}
      >
      
      </div>
      </div> < /div>
    )
  }
}

export default App;