import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={150}
                    height={18}
                    className="object-contain"/>
                <p className="text-base text-grey-700">
                     VehiView, 2023 <br />
                    All rights reserved &copy;
                </p>
            </div>
            <div className="footer__links">
                {footerLinks.map((el, index) => {
                    return (
                        <div key={index} className="footer__link">
                            <h3 className="font-bold">{el.title}</h3>
                            {el.links.map((ell, index) => (
                                <Link key={index} href={ell.url} className="text-grey-500">
                                    {ell.title}
                                </Link>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-grey-100 sm:px-16 px-6 py-10">
            <p>@ 2023 Vehi-View. All Rights Reserved</p>
            <div className="footer__copyrights-link">
                <Link className="text-grey-500" href="/">
                    Privacy Policy
                </Link>
                <Link className="text-grey-500" href="/">
                    Terms of Use
                </Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
