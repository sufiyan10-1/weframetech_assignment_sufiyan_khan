import Image from 'next/image'
import React from 'react'

function page() {

    const pendingQuestions = [
        { logo: "phoenix_barker.png", name: "Phoenix Baker", username: "@phoenix", time: "5min ago", question: "What are the requirements for opening a new store?" },
        { logo: "koray_okumus.png", name: "Koray Okumus", username: "@koray", time: "4hr ago", question: "How do I manage inventory effectively?" },
    ]

    return (
        <div className='flex w-screen flex-col sm:flex-row'>
            {/* left section of Pending Questions */}
            <div className='bg-white p-4 rounded-2xl w-full h-full sm:w-[360px] sm:h-[291px]'>
                <div className='flex items-center justify-between border-b border-gray-200 pb-2.5'>
                    <h3 className='text-xl font-bold '>Pending Questions</h3>
                    <p class="text-blue-700 text-sm bg-gray-100 border rounded-lg px-1">02</p>

                </div>

                <div>
                    <ul className="space-y-3 mt-4">
                        {pendingQuestions.map((profile, id) => (
                            <li key={id} className="py-3.5 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className='bg-[#2FBDFF] h-2 w-2 rounded-full'></div>
                                        <div className="relative ">
                                            <Image
                                                src={`/avatars/${profile.logo}`}
                                                height={40}
                                                width={40}
                                                alt="Prospect Leads logo"
                                                className="rounded-full"
                                            />
                                            <div className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <p className="text-[15px] text-[#475467] font-bold">{profile.name}</p>
                                            <p className="text-[14px] text-[#475467]">{profile.username}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className=" text-[15px] text-[#475467]">
                                            {profile.time}
                                        </p>
                                    </div>
                                </div>
                                <p className='mt-2 ml-5 text-sm text-[#475467]'>{profile.question}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* right section of chatbot */}
            <div className='bg-gray-100 flex flex-col justify-center items-center gap-5 sm:gap-12  w-full h-full p-14'>

                <Image
                    src="/images/chatBot_logo.png"
                    height={80}
                    width={90}
                    alt='chat bot logo'
                />
                <h1 className='sm:text-4xl text-lg font-semibold'>Welcome to the AI Chat Assistant</h1>
                <div className="relative w-40 sm:w-2xl">
                    <input
                        type="text"
                        placeholder="Ask your question here.."
                        className="bg-white w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                    />
                    <button name='sendMessage' aria-label="Send Message" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default page
