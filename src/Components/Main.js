import React from 'react'

function Main() {
  return (
    <div>
      <section className='grid grid-flow-col p-10 space-x-16 justify-center items-center'>
        <div className="w-full">
          <img src="https://cdn.pixabay.com/photo/2016/11/11/20/06/buddha-1817647_640.png" alt="Yoga" className='w-full pl-11 animate-pulse'></img>
        </div>
        <div className='space-y-2 pl-14'>
          <h1 className="text-3xl font-bold">Hi, I am John</h1>
          <p className='text-pink-500'>Some Dev, Freelancer, Rounder</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt animi debitis optio esse harum nobis nihil sit ipsum error praesentium, a soluta id in cum officiis obcaecati illo necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, maxime natus? Nostrum minima vero totam quas sit velit magnam officia quisquam laborum nesciunt!</p>
        </div>
      </section>
      <section className=''>
        <div>
          <h1 className='text-center text-4xl font-bold'>Technologies I use</h1>
        </div>
        <div className='grid grid-cols-4 space-y-9 px-10 place-content-center place-items-center'>
          <div>
            <img className='w-44 hover:scale-[1.3] hover:text-rose-500 transition-all' src="https://www.svgrepo.com/show/473768/react.svg" alt="React js logo"></img>
          </div>
          <div>
            <img className='w-44' src="https://www.svgrepo.com/show/508921/java.svg" alt="java logo"></img>
          </div>
          <div>
            <img className='w-44' src="https://www.svgrepo.com/show/342350/vue-js.svg" alt="vue logo"></img>
          </div>
          <div>
            <img className='w-44 animate-bounce' src="https://www.svgrepo.com/show/409089/css3.svg" alt="Html logo"></img>
          </div>
          <div>
            <img className='w-44' src="https://www.svgrepo.com/show/512738/python-127.svg" alt="python"></img>
          </div>
          <div>
            <img className='w-44' src="https://www.svgrepo.com/show/503403/language-swift.svg" alt="swift"></img>
          </div>
        </div>
      </section>
      <section className='space-y-5 mt-8'>
        <div>
          <h1 className='text-3xl text-center font-bold'>Who am I</h1>
        </div>
        <div className='bg-black h-96 w-96 rounded-full mx-auto outline-blue-600 border-green-400 border-4 flex flex-col text-white justify-center pl-20'>
          <h1>Name: Someone</h1>
          <h1>Email: someone@under.com</h1>
          <h1>Tel: 1234592849</h1>
          <h1>Age: 102</h1>
          <h1>Experience: Java, Vue, Python</h1>
        </div>
      </section>
      <div className='relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L1440,64L1440,320L0,320Z"></path></svg>
        <div className='text-white text-base font-sans absolute bottom-0 left-[45%] top-[70%] flex flex-col'>
          <h2 >Develop By</h2>
          <h2>Someone Unknown</h2>
        </div>
      </div>

    </div>
  )
}

export default Main
