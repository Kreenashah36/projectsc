import React from "react";
// import Logo from "@/public/logo1.svg";
import Image from "next/image";
import style from './marquee.module.css'
import Link from "next/link";
interface Props {}

const Marquee = (props: Props) => {
  return (
    <>
      <div className="bg-black text-white min-w-full overflow-hidden border-gray-200 w-full py-12">
        <div className={style.slidercontainer}>
          <div className={style.slidertext}>
            <Link href={'/ShopPage'}><Image src='/P&G.svg' alt="logo" width={100} height={100} ></Image></Link>
            <Link href={'/ShopPage'}><Image src='/WB.svg' alt="logo" width={100} height={100} ></Image></Link>
            <Link href={'/ShopPage'} className="my-auto"><Image src='/Teknav.svg' alt="logo" width={100} height={100} ></Image></Link>
            <Link href={'/ShopPage'} className="my-auto"><Image src='/turvo-logo.webp' alt="logo" width={200} height={200} ></Image></Link>
            <Link href={'/ShopPage'} className="my-auto"><Image src='/logo-white.webp' alt="logo" width={200} height={200} ></Image></Link>
            <Link href={'/ShopPage'} className="my-auto"><Image src='/FTS.png' alt="logo" width={150} height={150} ></Image></Link>
            <Link href={'/ShopPage'}><Image src='/P&G.svg' alt="logo" width={100} height={100} ></Image></Link>
            <Link href={'/ShopPage'}><Image src='/WB.svg' alt="logo" width={100} height={100} ></Image></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
