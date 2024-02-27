"use server";
import React from "react";
import logo from "@/public/itrak-logo.svg";
import Facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/Linkedin.svg";
import youtube from "@/public/youtube.svg";
import twitter from "@/public/twitter.svg";
import iso from "@/public/Iso.svg";
import dqs from "@/public/dqs.svg";
import clutch from "@/public/clutch.svg";
import clutch2 from "@/public/clutch2.svg";
import upwork from "@/public/upwork.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Footer = (props: Props) => {
  return (
    // <footer className="bg-black h-[100vh] w-full px-container grid lg:grid-cols-2 max-sm:grid-col-1 text-slate-100" >
    //   <div className="flex mx-auto">
    //     <Image src={logo} alt={"logo"} ></Image>
    //   </div>
    //   <div className="flex justify-center font-semibold my-auto">
    //     <div className="text-4xl">We are an enterprise software development company that is inspired by the future</div>
    //   </div>
    //   <div className="flex flex-col m-auto ">
    //     <div>Office:</div>
    //     <div className="text-slate-400">Aliso Viejo, CA</div>
    //     <div className="text-slate-400">Warsaw,PL</div>
    //     <div className="text-slate-400">Kyiv,UA</div>
    //   </div>
    //   <div className="flex flex-wrap h-container justify-center  flex-col gap-3">
    //     <div className="flex flex-col"><div>Hello@itrexgroup.com </div><div>+12134367785</div></div>
    //     <div className="flex gap-12 items-center">
    //         <div>
    //         <Link href={"#"}><Image src={Facebook} alt={"facebook"}/></Link>
    //         </div>
    //         <div>
    //         <Link href={"#"}><Image src={instagram} alt={"facebook"}/></Link>
    //         </div>
    //         <div>
    //         <Link href={"#"}><Image src={youtube} alt={"facebook"}/></Link>
    //         </div>
    //         <div>
    //         <Link href={"#"}><Image src={linkedin} alt={"facebook"}/></Link>
    //         </div>
    //         <div>
    //         <Link href={"#"}><Image src={twitter} alt={"facebook"}/></Link>
    //         </div>
            
    //     </div>
        
    //   </div>
    //   <div className="flex flex-col m-auto justify-center align-center text-slate-400">
    //     <div><Link href={"#"}>Privecy Policy</Link></div>
    //     <div>@2024 Itrex Group</div>
    //   </div>
    //   <div className="flex flex-row gap-3">
    //   <Image src={iso} alt={"logo"} ></Image>
    //   <Image src={dqs} alt={"logo"} ></Image>
    //   <Image src={clutch} alt={"logo"} ></Image>
    //   <Image src={clutch2} alt={"logo"} ></Image>
    //   <Image src={upwork} alt={"logo"} ></Image>
    //   <Image src={iso} alt={"logo"} ></Image>
    //   </div>
    // </footer>
    <footer className="bg-black h-[100vh] w-full px-container grid lg:grid-cols-2 max-sm:grid-col-1 max-sm:gap-24 text-slate-100">
  <div className="flex mx-auto">
    <Image src={logo} alt={"logo"}></Image>
  </div>
  <div className="flex justify-center font-semibold my-auto ">
    <div className="text-4xl">We are an enterprise software development company that is inspired by the future</div>
  </div>
  <div className="flex flex-col m-auto text-center lg:text-left">
    <div>Office:</div>
    <div className="text-slate-400">Aliso Viejo, CA</div>
    <div className="text-slate-400">Warsaw,PL</div>
    <div className="text-slate-400">Kyiv,UA</div>
  </div>
  <div className="flex flex-wrap h-container my-auto justify-center lg:justify-start flex-col gap-3">
    <div className="flex flex-col">
      <div>Hello@itrexgroup.com</div>
      <div>+12134367785</div>
    </div>
    <div className="flex gap-12 items-center">
      <div><Link href={"#"}><Image src={Facebook} alt={"facebook"} /></Link></div>
      <div><Link href={"#"}><Image src={instagram} alt={"facebook"} /></Link></div>
      <div><Link href={"#"}><Image src={youtube} alt={"facebook"} /></Link></div>
      <div><Link href={"#"}><Image src={linkedin} alt={"facebook"} /></Link></div>
      <div><Link href={"#"}><Image src={twitter} alt={"facebook"} /></Link></div>
    </div>
  </div>
  <div className="flex flex-col m-auto text-center lg:text-left">
    <div><Link href={"#"}>Privacy Policy</Link></div>
    <div>@2024 Itrex Group</div>
  </div>
  <div className="flex flex-row gap-3 justify-center lg:justify-start">
    <Image src={iso} alt={"logo"}></Image>
    <Image src={dqs} alt={"logo"}></Image>
    <Image src={clutch} alt={"logo"}></Image>
    <Image src={clutch2} alt={"logo"}></Image>
    <Image src={upwork} alt={"logo"}></Image>
    <Image src={iso} alt={"logo"}></Image>
  </div>
</footer>

  );
};

export default Footer;
