import React from "react";
export default
class Wish extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          bwish: "Click here if you have bad day "
        }
      }
  
      changeWish = () => {
        this.setState({
          fwish: "Life is too short for us to dwell on sadness. Cheer up and live life to the fullest."
        })
      }  
      
    
  }