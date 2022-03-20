import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="flex mt-12">
        <div className=" w-[40vw] h-[100vh] bg-red-300">image</div>
        <div className="w-[60vw] my-20 mx-20 text-white">
          <h1 className="text-4xl text-yellow-500 ">About Me</h1>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia at voluptas nemo, deleniti pariatur quis! Quia recusandae
            tempora ex, eligendi cupiditate eaque beatae ad sunt incidunt quae
            accusantium dolore mollitia sit exercitationem enim nemo neque.
            Excepturi temporibus quas hic? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Alias cumque neque dolor magni
            distinctio atque ipsa magnam veritatis harum, ratione ex. Aliquam
            officia quaerat temporibus dicta libero laboriosam quasi
            dignissimos!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia at voluptas nemo, deleniti pariatur quis! Quia recusandae
            tempora ex, eligendi cupiditate eaque beatae ad sunt incidunt quae
            accusantium dolore mollitia sit exercitationem enim nemo neque.
            Excepturi temporibus quas hic? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Alias cumque neque dolor magni
            distinctio atque ipsa magnam veritatis harum, ratione ex. Aliquam
            officia quaerat temporibus dicta libero laboriosam quasi
            dignissimos!
          </p>
          <br />  
          <div className="text-3xl my-5 ">Follow Me </div>
          <div className="flex space-x-5">
            <div>twitter</div>
            <div>linkedin</div>
            <div>github</div>
            <div>gmail</div>
            <div>phone</div>
          </div>
        </div>
      </div>
      <div className="text-4xl text-center text-white my-10 ">Technologies used </div>
    </>
  );
};

export default AboutMe;
