import React from "react";

export default class HigherOrderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filterUsingUserType : [],
            filterUsingFirstName : [],
            filterUsingAge : [],
            totalYears : 0
        }
        let filteredData = this.state.userData.filter((el)=>el.user_type === "Designer")
        this.state.filterUsingUserType = filteredData
        let ChangeName = this.state.userData.filter((el)=>el.name.startsWith("J"))
        this.state.filterUsingFirstName = ChangeName
        let filteredAge = this.state.userData.filter((el)=>el.age>28 && el.age<=50)
        this.state.filterUsingAge = filteredAge
        let totalYearsOfUsers = this.state.userData.filter((el)=>el.user_type === "Designer").reduce((accu,el)=>
            accu + el.years
        ,0)
            
        this.state.totalYears = totalYearsOfUsers 
        
        }

        
    render(){

        let styleDiv = {
            marginLeft : "340px",
            width:"40vw",
            border: "2px solid black",
            textAlign: "left",
            color: "Blue",
            padding : "10px",
            paddingLeft:"40px",
        }
        
        let Data = {
            margin:"20px"
        }


        return(
        <>
            <h1>Display All Items</h1>
            <div style={styleDiv}>
            {this.state.userData.map((el)=>(
                <div key={el.id}>
                   <span style={Data}>Id : {el.id}</span>
                    <span style={Data}>Name : {el.name}</span>
                    <span style={Data}>User Type : {el.user_type}</span>

                </div>
               
                
            ))} </div>


            <h1>Filtering using User type</h1>
            <div style={styleDiv}>
            {this.state.filterUsingUserType.map((el)=>(
                <div key={el.id}>
                   <span style={Data}>Id : {el.id}</span>
                    <span style={Data}>Name : {el.name}</span>
                    <span style={Data}>User Type : {el.user_type}</span>

                </div>
                
                
            ))}
            </div>

            <h1>Filter all data starting with J</h1>
            <div style={styleDiv}>
            {this.state.filterUsingFirstName.map((el)=>(
                <div key={el.id}>
                    <span style={Data}>Id : {el.id}</span>
                    <span style={Data}>Name : {el.name}</span>
                    <span style={Data}>User Type : {el.user_type}</span>

                </div>
                
                
            ))}
            </div>

            <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
            <div style={styleDiv}>
            {this.state.filterUsingAge.map((el)=>(
                <div  key={el.id}>
                    <span style={Data}>Id : {el.id}</span>
                    <span style={Data}>Name : {el.name}</span>
                    <span style={Data}>User Type : {el.user_type}</span>
                </div>
                
                
            ))}
            </div>

            <h1>Find the total years of Designers</h1>
            <div style={styleDiv}>
                <p>{this.state.totalYears}</p>
                </div>

        </>
        )
        
    }
}
    