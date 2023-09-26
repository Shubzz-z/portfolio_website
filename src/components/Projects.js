import React from 'react'

const Projects = () => {
    const projects=[
        {
            id:1,
            src:'https://source.unsplash.com/500x300/?nature,water'
        },
        {
            id:2,
            src:'https://source.unsplash.com/500x300/?water,nature'
        },
        {
            id:3,
            src:'https://source.unsplash.com/500x300/?nature,project'
        },
        {
            id:4,
            src:'https://source.unsplash.com/500x300/?code,html'
        },
        {
            id:5,
            src:'https://source.unsplash.com/500x300/?elon,mask'
        },
        {
            id:6,
            src:'https://source.unsplash.com/500x300/?time,pass'
        },
    ]
    return (
        <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-0">
                    {projects.map(({id,src})=>(
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects