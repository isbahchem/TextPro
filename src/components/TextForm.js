import React, {useState} from 'react'


export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);//do this in order to type in  the text area.
    }
    const handleCopy=()=>{
        console.log("I am copy")
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success");
    }
    const [text, setText] = useState('');
    // text="new text";//wrong way
    // setText("new text");//correct way
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if(toogle.textContent==="Speak"){
            toogle.innerHtML="Stop"
        }
        else{
            toogle.innerHTML="Speak";
            if(toogle.innerHTML==="Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    return(
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>CopyText</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
            <button type="submit" onClick={speak} className='btn btn-warning mx-2 my-2' id="toggle">Speak</button>
        </div>
        <div className='container' style={{backgroundColor: props.mode === 'dark'?'white':'black', color: props.mode === 'dark'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).disabled={text.length===0} length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview "}</p>
        </div>
        </>
    )
}
