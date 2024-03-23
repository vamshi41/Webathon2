import React, { useState, useEffect } from 'react';
import pdftotext from 'react-pdftotext';
import { useNavigate } from 'react-router-dom';
import './Makepaper.css'
function Makepaper() {
    let navigate=useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const extractTextFromPdf = async () => {
    if (selectedFile) {
      try {
        const text = await pdftotext(selectedFile);
        setQuestions(text);
        setInterval(() => {
          setQuestions("")
          window.open('http://localhost:3000/', '_self')       
        }, 2000);
      } catch (error) {
        console.error('Error extracting text:', error);
      }
    }
  };

  // Function to process extracted text into a formatted question array
  const processText = (text) => {
    const questionRegex = /Question\s*:\s*(.?)(?=Question\s:|\s*$)/gs;
    const optionRegex = /\(\w\)/g;

    const questionsArray = [];
    let matches;

    while ((matches = questionRegex.exec(text)) !== null) {
      const questionText = matches[1];
      const optionsText = text.substring(matches.index + matches[0].length);

      const options = optionsText.split(optionRegex).map((option) => option.trim());
      const answerMatch = optionsText.match(/\(Answer\:\s*\(\w\)\)/);
      const answer = answerMatch ? answerMatch[1] : null;

      questionsArray.push({ questionText, options, answer });
    }

    return questionsArray;
  };

  return (
    <div className='makefile m-5'>
      <input type="file" onChange={onFileChange} />
      <button onClick={extractTextFromPdf}>Extract Text</button>
      {questions}
    </div>
  );
}

export default Makepaper;