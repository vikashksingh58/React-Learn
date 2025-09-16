import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Container from './components/Container';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/PrivacyMessage';

function App() {
  const privacy = useSelector(store => store.privacy)
  return (
    <div className="container">
      <div className='row mainCard'>
        <div className='col-md-8 text-center'>
          <Container>
            <Header />
            <div className='row'>
              <div className="col-lg-12 mx-auto">
                  {privacy ? <PrivacyMessage /> : <DisplayCounter />}
                    
                    <Controls />
              </div>
            </div>
          </Container>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
