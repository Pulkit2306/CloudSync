/* eslint-disable no-unused-vars */
import React from "react";
import { NavigationComponent } from "../../components/HomePageComponents/index"
import { Container } from 'react-bootstrap'
import ImageDMS from '../../assets/LogoImage.png'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div>
      <NavigationComponent />
      <Container className='text-center'>
        <div className='HomeContainer'>
          <div className='FlexHome'>
            <div className='DMSImage m-5'>
              <img width='100%' height='20%' src={ImageDMS} />
            </div>
            <h1 className='p-3'>Cloud Document Management System Software</h1>
            <div className='HomeContent1 p-3'>
              <h1>The Most User-Friendly Document Management System</h1>
              <p>
                Keeping your paperless office documents only on your computer or local server poses the risks of hard drive failure, fire, flood or burglary. And what if you want to access one of those important files away from the office? Meet Folderit. The ultimate online document management system for any organization, the most user-friendly DMS in the world! Amazingly easy to use, highly secure and affordable EDMS.
              </p>
            </div>
          </div>
          <div className='HomeContent2'>
            <h1>What Does File Management System Mean?</h1>
            <p>
              A file management system is used for file maintenance (or management) operations. It is is a type of software that manages data files in a computer system.
              A file management system has limited capabilities and is designed to manage individual or group files, such as special office documents and records. It may display report details, like owner, creation date, state of completion and similar features useful in an office environment.
              A file management system is also known as a file manager.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage;