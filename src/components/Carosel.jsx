import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import styled from 'styled-components';

const CarouselStyle = styled.div`
    img{
        border-radius: 100%;
        width: 19vh;
        height: 18vh;
    }
`;

class CarouselPage extends Component {
  render() {
    return (
        <CarouselStyle>
            <Carousel activeItem={1} length={4} showControls={false} showIndicators={false} className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                  <View>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                    <Mask overlay="black-light" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h3>
                    <p>First text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <View>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                    <Mask overlay="black-strong" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h3>
                    <p>Aghama</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <View>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                    <Mask overlay="black-slight" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h3>
                    <p>Olurotimi</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                  <View>
                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                    <Mask overlay="black-light" />
                  </View>
                  <CarouselCaption>
                    <h3 className="h3-responsive">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h3>
                    <p>Opeyemi</p>
                  </CarouselCaption>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
      </CarouselStyle>
    );
  }
}

export default CarouselPage;
