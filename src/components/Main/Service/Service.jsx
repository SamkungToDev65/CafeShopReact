import React from 'react';
import { PiCoffeeFill } from "react-icons/pi";
import { MdHandshake } from "react-icons/md";
import { FaMapMarkerAlt } from 'react-icons/fa';

function Service() {
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">
            <div className='bg-white'>
                <div className="container mx-auto py-16 text-center ">
                    <h2 className="text-4xl mb-12 font-bold text-[#352926]">Out of Service</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex flex-col text-[#352926] items-center text-center w-full sm:w-1/2  md:w-1/4">
                            <FaMapMarkerAlt className="text-5xl text-[#352926] mb-4" /> {/* ไอคอนใหญ่ขึ้น */}
                            <h3 className="text-xl font-bold mb-2">Location</h3>
                            <p className="text-center mx-2 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vitae placeat maiores iusto vel dicta illo ratione reiciendis vero voluptate?</p>
                        </div>
                        <div className="flex flex-col text-[#352926] items-center text-center w-full sm:w-1/2  md:w-1/4">
                            <PiCoffeeFill className="text-5xl text-[#352926] mb-4" />
                            <h3 className="text-xl font-bold mb-2">Products</h3>
                            <p className="text-center mx-2 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, omnis ratione? Sapiente, porro. Maxime repellat est cupiditate omnis aut? Rerum?</p>
                        </div>
                        <div className="flex flex-col text-[#352926] items-center text-center w-full sm:w-1/2 md:w-1/4">
                            <MdHandshake className="text-5xl text-[#352926] mb-4" />
                            <h3 className="text-xl font-bold mb-2">Franchise</h3>
                            <p className="text-center mx-2 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique error magnam ut. Eum aspernatur blanditiis omnis vel magni iure sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
