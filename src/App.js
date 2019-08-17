import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component{
    state = {
        persons: [
            {id:'1',name:'Analesh', age:22},
            {id:'2',name:'Akhil', age:25 }
        ],
        otherState: 'some other state',
        showPersons:false
    }
    deletePerson =(getIndex)=>{
        // const peerson=this.state.persons.slice();
        const peerson=[...this.state.persons];
        peerson.splice(getIndex,1);
        this.setState({persons:peerson
        })
    }

    changedNameHandler=(event)=>{
        this.setState( {
            persons: [
                {name:'Analesh', age:22},
                {name:event.target.value, age:29 }
            ]
        })
    }

    togglePersonsHandler =()=>{
        const istemp = this.state.showPersons;
        this.setState({showPersons:!istemp})
    }




    render() {
        let classes=['red','bold'].join(' ');

        const style= {
            backgroundColor:'white',
            font:'inherited',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer',
            // ':hover' :{
            //     backgroundColor:'lightgreen',
            //     color:'black'
            // }
        };

        let toggle=null;
        if(this.state.showPersons){
            toggle = (
                <div>
                    {
                        this.state.persons.map((person,index)=>{
                            return <Person
                                click={()=> this.deletePerson(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}  />

                        })
                    }
                </div>
            );
            style.backgroundColor='red';
            // style.hover ={
            //     backgroundColor:'lightgreen',
            //         color:'black'
            // }
        }

        return (

            <div className="App">
                <h1>Hello Its from React App</h1>
                <p className={classes}>This is working</p>
                <button style={style} onClick={this.togglePersonsHandler}> Switch Name</button>
                {toggle}
            </div>


        );
    }

}

export default (App);


// state = {
//     persons: [
//         {name:'Analesh', age:22},
//         {name:'Akhil', age:25 }
//     ],
//     otherState: 'some other state'
// }
//
// switchNameHandler = ()=>  {
//     // console.log('was Clicked');
//     this.setState( {
//         persons: [
//             {name:'Analesh', age:22},
//             {name:'Akhil', age:29 }
//         ]
//     })
//
// }
{/*<Person*/}
{/*    name={this.state.persons[0].name}*/}
{/*    age={this.state.persons[0].age}*/}
{/*    click={this.switchNameHandler.bind(this,'Max!!! ')}*/}
{/*/>*/}
{/*<Person*/}
{/*name={this.state.persons[1].name}*/}
{/*age={this.state.persons[1].age}*/}
{/*changed={this.changedNameHandler}>My hobby </Person>*/}

