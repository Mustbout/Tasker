import React from 'react'
import Embark from '../Embark '

export default function Section7() {
  return (
    <div>
              <section className=" flex mb-10 mt-10  m-0 ">
                        <div className="w-full flex flex-col   bg-gray-50 border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                            <img
                                className="object-cover rounded-t-lg md:rounded-none  md:rounded-s-lg max-w-100 m-5"
                                src="public/image/Rectangle24.png"
                                alt=""
                            />
                            <div className="flex flex-col m-8 my-16  justify-between p-4 leading-normal ">
                                <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                    Fonctionnalités Principales de l application
                                </h5>
                                <span className=" font-bold text-gray-500">
                                    L'application propose diverses
                                    fonctionnalités clés, notamment la création
                                    facile de tâches avec des détails tels que
                                    le nom, la description et l'échéance. Les
                                    tâches peuvent être organisées par priorité,
                                    permettant ainsi aux utilisateurs de se
                                    concentrer sur ce qui est le plus important
                                    en premier.
                                </span>
                                <span className=" font-bold text-gray-500">
                                    Un suivi de l'état des tâches est également
                                    offert, avec des options pour marquer les
                                    tâches comme en cours, planifiées ou
                                    terminées. Des notifications sont
                                    disponibles pour rappeler aux utilisateurs
                                    les tâches à venir, les aidant ainsi à
                                    respecter les échéances et à ne rien
                                    oublier.
                                </span>
                                <span className=" font-bold text-gray-500">
                                    De plus, l'application permet une
                                    personnalisation poussée de l'expérience
                                    utilisateur, notamment en offrant la
                                    possibilité de créer des catégories,
                                    d'ajouter des étiquettes et de choisir des
                                    couleurs pour organiser et différencier les
                                    tâches.
                                </span>
                                <span className=" font-bold text-gray-500">
                                    Dans l'ensemble, cette application vise à
                                    simplifier la gestion des tâches
                                    quotidiennes, à améliorer la productivité et
                                    à garantir que les utilisateurs restent
                                    organisés et sur la bonne voie.
                                </span>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section className=" flex mb-10 mt-10  m-0 ">
                        <div className="w-full flex flex-col   bg-gray-50 border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                            <img
                                className="object-cover rounded-t-lg md:rounded-none  md:rounded-s-lg m-5"
                                src="public/image/Rectangle32.png"
                                alt=""
                            />
                            <div className="flex flex-col  justify-between p-4 leading-normal w-full ">
                                <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
                                    Embark on Your Productivity Journey
                                </h5>
                                <Embark
                                    content={
                                        "Get ready to embark on your productivity journey with TASK. We offer a platform for task management enthusiasts of all levels to organize, prioritize, and conquer their daily challenges with ease. Whether you're a seasoned pro or just starting out, TASK has everything you need to turn your to-do list into a roadmap for success."
                                    }
                                />
                                <Embark
                                    content={
                                        " Diverse Tasks: Explore a wide array of tasks catering to various projects and personal goals, ensuring there's something for everyone no matter their expertise level.. "
                                    }
                                />
                                <Embark
                                    content={
                                        " Expert Guidance: Receive guidance directly from experienced task managers who are eager to share their insider tips and strategies for maximizing productivity. "
                                    }
                                />
                                <Embark
                                    content={
                                        " Interactive Management: Engage in interactive sessions where you can ask questions, seek advice, and receive real-time feedback on your task management skills, helping you refine your approach and achieve your objectives more effectively. "
                                    }
                                />
                                <button
                                    type="button"
                                    className=" text-white bg-gray-700 w-32  mt-5 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded text-sm px-8 py-2 text-center ml-6"
                                >
                                    <div className=" mx-1 ">Sign in</div>
                                </button>
                            </div>
                        </div>
                    </section>
    </div>
  )
}
