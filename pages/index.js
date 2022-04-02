import Head from "next/head";
import Image from "next/image";

import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useHandle } from "../context/HandleContext";

import bg from "../assets/bg.png";
import leftbg from "../assets/leftbg.png";
import Landing from "../Components/Landing";
import Footer from "../Components/Footer";

export default function Home() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const { isDark, setDark } = useHandle();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }
  async function handleOnSubmit(event) {
    event.preventDefault();

    const data = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify({
        image: imageSrc,
      }),
    }).then((r) => r.json());

    setUploadData(data.info.ocr.adv_ocr.data[0].textAnnotations[0].description);
    console.log(uploadData);
  }

  return (
    //   <form  method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
    //   <p>
    //     <input type="file" name="file" />
    //   </p>

    //   <img src={imageSrc} />

    //   {imageSrc && !uploadData && (
    //     <p>
    //       <button>Upload Files</button>
    //     </p>
    //   )}

    //   {uploadData && (
    //    <textarea  rows="4" cols="50">
    //    {uploadData}
    //    </textarea>
    //   )}

    // </form>

    <>
      <Head>
        <title>Next</title>
      </Head>
      <body className={isDark ? "dark" : ""}>
        <main className='dark:bg-[#121212] ease-linear duration-200 '>
          <NavBar />
          <Landing />
          <div className='w-full h-[100vh] flex md:flex-row flex-col z-10 '>
            <div className='md:block hidden absolute'>
              <Image
                className='z-[0] w-screen h-screen dark:opacity-70 opacity-100 md:hidden absolute ease-linear duration-2000'
                alt='leftbg'
                src={bg}
                height={600}
              />
            </div>

            <div className='flex flex-col justify-center items-center h-full md:w-[40%] w-full'>
              <div className=' ease-linear duration-200 max-w-4xl z-10 text-black drop-shadow-lg  dark:text-white md:text-[5rem] text-4xl font-extrabold text-center leading-[55px] md:leading-[85px]'>
                <span className='text-[#3dda84]'>React</span> Native
              </div>
              <div className=' ease-linear duration-200 max-w-3xl text-center mt-12 text-lg dark:text-white dark:opacity-70 px-8'>
                Next.js gives you the best developer experience with all the
                features you need for production: hybrid static & server
                rendering, TypeScript support, smart bundling, route
                pre-fetching, and more. No config needed.
              </div>
              <button className='mt-8 relative inline-flex drop-shadow-lg items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br   from-[#0B685A] to-[#3DDA84] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:scale-[0.9] ease-linear duration-100'>
                <span className='px-14 py-2.5 transition-all ease-linear duration-100 bg-white dark:bg-[#121212] rounded-md group-hover:bg-opacity-0 text-md font-bold tracking-widest'>
                  TRY
                </span>
              </button>
            </div>
            <div className='flex justify-center items-center h-full md:w-[60%] w-full '>
              <div className=' w-full md:mr-5 mx-5 h-[80%] flex flex-col backdrop-blur-xl bg-[rgba(256,256,256,0.5)] dark:bg-[rgba(0,0,0,0.5)] rounded-2xl overflow-hidden drop-shadow-xl shadow-black ease-linear duration-200'>
                <div className='ease-linear duration-200 flex flex-row h-8 w-full items-center bg-slate-100 dark:bg-[#252525]'>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FF605C]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FFBD44]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#00CA4E]'></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='w-full h-[100vh] flex md:flex-row-reverse flex-col z-10'>
            <div className='md:block hidden absolute'>
              <Image
                className='z-[0] w-screen h-screen dark:opacity-70 opacity-100 md:hidden absolute ease-linear duration-2000'
                alt='leftbg'
                src={leftbg}
                height={600}
              />
            </div>

            <div className='flex flex-col justify-center items-center h-full md:w-[40%] w-full'>
              <div className=' ease-linear duration-200 max-w-4xl z-10 text-black drop-shadow-lg  dark:text-white md:text-[5rem] text-4xl font-extrabold text-center leading-[55px] md:leading-[85px]'>
                <span className='text-[#3dda84]'>React</span> Native
              </div>
              <div className=' ease-linear duration-200 max-w-3xl text-center mt-12 text-lg dark:text-white dark:opacity-70 px-8'>
                Next.js gives you the best developer experience with all the
                features you need for production: hybrid static & server
                rendering, TypeScript support, smart bundling, route
                pre-fetching, and more. No config needed.
              </div>
              <button className='mt-8 relative inline-flex drop-shadow-lg items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br   from-[#0B685A] to-[#3DDA84] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white active:scale-[0.9] ease-linear duration-100'>
                <span className='px-14 py-2.5 transition-all ease-linear duration-100 bg-white dark:bg-[#121212] rounded-md group-hover:bg-opacity-0 text-md font-bold tracking-widest'>
                  TRY
                </span>
              </button>
            </div>
            <div className='flex justify-center items-center h-full md:w-[60%] w-full '>
              <div className=' w-full md:ml-5 mx-5 h-[80%] flex flex-col backdrop-blur-xl bg-[rgba(256,256,256,0.5)] dark:bg-[rgba(0,0,0,0.5)] rounded-2xl overflow-hidden drop-shadow-xl shadow-black ease-linear duration-200'>
                <div className='ease-linear duration-200 flex flex-row h-8 w-full items-center bg-slate-100 dark:bg-[#252525]'>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FF605C]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#FFBD44]'></div>
                  <div className='h-4 w-4 ml-2 rounded-full bg-[#00CA4E]'></div>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </body>
    </>
  );
}
