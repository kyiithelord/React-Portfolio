/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */


import React from 'react'

const aboutItems = [
   { 
        label: 'Projects done',
        number:7
    },
    {
        label: 'Years of experience',
        number: 2  
    }
]

const About = () => {
  return (
    <section id='about' className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
                    Welcome! <br /> I&apos;m Thet Zin Kyaw,a dedicated and professional Software Developer passionate about crafting responsive and dynamic web applications that truly make an impact. I specialize in creating seamless user experiences, blending elegant designs with robust backend systems to deliver solutions that are scalable, efficient, and user-centric.
                    <br />
                    Whether it's developing custom features, integrating APIs, or enhancing website performance, I aim to exceed expectations and contribute to the success of every project I work on. Beyond technical skills, I value collaboration, creativity, and a growth-oriented mindset, making every step of the development process meaningful.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                    {
                        aboutItems.map(({label,number},key) => (
                            <div key={key} >
                                <div className="flex items-center md:mb-2 ">
                                    <span className="text-2xl font-semibold md:text-4xl"> {number} </span>
                                    <span className="text-sky-400 font-semibold md:text-3xl"> + </span>
                                </div>
                                <div className="text-sm text-zinc-400 "> {label} </div>
                            </div>
                        ) )
                    }
                    <img src="./img/logo_svg.jpg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px] rounded-lg" />

                </div>
            </div>
        </div>
    </section>
  )
}

export default About