import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import { ToastContainer } from "react-toastify";
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Menubar from './components/Menubar';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
   
    <BrowserRouter> 
     <ToastContainer />
    <Container>
      <Header />
      <Row>
        <Col md={4}> <Menubar /> </Col>

        <Col md={8}>

          <Routes>
            <Route path='/' Component={Home} exact />
            <Route path='/add-course' Component={AddCourse} exact />
            <Route path='/view-courses' Component={Allcourses} exact />
          </Routes>

        </Col>

      </Row>
    </Container>
  
    </BrowserRouter>
   
  );
}

export default App;
