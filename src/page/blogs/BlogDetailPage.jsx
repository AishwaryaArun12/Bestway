import React from 'react';

const BlogDetailPage = () => {
    const project = {
        image: "image/blog1.png",
        title: "Mobile commerce explained: what's next",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        publishedDate: "January 1, 2024",
        lastUpdated: "June 1, 2024",
        content: {
            whatIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
            features: [
                "Feature Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Feature Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
                "FeatureDuis cursus, mi quis viverraornare,eros dolor interdumnulla.Feature Duis cursus, mi quis viverraornare, eros dolor interdum nulla.",
                "Feature Duis cursus,mi quis viverra ornare, eros dolor interdum nulla.Feature Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
                "Feature Duiscursus, mi quis viverrarnare, eros dolor interdum nulla. Feature Duiscursus, mi quis viverra ornare, eros dolor interdum nulla."
            ],
            types: "Loremipsum dolor sitamet, consectetur adipiscing elit. Suspendisse variusenim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsumdolo sit amet, consectetur adipiscing elitSuspendisse varius enim in eroselementum tristique. Duis cursus, mi quis viverra ornare, eros dolorinterdum nulla. Duis cursus, mi quis viverra ornare, eros dolor interdumnulla. Lorem ipsum dolor sit amet, consectetur adipiscingelit. Suspendisse varius enim in eros elementumtristique. Duis cursus, mi quis viverraornare, eros dolor interdum nulla. Duis cursus, miquis viverra ornare, eros dolor interdum nulla.hihiuu hiujoijo yiuioi tft6 rtyth fhjhik Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        }
    };

    return (
        <>
            <style>
                {`
                    .custom-bullets ul {
                        list-style: none;
                    }

                    .custom-bullets ul li {
                        position: relative;
                        color: #9CA3AF; 
                    }

                    .custom-bullets ul li::before {
                        content: '•';
                        color: #3D9970;
                        position: absolute;
                        left: -.5em; /* Increase to make room for larger bullet */
                        font-size: 2.5em; /* Increase bullet size */
                        line-height: 1em;
                    }
                `}
            </style>
            <div className="mt-40 font-bold p-2 sm:px-10 mb-5 md:mx-20">
                <div className="absolute top-[0vh] -left-[240px] w-[30%] h-[30vh] blurDiv bg-[#00FFFF]"></div>
                <div className="text-white mt-10">
                    <div className="relative p-6 sm:p-2 flex flex-col md:flex-row">
                        <div 
                            className="relative p-6 md:left-4 rounded-lg w-full md:w-1/2" 
                            style={{ 
                                minHeight: '450px', 
                                background: 'linear-gradient(230.89deg, rgba(218, 218, 218, 0.12) -94.34%, rgba(153, 151, 149, 0.12) 351%)', 
                                backgroundBlendMode: 'lighten' 
                            }}
                        >
                            <h1 className="pr-4 mt-6 text-4xl font-bold tracking-wider">{project.title}</h1>
                            <p className="pr-4 mt-8 text-2xl heading font-light leading-10">{project.description}</p>
                            <p className="pr-4 mt-8 text-xl heading font-light text-gray-300">Published Date: {project.publishedDate}</p>
                            <p className="pr-4 mt-2 text-xl heading font-thin text-gray-300">Last Updated: {project.lastUpdated}</p>
                        </div>
                        <div className="relative mt-10 md:mt-0 md:absolute md:top-10 md:right-6 md:w-1/2 md:h-96 overflow-hidden">
                            <img src={project.image} alt="blog" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                    <div className="p-6">
                        <section className="mt-20">
                            <h2 className="text-3xl font-semibold headingBold">What is Mobile Commerce</h2>
                            <p className="mt-4 font-thin poppinsSB leading-8 text-xl text-gray-400">{project.content.whatIs}</p>
                        </section>
                        <section className="mt-20 custom-bullets relative">
                            <h2 className="text-3xl font-semibold headingBold ">Features of Mobile Commerce</h2>
                            <ul className="mt-4">
                                {project.content.features.map((feature, index) => (
                                    <li key={index} className="ml-6 sm:ml-0 mt-6 font-thin text-xl leading-8 poppinsSB">{feature}</li>
                                ))}
                            </ul>
                            <div className="absolute top-[0vh] right-[0px] w-[100%] h-[80vh] blurDiv bg-[#00FFFF]"></div>
                        </section>
                        <section className="mt-20 relative">
                            <div className="absolute top-[0vh] left-[0px] w-[50%] h-[80vh] blurDiv bg-[#00FFFF]"></div>
                            <h2 className="text-3xl font-semibold headingBold">Types of Mobile Commerce</h2>
                            <p className="mt-8 mb-5 leading-8 tracking-wide font-thin text-xl text-gray-400 poppinsSB">{project.content.types}</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogDetailPage;
