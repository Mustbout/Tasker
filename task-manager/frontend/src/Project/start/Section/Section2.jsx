import React from 'react'

export default function Section2() {
  return (
    <div>
        <section className=" w-full">
                        <div>
                            <div className="container py-20">
                                <div className="flex flex-col md:flex-col items-center z-20 md:flex-row">
                                    <div className=" text-center">
                                        <h1 className="title">
                                            <span className="flex block justify-center">
                                                <img
                                                    className="mx-3"
                                                    src="public/image/Rectangle16.png"
                                                    alt=""
                                                />
                                                Explore & Learn
                                            </span>
                                        </h1>
                                        <p className=" leading-relaxed mb-10 ">
                                            Exploring and learning about task
                                            managers is essential for optimizing
                                            productivity. Task managers come in
                                            various forms, such as standalone
                                            apps or integrated software suites.
                                            Popular options include Todoist,
                                            Microsoft To Do, Trello, Asana, and
                                            Notion. Users should research key
                                            features, experiment with different
                                            platforms, and stay updated on best
                                            practices to find the most suitable
                                            solution for their needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}
