import React from 'react'

export default function Section4() {
  return (
    <div>
        <section className=" flex flex-col lg:flex-row mb-10 mt-10 justify-center items-center">
                        <div className=" mb-5">
                            <div className=" rounded-lg shadow md:max-w-xl">
                                <img
                                    src="public/image/ConsulterTach.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mx-2 px-10 py-10 ml-10">
                            <h5 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex flex-col ">
                                Follow your tasks
                            </h5>
                            <p className=" mb-4">
                                To follow your tasks effectively, create a clear
                                system tailored to your needs. Begin by listing
                                all tasks, then prioritize them based on urgency
                                or importance. Set deadlines and break down
                                complex tasks into smaller ones. Allocate
                                specific time slots in your schedule to work on
                                tasks and track progress regularly. Stay
                                flexible to accommodate changes and reflect on
                                your system to make improvements. This approach
                                will help you stay organized and productive in
                                managing your tasks.
                            </p>
                            <button
                                type="button"
                                className=" text-white bg-btn hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-8 py-2 text-center flex "
                            >
                                <div className=" mx-1">get started</div>
                            </button>
                        </div>
                    </section>
    </div>
  )
}
