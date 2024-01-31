'use client'

import Contents from './modules/Contents'
import Credits from './modules/Credits'
import Details from './modules/Details'
import Editions from './modules/Editions'
import Header from './modules/Header'
import Me from './modules/Me'
import Modal from './modules/Modal'
import Background from './modules/background'
import { useEffect, useState } from 'react'
import EditionsMobile from './modules/EditionsMobile'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast';

const serviceID = "service_pobltqj"
const templateID = "template_tfqzzo8"

export default function Home() {

  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init("XPyA6PTt__gM5eBFZ")
  }, [])

  const onSendClick = async (data) => {
    const { recipient, to_name, message } = data
    try {
      if (recipient == undefined || to_name == undefined) {
        toast.error('Algún campo no esta relleno!', {
          style: { backgroundColor: "#FEE4E1", color: "#3b3b3f", fontWeight: "500" },
          className: '',
          iconTheme: {
            primary: '#FF4027',
            secondary: "#FFF",
          },
        })
        return
      }
      setLoading(true)
      await emailjs.send(serviceID, templateID, data)
      setLoading(false)
      setModal(false)
      toast.success('Email enviado!', {
        style: { backgroundColor: "#B6EBCE", color: "#3b3b3f", fontWeight: "500" },
        className: '',
        iconTheme: {
          primary: '#03AC58',
          secondary: "#FFF",
        },
        duration: 3000
      })
    } catch (error) {
      console.log(error)
      toast.error('Algo no esta funcionando...Por favor, contácta conmigo por email', {
        style: { backgroundColor: "#FEE4E1", color: "#3b3b3f", fontWeight: "500" },
        className: '',
        iconTheme: {
          primary: '#FF4027',
          secondary: "#FFF",
        },
      })
    }
  }

  return (
    <>
      <Toaster />
      {loading &&
        <div className="flex justify-center items-center fixed w-screen h-screen z-[1500]">
          <div className="w-20 absolute z-[15001]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#90FFCA" stroke="#90FFCA" stroke-width="2" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#90FFCA" stroke="#90FFCA" strokeWidth="2" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#90FFCA" stroke="#90FFCA" stroke-width="2" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
          </div>
          <div className="w-screen h-screen absolute bg-[#16281f] opacity-60">
          </div>
        </div>}
      {modal && !loading && <Modal onSend={(data) => onSendClick(data)} onCancel={() => setModal(false)} />}
      <Background />
      <div className='px-4 py-8 lg:px-48 flex flex-col lg:gap-24 gap-16'>
        <Header onJoin={() => setModal(true)} />
        <Details />
        <Contents />
        <div className='relative z-50'>
          <Editions onJoin={() => setModal(true)} />
          <EditionsMobile onJoin={() => setModal(true)} />
        </div>
        <Me />
        <Credits />
      </div>
    </>
  )
}
