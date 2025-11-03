
"use client"

import React, { useState } from 'react'

import image from '@/Images/slide2.jpg';

import Image from 'next/image'

function About() {

  const [data,setData]=useState("Nagar")

  return (
    <div>
      <h1 className='text-center mt-5 mb-5'>Hi i am About Pages</h1>

      <img src="slide1.jpg" width={"100%"} alt="" />

      <hr />

      <img src={image.src} width={"100%"} alt="" />

      <hr />

      <Image src={image.src} width={500} height={250}></Image>

      <hr />

      <Image src='https://adocmedi.in/Frontend/assets/img/shlok.jpg' alt="Picture of the author"
        width={500}
        height={300} />

    </div>
  )
}

export default About