import React, {Component} from 'react'
import {connect} from 'react-redux'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact"
import Header from './Header'
import saber from '../assets/IMG_20190705_134943_119.jpg'
import sabers from '../assets/IMG_1558.JPG'
import saberss from '../assets/IMG_1557.JPG'
import sabersss from '../assets/IMG_1556.JPG'

class Home extends Component{
    componentDidMount(){
 
    }


    render(){
        let {user} = this.props
        console.log(saber)
     
    return(
        <div style={{background:'#90a4ae', height:'100vh'}} >
      <Header></Header>

       <MDBContainer >
      <MDBCarousel style={{height:'90vh'}}
        activeItem={1}
        length={6}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img 
                className="d-block w-100"
                src='data:image/jpeg;base64,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'
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img 
                className="d-block w-100"
                src={sabers}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={saber}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={saberss}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src='https://scontent-lht6-1.cdninstagram.com/vp/ce55b82019cc428ab4005a43659bde25/5D8043D5/t51.2885-15/e35/53781950_1010756872645648_645775142720301578_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&se=7&ig_cache_key=MjAxMzUzOTI2MDE5OTgyNDA4Mg%3D%3D.2'
                alt="Fourth slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src={sabersss}
                alt="Fourth slide"
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
