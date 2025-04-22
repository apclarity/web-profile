import React from 'react'

const CardWork = () => {
    const listPorto = [
        {
            title: 'Jobhun: Talent Expert and Career Development',
            stack: `✦︎ Built with Vue.js and Vite<br/>✦︎ Styled using Tailwind CSS with some animations<br/>✦︎ Used Pinia for state management<br/>✦︎ Simplified idea submission with a clean, intuitive design`,
            img_url: '/jobhun.png'
        },
        {
            title: 'This Personal Website',
            stack: `✦︎ Built with React and Vite for fast and scalable development<br/>✦︎ Designed responsive layouts using Tailwind CSS<br/>✦︎ Enhanced user experience with smooth animations using Framer Motion<br/>✦︎ Used Lanis for smooth exploring`,
            img_url: '/jobhun.png'
        },
    ]
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-10 mx-auto">
                {listPorto.map(({ title, stack, img_url }, index) => (
                    <div key={index} className="flex justify-center">
                        <div class="flex flex-col h-full max-w-sm hover:shadow-2xl border-8 border-blue-700 duration-200">
                            <a href="#">
                                <img class="rounded-t-lg" src={img_url} alt="portfolio" />
                            </a>
                            <div class="flex flex-col flex-grow p-5 bg-blue-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                                </a>
                                <div class="mb-3 font-normal text-white" dangerouslySetInnerHTML={{ __html: stack }}></div>
                                {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a> */}
                            </div>
                        </div>

                        {/* <div className="">
                            <img src={img_url} alt="portfolio"
                                className="w-[400px]"
                            />
                        </div> */}

                        {/* <div className="p-2">

                            <div className="mt-10 font-medium text-2xl">
                                <a href="https://jobhun.id/" className="font-bold hover:text-blue-700 hover:underline" target="_blank">Jobhun</a>: Talent Expert <br />
                                <div className="font-bold">
                                    <div
                                        className="text-xl"
                                        dangerouslySetInnerHTML={{ __html: stack }}
                                    ></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardWork