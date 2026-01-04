import React from 'react'
import InitialProgress from './InitialProgress.jsx'
import NotifyForm from './NotifyForm.jsx'
import Particles from './Components/Particles';
import cloudBox from './assets/pic2.webp';
const Home = () => {
  return (

    <>
    <div style={{position: 'absolute',zIndex: 1 }} className="vh-100 w-100">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={15}
            speed={0.05}
            particleBaseSize={150}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
    <div className='container'>
        <div className="text-center margin-auto align-content-center" style={{height:"100vh"}}>
          <div className='title f-lora fw-bold'>
            <h1>Innovative Kits for a Smarter Generation</h1>
          </div>
          <div className='my-3'>
            <button 
              onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}
              type="button"
              className="Explore_btn rounded p-3 m-1"
              style={{ zIndex: 2, position: 'relative' }}
            >
              Explore
            </button>
          </div>
          <div>
            <img
                src={cloudBox}
                className='box-img rounded'
                alt='Box Cloud'
                id='Explore'
            />
          </div>
        </div>
        
        <div id='workflow' className='title'>
          <div className="pt-5">
            <h2 className='text-center pt-3'>Idea to Reality: Genzonix Formation Process</h2>
            <InitialProgress/><hr />
          </div>
        </div>
        <div>
          <NotifyForm/>
        </div>
    </div>
    </>
  )
}

export default Home

/* 

{
      id:'Explore',
      title:'Innovative Kits for a Smarter Generation',
      button:'Explore',
      image:boxCloud,
      state:true
    }
      
    */