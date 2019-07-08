import React, {Component} from 'react'
import {connect} from 'react-redux'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact"
import Header from './Header'
import saber from '../assets/IMG_20190705_134943_119.jpg'

class Home extends Component{
    componentDidMount(){
 
    }


    render(){
        let {user} = this.props
        console.log(saber)
    
    return(
        <div style={{background:'gray', height:'100vh'}}>
      <Header></Header>

       <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={saber}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src=""
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    
        </div>
    )
}}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect (mapStateToProps, {})(Home)
