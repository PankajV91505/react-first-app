function Rendom() {
    let number = Math.random() * 100 ; 
    return <h1 style={{'background-color': '#776689'}}>Random Number is : {Math.round(number)}</h1>
}

export default Rendom;