import React,{ useState } from 'react'


export default function Textform(props) {
    const handleUpClick =()=>{
        console.log('Uppercase was clicked')
        setText(text.toUpperCase())
        props.showAlert("Converted To Uppercase","success")
    }
    const handleLowerClick =()=>{
        console.log('lowercase was clicked')
        setText(text.toLowerCase())
        props.showAlert("Converted To Lowercase","success")
    }
    const handleClear =()=>{
        console.log('Clear was clicked')
        setText('')
        props.showAlert("Text Cleared","success")
    }
    const copy= ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success")
    }
    const handleOnChange =(event)=>{
        console.log('On Change')
        setText(event.target.value)
    }
    function words(){
        let word = text.replace(/^\s+/g, '')
        // if (text ===''){
        //     return text.trim().split(" ").length -1;
        // }
        // else {
        //     return text.trim().split(" ").length;
        // }
        return word.split(" ").length -1;

    }
    const [text, setText] = useState('Enter your Text');
    return (
        <>

            <div className="textInput mb-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h1 id="heading">{props.heading}</h1>
                <textarea className="form" value={text} style={{backgroundColor :props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="buttons container-fluid">
                <button type="button" onClick={handleUpClick}  className="btn btn1 btn-primary">Uppercase</button>
                <button type="button" onClick={handleLowerClick}  className="btn btn1 btn-secondary">lowercase</button>
                <button type="button" onClick={handleClear} className="btn btn1 btn-success">Clear</button>
                <button type="button" onClick={copy} className="btn btn1 btn-danger">Copy to CLipboard</button>
                <button type="button" className="btn btn1 btn-warning">Warning</button>
                <button type="button" className="btn btn1 btn-info">Info</button>
                </div>
            </div>
            <div className="summary container-fluid mx-5 "  style={{color : props.mode==='dark'?'white':'black'}} >
                <h1>Text Summary</h1>
                <p>{words()} words and {text.trim().length} characters</p>
                <p>{0.008 * text.split(" ").length } Minutes read</p>
            </div>
            <div className="container-fluid mx-5"style={{color : props.mode==='dark'?'white':'black'}} >
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text in text box to preview"}</p>
            </div>
        </>
    )
}
