import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import { CovidServices } from './services/covidDataServices';

function App() {

  const [date, setDate] = useState("");

  const [data, setData] = useState("");

  const services = new CovidServices;

  useEffect(() => {
    services.getData().then((res) => {
      setData(res[date]);
    })
  }, [data, date]);

  

  return (
    <>
      <Header />
      <div className='container-fluid main'>
        <div className='row d-flex justify-content-center h-100 align-items-center'>
          <div className='col-6 covid-info py-5'>
            <div className='row'>
              <div className='col-md-3 d-flex justify-content-end'>
                <img className='w-75' src='https://covid19.saglik.gov.tr/Assets/sb-logo.png' />
              </div>
              <div className='col-md-9 d-flex align-items-center'>
                <h1 className='text-light fs-3 text-center'>TÜRKİYE COVİD-19 ARAMA MOTORU</h1>
              </div>
            </div>
            <div className='row mt-4 justify-content-center'>
              <div className='col-10'>
                <input onChange={(e)=>{setDate(e.target.value)}} type="text" className='w-100 py-1 rounded-1 search' placeholder='GG/AA/YYYY' />
              </div>
              <div className='col-10 row-dark d-flex justify-content-between py-3 px-3 rounded-1 mt-2'>
                <span className='text-light fw-bold'>TARİH</span>
                <span className='text-light fw-bold'>{data === undefined ? "Veri Bekleniyor" : data.date}</span>
              </div>
              <div className='col-10 row-light d-flex justify-content-between py-3 px-3 rounded-1 mt-2'>
                <span className='text-light fw-bold'>TEST SAYISI</span>
                <span className='text-light fw-bold'>{data === undefined ? "Veri Bekleniyor" : data.tests}</span>
              </div>
              <div className='col-10 row-dark d-flex justify-content-between py-3 px-3 rounded-1 mt-2'>
                <span className='text-light fw-bold'>VAKA SAYISI</span>
                <span className='text-light fw-bold'>{data === undefined ? "Veri Bekleniyor" : data.cases}</span>
              </div>
              <div className='col-10 row-light d-flex justify-content-between py-3 px-3 rounded-1 mt-2'>
                <span className='text-light fw-bold'>HASTA SAYISI</span>
                <span className='text-light fw-bold'>{data === undefined ? "Veri Bekleniyor" : data.patients}</span>
              </div>
              <div className='col-10 row-dark d-flex justify-content-between py-3 px-3 rounded-1 mt-2'>
                <span className='text-light fw-bold'>VEFAT SAYISI</span>
                <span className='text-light fw-bold'>{data === undefined ? "Veri Bekleniyor" : data.deaths}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
