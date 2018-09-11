import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import * as Eos from 'eosjs'

const BrowserRouter = require('react-router-dom').BrowserRouter
const Route = require('react-router-dom').Route
const Link = require('react-router-dom').Link


class App extends Component {
  
  render() {
    return (
      <Container>
        <Header>
          <Title>Eos Stamina</Title>
        </Header>
        <SideBar>
        
          <List>
          <Listitem><Button onClick = {()=> this.scatterLogin()}>
            Scatter login
          </Button></Listitem>

          <Listitem><Button>
            Create Game
          </Button></Listitem>
          
          <Listitem><Button>
            Transfer
          </Button></Listitem>
          <Listitem><Button>
            Join Game
          </Button></Listitem>
          <Listitem><Button>
            Delete Game
          </Button></Listitem>
          <Listitem><Button>
            Submit Turn
          </Button></Listitem>
          <Listitem><Button>
            Claim Victory
          </Button></Listitem>
          </List>
          
        </SideBar>
        
        <RightSide>
          
        </RightSide>
        <MainArea>

        </MainArea>
      </Container>    
    );
  }
  scatterLogin(cb) {
    const network = {
      protocol: 'http', // Defaults to https
      blockchain: "eos",
      host: "193.93.219.219",
      port: 8888,
      chainId:
      "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
      };
      
      const eosOptions = {
      chainId:
      "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
      };
      const requiredFields = {
      accounts: [
      {
      blockchain: "eos",
      host: "193.93.219.219",
      port: 8888,
      chainId:
      "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca"
      }
      ]
      };
    let scatter = window.scatter;
    var pubkey = "EOS8ZjT6ahwoz39srfqR53rNYTb5KXm1CysmZYyvHHkUa2xAgmqVL";
    
    
    
    scatter.getIdentity(requiredFields).then(identity => {
    console.log("identity", identity);
    cb(null, identity)
    }).catch(error => {
    console.log("error", error)
    // cb(null)
    });
    console.log(scatter);
  }
}

const Container = styled.div `
  
  display : grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr 1fr;
  width: 100%;
  height: 100%;
  min-height: 800px;
  background-color: white;

`;


const Button = styled.button
`
  border-radius: 50px;
  background-color: white;
  border: 2px solid #008CBA;
  color: black;
  font-size: 15px;
  transition-duration: 0.4s;
  &:hover ${Button} {
    
    background-color: #008CBA;
    color: white;
  }
  
`

const List = styled.ul`
  list-style-type: none;
 
`;

const Listitem = styled.li`
  padding-top: 10px;
`;

const MainArea = styled.div
`
  width:80%;
  height: 80%;
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: #aaaaaa;
  margin: auto;
`
const Header = styled.div `
  background-color: white;
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const SideBar = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  background-color: white;
`;

const RightSide = styled.div
`
  grid-column-start: 2;
  grid-row-start: 2;
  background-color: #cccccc;
`

const LeftSideBar = styled.div `
  background-color: #ffffff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
`;

const RightSideBar = styled.div `
  background-color: #eeeeee;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
`;

const Footer = styled.div `
  background-color: red;
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const LargeCard = styled.div `
  width: 80%;
  height: auto;
  background-color: blue;
  margin: 10%;
  height: 25%;
`;

const Title = styled.div `
  background-color: tomato;
  color: white;
  grid-column-start: 2;
  grid-row-start: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

 

   

export default App;
