import header1 from './images/header.webp';
import header2 from './images/header2.jpg';
import header3 from './images/port7.jpg'
//portifolio
import port1 from './images/port1.jpeg';
import port2 from './images/port2.jpeg';
import port3 from './images/port3.jpeg';
import port4 from './images/port4.jpg';
import port5 from  './images/port5.jpg';
import port6 from  './images/port6.jpg';
import port7 from './images/p3.jpg';

export const navbar = [
    {
        id:1,
        name:'Home',
        route:'#head'
    },
    {
        id:2,
        name:'About',
        route:'#creative'
    },
    {
        id:3,
        name:'Services',
        route:'#service'
    },
    {
        id:4,
        name:'Portifolio',
        route:'#portfolio'
    },
    {
        id:5,
        name:'Contact',
        route:'#contact'
    },
]

export const headers = [
    {
        id:1,
        title1:'We can change',
        title2:"your digital world",
        desc:'Bold enough to blow a hole in your next marketing campaign',
        image: header1,
    },
    {
        id:2,
        title1:'You need',
        title2:"a good partner",
        desc:'Let us help you realise your true potential',
        image: header2,
    },
    {
        id:3,
        title1:'Shoot for',
        title2:" the hoop!",
        desc:'Aiming low is not an option for us',
        image:header3,
    },
]

export const portfolio = [
    {
        id:1,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port1,  
    },
    {
        id:2,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port2,  
    },
    {
        id:3,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port3,  
    },
    {
        id:4,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port4,
    },
    {
        id:5,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port5,
    },
    {
        id:6,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port6,
    },
    {
        id:7,
        title:"PORTIFOLIO TITLE",
        desc:"Branding, Web Design",
        imageUrl:port7,
    },
]

export const extras = [
    {
        number:342,
        desc: 'Cups of coffee'
    },
    {
        number:756,
        desc: 'Bicycle kilometres'
    },
    {
        number:419,
        desc: 'Brainstorm sessions'
    },
    {
        number:284,
        desc: 'Video hours'
    },
]

// import React from 'react'
// import { useInView } from 'react-hook-inview'

// const Component = () => {
//   const [ref, isVisible] = useInView({
//     threshold: 1,
//   })

//   return <div ref={ref}>{isVisible ? 'Hello World!' : ''}</div>
// }