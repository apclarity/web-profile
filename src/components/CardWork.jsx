import React from 'react'

const CardWork = () => {
    const listPorto = [
        {
            title: 'Jobhun: Talent Expert and Career Development',
            stack: `✦︎ Built with Vue.js and Vite<br/>✦︎ Styled using Tailwind CSS with some animations<br/>✦︎ Used Pinia for state management<br/>✦︎ Simplified idea submission with a clean, intuitive design`,
            img_url: '/jobhun.png',
            url: 'https://jobhun.id/'
        },
        {
            title: 'This Personal Website',
            stack: `✦︎ Built with React and Vite for fast and scalable development<br/>✦︎ Designed responsive layouts using Tailwind CSS<br/>✦︎ Enhanced user experience with smooth animations using Framer Motion<br/>✦︎ Used Lenis for smooth scrolling`,
            img_url: '/web-profile.png',
            url: ''
        },
    ]
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 mx-auto">
                {listPorto.map(({ title, stack, img_url, url }, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="flex flex-col h-full max-w-sm hover:shadow-2xl border-8 border-blue-700 duration-200">
                            <a href={url || "#"} target={url ? "_blank" : "_self"}>
                                <img className="rounded-t-lg" src={img_url} alt="portfolio" />
                            </a>
                            <div class="flex flex-col flex-grow p-5 bg-blue-700">
                                <a href={url || "#"} target={url ? "_blank" : "_self"}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                                </a>
                                <div className="mb-3 font-normal text-white" dangerouslySetInnerHTML={{ __html: stack }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardWork