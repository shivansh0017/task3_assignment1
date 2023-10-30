import { useState } from 'react';
function Count() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  
  const textChange = (x) => {
    const newText = x.target.value;
    setText(newText);
    const words = newText.split(/\s+/).filter((word) => word !== '');
    setWordCount(words.length);
  };

  return (
  <div>
  <h1 >Responsive Paragraph Word Counter</h1>
      <textarea value={text}  onChange={textChange} rows={10}></textarea>
  <p>Word Count:{wordCount}</p>
  </div>
  )
}

export default Count;