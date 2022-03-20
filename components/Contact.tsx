import React from "react";

const Contact = () => {
  return (
    <div className="my-24 text-white">
      <h1 className="text-4xl  text-center underline ">Get in Touch</h1>
      <div className="flex">
        <div className="p-5 ml-auto my-20 flex-col space-y-10">
          <input type="name" name="name" placeholder="Name"  className="block border-yellow-500 border-2 bg-transparent p-2 w-96" />
          <input type="email" name="email" placeholder="Email" className="block border-yellow-500 border-2 bg-transparent p-2 w-96" />
          <textarea name="messege" placeholder="Messege"className="block border-yellow-500 border-2 bg-transparent p-2 w-96"></textarea>
          <button className="bg-yellow-500 w-96 text-center text-black p-2 rounded-md">Submit</button>
        </div>
        <div className="w-1 h-80 bg-yellow-500 mt-10"></div>
        <div className="p-5 w-[50vw] my-20">
            <div className="">Phone</div>
            <div> Email</div>
            <div> Address</div>
            <div> Social Media</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
