import React, {useRef} from 'react'

export default function InputDate() {
    const inputRef = useRef()
    const [date, setDate ] = React.useState("")
    
    function handleChange(e){
        console.log(e.target.value)
        setDate(e.target.value)
    }
    function handleClick(){
        console.log("hola")
        inputRef.current.focus().click()
    }

    return (
        <div>
            <div className="common-input" onClick={handleClick}>
                <span>{date}</span>
            </div>
            <input type="date" ref={inputRef} onChange={handleChange} className="d-nones"/>
        </div>
    )
}
