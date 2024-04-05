import React from 'react';

class XMLParser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xmlText: props.xmlText
    };
  }

  parseXMLtoText = () => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.state.xmlText, 'text/xml');
    let resultText = '';

    const sentences = xmlDoc.getElementsByTagName('sentence');
    for (let i = 0; i < sentences.length; i++) {
      const sentence = sentences[i].childNodes[0].nodeValue;
      resultText += sentence + ' ';
    }

    return resultText.trim();
  }

  render() {
    const normalText = this.parseXMLtoText();

    return (
      <div>
        <p>{normalText}</p>
      </div>
    );
  }
}

export default XMLParser;