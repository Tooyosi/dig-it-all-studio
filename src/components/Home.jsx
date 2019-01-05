import React, { Fragment } from 'react';
import Container from './Container';
import { NavbarStyle, NavBackground, NavBrand } from './Navbar';
import { GlobalStyle } from './GlobalStyle';
import { Grid, Column, Grid1 } from './Grid';
import Logo from "../../assets/Logo2.jpg";
import UpperDiv from "./UpperDiv";
import LowerDiv from "./LowerDiv";
import Contact from "./Contact";


const Home = () => (
        <Fragment>
            <GlobalStyle/>
            <NavBackground>
                <NavbarStyle className="nav-style">
                        <span class="collapsible-menu">
                            <img className="nav-brand" src={Logo} />
                            <input type="checkbox" id="menu" />
                            <label for="menu">
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </label>
                            <div class="menu-content">
                                <ul>
                                    <li><a href="#"></a>Home</li>
                                    <li><a href="#"></a>About</li>
                                    <li><a href="#"></a>Contact</li>
                                 </ul>
                             </div>
                        </span>
                </NavbarStyle>
                <Container>
                    <Grid1>
                        <Column>
                        <UpperDiv />
                        </Column>
                    </Grid1>
                </Container>
            </NavBackground>
            <Container>
                < LowerDiv />
            </Container>
            <Container>
                < Contact />
            </Container>
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