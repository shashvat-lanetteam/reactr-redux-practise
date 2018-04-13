import React from 'react';
import {loginmethod} from './../actionMethods/auth';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

 class Login extends React.Component{
     constructor() {
         super();
         this.state = {
             credentials:{}
         }
     }
     handleChange=(e)=>{
       const {credentials} =this.state;
       credentials[e.target.id]=e.target.value;
       this.setState({credentials});
     };
     loginHandler=()=>{
       this.props.loginmethod(this.state.credentials);
     };
     render(){
         debugger;
         return(
             <div>
                 <input type={'text'} id={'username'} onChange={this.handleChange}/>
                 <input type={'password'} id={'password'} onChange={this.handleChange} />
                 <button onClick={this.loginHandler}>login</button>
             </div>
         )
     }
 }

 const mapStateToProps=state=>state;
 const mapDispatchToProps=(dispatch)=>bindActionCreators({loginmethod},dispatch);
 export default connect(mapStateToProps,mapDispatchToProps)(Login)