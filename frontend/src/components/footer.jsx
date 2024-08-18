import React from "react";
import { SiAbstract } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-white py-10 px-16 flex justify-between rounded-b-2xl">
      <div>
        <h3 className="text-xl font-bold">Abstract</h3>
        <ul className="mt-4">
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Resources</h3>
        <ul className="mt-4">
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Community</h3>
        <ul className="mt-4">
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="mt-4">
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul>
            <li>info@abstract.com</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-end">
        <SiAbstract size={30} />
        <p className="mt-4">&copy; Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
