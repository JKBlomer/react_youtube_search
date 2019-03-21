import React, {Component} from "react";
import {Form, FormGroup, Label, Input} from "reactstrap";
import styled from "styled-components";

const ClearButton = styled.span`
   color: grey;
   font-weight: 900;
   font-size: 24px;
   position: absolute;
   top: 0px;
   right: 10px;
   cursor: pointer;

   :hover{
      color: purple;
   }
`

class SearchBar extends Component{
   state = {
      search : ""
   }

   handleInputChange = event => {
      const {value} = event.target;
      this.setState({search: value});
      this.props.searchYouTube(value);
   }


   render(){
      return (

            <Form onSubmit={(event)=>event.preventDefault()}>
            <FormGroup style={{position: "relative"}}>
               <Label for="search">Search</Label>
               <Input 
               type="text" 
               name="search" 
               id="exampleEmail" 
               placeholder="What would you like to search for?"
               value={this.state.search}
               onChange={this.handleInputChange}
               />
               <ClearButton onClick={()=> this.setState({search: ""})}>X</ClearButton>
            </FormGroup>
            </Form>

      );
   }

}


export default SearchBar;