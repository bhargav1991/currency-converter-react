import React from 'react';
import './Form.css';
import List from './List';
export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:{}
        };
        this.usdEquivalent=0;
    }
    convertNonUsd = (val,amt) => amt/val;
    onChange = (e)=>{
        const currency = document.getElementById('currencySelector');
        const currencyValue = currency.value;
        const currencyText = currency.options[currency.selectedIndex].text;
        const amt = document.getElementById('amount').value;
        this.usdEquivalent = currencyText==='USD' ? document.getElementById('amount').value:this.convertNonUsd(currencyValue,amt);
        this.setState({
            list:this.convert()
        });
        
    }
    convert = ()=>{
        const result={};
        Object.keys(this.props.data).map((data)=>{
            result[data] = this.props.data[data]*this.usdEquivalent;
        });
        return result;
    }
    render(){
        const data = this.props.data;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 ">
                        <form>
                            <div className="form-group">
                                <select id="currencySelector" onChange={this.onChange} className="custom-select  ">
                                    <option >Select Currency</option>
                                    {Object.keys(data).map(function(i){
                                        return <option key={i} value={data[i]}>{i}</option>
                                    })}
                                </select>
                                <input id="amount" onChange={this.onChange} name="amount" type="text" className="form-control" placeholder="Amount"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <List list={this.state.list}/>
            </div>
        );
    }
    
}