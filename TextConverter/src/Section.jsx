import React, {useState} from 'react'

export default function section() {
    const [value,setValue]=useState("");

    function changeHandler(e){
        setValue(e.target.value)
    }
    function upperCase(){
        let x=value.toUpperCase()
        setValue(x)
    }
    function lowerCase(){
        let x=value.toLowerCase()
        setValue(x)
    }
    function trimSpace(){
        let str=value.replace(/\s+/g,' ').trim();
        setValue(str)
    }
    function inverseText(){
        let str=""
        for(let i=0;i<value.length;i++){
            let ch=value.charAt(i);
            if(ch>='a'&&ch<='z'){
                str+=ch.toUpperCase()
            }else if(ch>='A'&&ch<='Z'){
                str+=ch.toLowerCase()
            }else{
                str+=ch;
            }
        }
        setValue(str)
    }
    function clearText(){
        setValue("");
    }
  return (
    <section >
        <div className="mb-3">
        <h1>Enter the text to analyze</h1>
        <textarea className="form-control" value={value} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
    <button type="button" className="btn btn-primary me-3" onClick={upperCase}>UpperCase</button>
    <button type="button" className="btn btn-primary me-3" onClick={lowerCase}>LowerCase</button>
    <button type="button" className="btn btn-primary me-3" onClick={trimSpace}>TrimSpace</button>
    <button type="button" className="btn btn-primary me-3" onClick={inverseText}>InverseText</button>
    <button type="button" className="btn btn-primary me-3" onClick={clearText}>Clear</button>

    <h2 className="mt-5">Text Summary</h2>
    <p>{value==""?0:value.split(" ").length} Words and {value.length} Characters</p>
    <h4>Preview</h4>
    <p>{value}</p>
    </section>
  )
}
