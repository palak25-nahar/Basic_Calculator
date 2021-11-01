import {Component} from 'react';

class Calculator extends Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            value: '',
            fno:'',
            sno:''
        };
    }

    handleFno = (event:any) => {
        this.setState({
            fno:event.target.value
        })
    }
    handleSno = (event:any) => {
        this.setState({
            sno:event.target.value
        })
    }

    addNum = () => {
        const {fno,sno} = this.state;
        let result = parseInt(fno) + parseInt(sno);
        this.setState({value:result});
    }
    subNum = () => {
        const {fno,sno} = this.state;
        let result = parseInt(fno) - parseInt(sno);
        this.setState({value:result});
    }
    mulNum = () => {
        const {fno,sno} = this.state;
        let result = parseInt(fno) * parseInt(sno);
        this.setState({value:result});
    }
    divNum = () => {
        const {fno,sno} = this.state;
        let result = parseInt(fno) / parseInt(sno);
        this.setState({value:result.toFixed(2)});
    }
    
    render(){
        const {fno,sno,value} = this.state;
        return(
            <>
            <input type="text" name="fno" value={fno} onChange={this.handleFno} placeholder="Enter first number" />
            <input type="text" name="sno" value={sno} onChange={this.handleSno} placeholder="Enter second number"/>
            <button type="submit" value="Add" onClick={this.addNum}> + </button>
            <button type="submit" value="Subtract" onClick={this.subNum}> - </button>
            <button type="submit" value="Divide" onClick={this.mulNum}> * </button>
            <button type="submit" value="Multiply" onClick={this.divNum}> / </button>
            <p>result={value}</p>
            </>
        );

    }
}
export default Calculator;
