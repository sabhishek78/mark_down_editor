import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    convertToHtml(input){
     var res=input.replace(/^###(.*)/gm,(m,g)=>{
         return `<h3>${g}</h3>`
     }).replace(/^##(.*)/gm,(m,g)=>{
         return `<h2>${g}</h2>`
     }).replace(/^#(.*)/gm,(m,g)=>{
         return `<h1>${g}</h1>`
     }).replace(/^---(.*)\n?/gm,(m,g)=>{
         return `<hr/>`
     }).replace(/^-(.*)\n?/gm,(m,g)=>{
         return `<li>${g}</li>`
     }).replace(/(\n)/gm,(m,g)=>{
         return `<br/>`
     })
     return res;
    }
    render() {
        return (
            <div className={"editor"} >
                <textarea id={"regEx"} placeholder="INPUT YOUR TEXT HERE" value={this.state.value} onChange={this.handleChange} rows="100" cols="300">
                     </textarea>
                <div className={"outputWindow"}>
                      {ReactHtmlParser(this.convertToHtml(this.state.value))}
                  </div>
            </div>
        )
    }
}

export default Editor