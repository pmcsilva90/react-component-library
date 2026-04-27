import React from "react"
import ReactDOM from "react-dom/client"
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
/*
AVAILABLE BADGE VARIANTS
    Shape: "square", "pill"
    Colors: "gray", "red" , "yellow", "green", "blue", "indigo", "purple", "pink"
*/

import Banner from "./components/Banner/index"
/* 
AVAILABLE BANNER VARIANTS:
    "success", "warning", "error", "neutral"
*/

import Card from "./components/Card/index"
import Testimonial from "./components/Testimonial/index"
import testimonialImage from "./assets/ebbd218e43da4fc0a30598c1777461ca480d0fde.jpg"

function App() {
    return (
        <>
            <h1>Component Library</h1>
            <h2>Testimonials</h2>
            <Testimonial image={testimonialImage} author="May Andersons" role="Workcation, CTO">
                <Testimonial.Text>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</Testimonial.Text>
            </Testimonial>
            <Testimonial author="May Andersons" role="Workcation, CTO">
                <Testimonial.Text>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</Testimonial.Text>
            </Testimonial>
            <h2>Badges examples</h2>
            <h3>Square shape</h3>
            <Badge variant="square gray">badge square gray</Badge>
            <Badge variant="square red">badge square red</Badge>
            <Badge variant="square yellow">badge square yellow</Badge>
            <Badge variant="square green">badge square green</Badge>
            <Badge variant="square blue">badge square blue</Badge>
            <Badge variant="square indigo">badge square indigo</Badge>
            <Badge variant="square purple">badge square purple</Badge>
            <Badge variant="square pink">badge square pink</Badge>
            <Badge variant="circle beige">badge square pink</Badge>
            <Badge variant="circle blue">badge square pink</Badge>
            <Badge variant="blue circle">badge square pink</Badge>
            <Badge variant="green triangle">badge square pink</Badge>
            <h3>Pill shape</h3>
            <Badge variant="pill gray">badge pill gray</Badge>
            <Badge variant="pill red">badge pill red</Badge>
            <Badge variant="pill yellow">badge pill yellow</Badge>
            <Badge variant="pill green">badge pill green</Badge>
            <Badge variant="pill blue">badge pill blue</Badge>
            <Badge variant="pill indigo">badge pill indigo</Badge>
            <Badge variant="pill purple">badge pill purple</Badge>
            <Badge variant="pill pink">badge pill pink</Badge>
            <h2>Banners examples</h2>
            <h3>Single line</h3>
            <Banner variant="success">
                <Banner.Title>Congratulations!</Banner.Title>
            </Banner>
            <Banner variant="warning">
                <Banner.Title>Attention</Banner.Title>
            </Banner>
            <Banner variant="error">
                <Banner.Title>
                    There is a problem with your application
                </Banner.Title>
            </Banner>
            <Banner variant="neutral">
                <Banner.Title>Update available</Banner.Title>
            </Banner>
            <h3>Multi line</h3>
            <Banner variant="success">
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </Banner.Text>
            </Banner>
            <Banner variant="warning">
                <Banner.Title>Attention</Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam quo totam eius
                    aperiam dolorum.
                </Banner.Text>
            </Banner>
            <Banner variant="error">
                <Banner.Title>
                    There is a problem with your application
                </Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam quo totam eius
                    aperiam dolorum.
                </Banner.Text>
            </Banner>
            <Banner variant="neutral">
                <Banner.Title>Update available</Banner.Title>
                <Banner.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </Banner.Text>
            </Banner>

            
            <h2>Card example</h2>
            <br />
            <Card>
                <Card.Title>Easy Deployment</Card.Title>
                <Card.Text>
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                </Card.Text>
            </Card>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
