import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono">
      <div className="flex gap-2 justify-around bg-neutral-800 p-5 shadow-lg text-neutral-50 ">
        <div><h1>SIDHARTH RAJ</h1></div>
        <div className="flex gap-10 ">
          <ul>HOME</ul>
          <ul>ABOUT</ul>
          <ul>EDUCATION</ul>
          <ul>CONTACTS</ul>
        </div>
      </div>
      <div className="bg-neutral-900 p-1">
       <div className="flex justify-center"> <img className="rounded-full shadow-lg  w-80 h-80 bg-gradient-to-br from-orange-400 to-purple-600 " src="profile.png" alt="error img" /><br /><br />
       </div><center><h1 className=" text-8xl p-5 text-neutral-50 font-bold font-serif">I do code and <br /> make content <a className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-purple-600"> about it</a></h1></center>
        
        <p className="text-neutral-50 ml-90 mr-90 text-center p-10 text-2xl font-extralight">I’m a rookie developer passionate about coding and building creative solutions. I’m currently learning java,python and working on projects to strengthen my skills. I love tackling challenges and continuously improving through hands-on experience. Excited to grow and contribute to the tech world!  </p>
      </div>
      <div className="bg-neutral-900 flex gap-10 p-10 justify-center">
        <button className="bg-neutral-50 p-5 px-20 rounded-full text-neutral-900 font-bold hover:bg-gradient-to-br from-orange-400 to-purple-600 text-xl">GET IN TOUCH</button>
        <button className="bg-neutral-900 p-5 px-20 rounded-full text-neutral-50 border-3 border-neutral-50 text-neutral-50 font-bold hover:bg-gradient-to-br from-orange-400 to-purple-600 text-xl">DOWNLOAD CV</button>
      </div>
      <div className="bg-neutral-900  p-20 ">
        <h3 className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-600 text-xl font-bold ">EXPERIENCE WITH</h3>
        <div className="flex justify-center gap-20 flex-spa bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-600 p-10">
          <img className=" h-15 w-15 " src="https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png" alt="JS Icon" />
          <img className="h-15 w-15" src="https://e7.pngegg.com/pngimages/893/87/png-clipart-cascading-style-sheets-logo-css3-html-css3-logo-blue-angle-thumbnail.png" alt="" />
          <img className="h-15 w-15" src="https://e7.pngegg.com/pngimages/793/545/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail.png" alt="" />
          <img className="h-15 w-15" src="https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo-thumbnail.png" alt="" />
          <img className="h-15 w-15" src="https://e7.pngegg.com/pngimages/140/948/png-clipart-blue-and-yellow-logo-python-logo-programmer-fierce-python-s-cdr-angle-thumbnail.png" alt="" />
        </div>
      </div>
      <div className="bg-neutral-900 ">
        <h3 className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-red-500 text-4xl font-bold pb-10">PROJECTS</h3>
      </div>
      
  </div>
  );
}
