import React, { Fragment } from 'react';
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
// import { GlobalStyle } from './GlobalStyle';    
import { Grid, Column, Grid1 } from './Grid';
import Logo from "../../assets/Logo2.jpg";
import UpperDiv from "./UpperDiv";
import LowerDiv from "./LowerDiv";
import QuoteDiv from "./Quote";
import {Form} from "./Contact";
import Footer from "./Footer";


const Home = () => (
        <Fragment>
            {/* <GlobalStyle/> */}
            <NavBackground>
                <Navbar/>
                <UpperDiv />
            </NavBackground>
            <Container>
                < LowerDiv />
            </Container>
            <QuoteDiv />
            <Form />
            <Footer />
        </Fragment>
)

// class Home extends Component {
//     render(){
//         return(
//             <p>Hey There</p>
//         )
//     }
// }
export default Home;