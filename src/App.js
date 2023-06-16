import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight,  } from '@fortawesome/free-solid-svg-icons'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
import Pimg from './img/profile.jpg'

function App() {
  return (
    <div className='main'>
      <section>
        <div className='flex pl-64 pt-12'>
          <div className='w-2/12 flex items-center'>
            <div className='w-full text-right'>
            <FontAwesomeIcon icon={faArrowLeft} className='p-3 rounded-full bg-white border border-gray-100 shadow-lg mr-5'/>
            </div>
          </div>

          <div className='w-96 h-96 border bg-slate-50'>
            <div className='w-40'>
              <img src={Pimg} alt='logo' className='rounded-full mx-28 my-4 opacity-75' />
            </div>
            <h2 className='text-2xl font-bold text-center'>Oduola Ebenezer</h2>
            <p className='text-center text-red-900 text-lg pt-1'>Frontend Developer / QA Tester</p>

            <div className='flex justify-center gap-12 pt-4'>
              <a href='https://www.github.com/StrangeBee/' target='_blank'><BsGithub /></a>
              <a href='https://www.twitter.com/oduolabenfico/' target='_blank'><BsTwitter /></a>
              <a href='https://www.linkedin.com/in/oduola-ebenezer/' target='_blank'><BsLinkedin /></a>
            </div>
          </div>

          <div className='w-2/12 flex items-center'>
            <div className='w-full'>
            <FontAwesomeIcon icon={faArrowRight} className='p-3 rounded-full bg-white border border-gray-100 shadow-lg ml-5'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
