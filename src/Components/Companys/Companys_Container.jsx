import * as axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { getCompanysAC } from "../../redux/companys-reducer";
import Companys from "./Companys";
import { getCompanys } from "../Api/Api";

class Companys_API_Container extends React.Component {
  
    componentDidMount(props)
    {   
        getCompanys()
        .then(data => 
        this.props.getCompanysAC(data.companys)); 
    }

    render() {
        return (
             <Companys {...this.props.companys} />
        )
    }
}


let mapStateToProps = (state) => 
{
    return {
        companys: state.companysStore
    }
}

const companys_container = connect(mapStateToProps, { getCompanysAC })(Companys_API_Container); 

export default  companys_container; 
