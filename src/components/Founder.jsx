import React, { useEffect, useState } from "react";
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import cmpny_logo from "./SAS LOGO 2.png"
import logo1 from './Original_logo.jpg'
import mama from './mamaPhoto.jpeg'

const Founder = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [readMore, setReadMore] = useState(false);
    const [companyData] = useState(`
    <p>
    <b> Imran Nagori Sultana – Founder, Shrooq Al Shadi </b> <br/> <br/>

    Imran Nagori Sultana is a passionate entrepreneur based in Mabela and Al Amrat, Oman.
    He founded Shrooq Al Shadi, a company specialized in Gypsum Décor manufacturing and sales.
    With a focus on quality, creativity, and customer satisfaction, his mission is to deliver elegant and durable designs that add beauty to homes and offices. <br /><br />

    His vision:
   “To bring unique and lasting décor that enhances every space.”
   <br /><br />

 <div>
    <h1>🌟 النسخة العربية</h1>
    
    <h2>عمران ناغوري سلطانه – مؤسس شركة شروق الشادي</h2>
    
    <p>
      عمران ناغوري سلطانه رجل أعمال شغوف يقيم في المعبيلة و العامرات – سلطنة عمان.<br>
      أسس شركة شروق الشادي المتخصصة في تصنيع وبيع ديكور الجبس.<br>
      يركّز في عمله على الجودة والإبداع ورضا العملاء، ويهدف إلى تقديم تصاميم أنيقة ومتينة تضيف لمسة جمال للمنازل والمكاتب.
    </p>

    <h3>رؤيته:</h3>
    <blockquote>
      "تقديم ديكور مميز ودائم يزيد من جمال كل مكان."
    </blockquote>
  </div>
    </p>
  `);

    // useEffect(() => {
    //     AOS.init({ duration: 1000 });

    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //     };

    //     window.addEventListener("resize", handleResize);
    //     handleResize();

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (
        <section id="about">
            <div className="text-center mt-10">
                <h2 className="text-4xl font-bold text-gray-800 relative inline-block">

                    About The Founder
                    <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
                </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-50 py-16">
                <div
                    data-aos={isMobile ? "fade-up" : "zoom-in-left"}
                    className="w-full md:w-1/2"
                >
                    <img
                        src={mama}
                        alt="Company Building"
                        className="rounded-lg shadow-lg md:w-[500px] md:h-[500px]"
                    />
                </div>
                <div
                    data-aos={isMobile ? "fade-up" : "fade-right"}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <div className="flex gap-5">
                     
                    </div>
                  
                    <h2 className="text-3xl font-bold relative inline-block mt-10">
                        <span className="text-red-500 absolute -left-4 top-1/4 -translate-y-1/2 w-4 h-4 border-t-4 border-l-4 border-red-500"></span>
                        Imran Nagori 
                        <span className="text-red-500 absolute -right-4 top-3/4 -translate-y-1/2 w-4 h-4 border-b-4 border-r-4 border-red-500"></span>
                    </h2>

                    {/* Render HTML with line breaks using dangerouslySetInnerHTML */}
                    <div
                        className={`mt-4 text-gray-600 text-justify ${(!readMore) && "line-clamp-[10]"}`}
                        dangerouslySetInnerHTML={{ __html: companyData }}
                    />

                    <div data-aos={isMobile ? "flip-up" : "zoom-in"} className="mt-6">
                        <Button
                            type="primary"
                            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full shadow-lg text-white font-semibold flex items-center gap-2"
                            onClick={() => setReadMore(!readMore)}
                        >
                            Read {readMore ? "Less" : "More"} →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
