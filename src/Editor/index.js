import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please input your markdown text'
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
     }).replace(/^---(.*)/gm,(m,g)=>{
         return `<hr>${g}</hr>`
     }).replace(/^-(.*)/gm,(m,g)=>{
         return `<li>${g}</li>`
     });
     return res;
    }
    render() {
        return (
            <div className={"editor"} >
                <textarea id={"regEx"} value={this.state.value} onChange={this.handleChange} rows="100" cols="300">
               </textarea>

               <div>
                   {ReactHtmlParser(this.convertToHtml(this.state.value))}
               </div>
            </div>
        )
    }
}

export default Editor