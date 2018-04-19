/* class Counter extends React.Component{
    constructor(props){
        super(props);
        this.hendleAddOne = this.hendleAddOne.bind(this);
        this.hendleMinusOne = this.hendleMinusOne.bind(this);
        this.hendleReset = this.hendleReset.bind(this);
        //state obj
        this.state ={
            count: 0
        };
    }
    hendleAddOne(){
        this.setState((prevState)=>{
            return{
                count:prevState.count + 1
            }
        })
        
    }

    hendleMinusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            }
        })
    }

    hendleReset(){
        this.setState((prevState)=>{
            return{
                count: 0
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.hendleAddOne}>+1</button>
                <button onClick={this.hendleMinusOne}>-1</button>
                <button onClick={this.hendleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app")); */

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.hendleToggleVisibiliti = this.hendleToggleVisibiliti.bind(this);
        this.state = {
            visibility: false
        }
    }
    hendleToggleVisibiliti(){
        alert("hendleToggleVisibiliti")
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.hendleToggleVisibiliti}>
                    {this.state.visibility ? "Hide det":"Show det"}
                </button>
                
            </div>


            
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));