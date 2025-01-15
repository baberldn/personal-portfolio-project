import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-start min-h-screen pl-10 bg-gray-100">
      <main className="bg-[#FFDD55] w-[1000px] h-[700px] relative  ml-32">
        <div className="bg-[#FFDD55] w-[300px] h-[700px] ml-56">
   
          <nav className="bg-black w-full h-[100px] absolute top-0 left-0 rounded-b-[60px] flex items-center justify-between pl-12 pr-8">
            <img src="images/logo.png" alt="Logo" className="w-[50px] h-[50px] object-cover" />
            <div className="absolute top-[35px] left-[420px] w-[674px] h-[34px] opacity-100 gap-[48px] flex items-center justify-between">
              <ul className="flex space-x-[38px]">
                <li className="text-white font-[Montserrat] text-[26px] font-semibold leading-[43.88px] text-left no-underline decoration-transparent">
                  Home
                </li>
                <li className="text-white font-[Montserrat] text-[26px] font-semibold leading-[43.88px] text-left no-underline decoration-transparent">
                  About
                </li>
                <li className="text-white font-[Montserrat] text-[26px] font-semibold leading-[43.88px] text-left no-underline decoration-transparent">
                  Services
                </li>
                <li className="text-white font-[Montserrat] text-[26px] font-semibold leading-[43.88px] text-left no-underline decoration-transparent">
                  Contact
                </li>
              </ul>
            </div>
          </nav>
        </div>

      
        <div className="absolute top-[250px] left-[50px]">
          <h1 className="text-black text-[54px] font-extrabold leading-[40px] text-left">
            Hello,
          </h1>
        </div>

        <div className="absolute top-[320px] left-[50px]">
          <h1 className="text-black text-[54px] font-extrabold leading-[40px] text-left">
            I'm
          </h1>
        </div>

        <div className="absolute top-[390px] left-[50px]">
          <h2 className="text-[#474A57] text-[20px] font-semibold leading-[35px] text-left">
            UI/UX Designer, React Developer
          </h2>
        </div>

        <div className="absolute top-[470px] left-[50px] w-[194px] h-[63px] rounded-[15px] bg-[#00C6AE] opacity-100">
        </div>

        <div className="absolute top-[470px] left-[260px] w-[194px] h-[63px] rounded-[15px] bg-[#00C6AE] opacity-100">
        </div>

        <div className="absolute top-[463px] left-[43px] w-[194px] h-[63px] rounded-[15px] bg-black opacity-100 flex items-center justify-center">
          <span className="text-white font-[Montserrat] text-[20px] font-semibold">
            HIRE ME
          </span>
        </div>

        <div className="absolute top-[463px] left-[253px] w-[194px] h-[63px] rounded-[15px] bg-black opacity-100 flex items-center justify-center">
          <span className="text-white font-[Montserrat] text-[20px] font-semibold">
            Download CV
          </span>
        </div>

        <div className="absolute top-[180px] left-[500px]">
          <img
            src="images/avatar.png" 
            alt="Profile"
            className="w-[370px] h-[480px] rounded-lg" 
          />
        </div>

        <div className="absolute top-[315px] left-[900px] flex flex-col gap-[10px]">
          <img src="images/Component 1.png" alt="Additional 1" className="w-[76px] h-[76px] object-cover rounded-lg" />
          <img src="images/Component 2.png" alt="Additional 2" className="w-[76px] h-[76px] object-cover rounded-lg" />
          <img src="images/Component 3.png" alt="Additional 3" className="w-[76px] h-[76px] object-cover rounded-lg" />
          <img src="images/Component 4.png" alt="Additional 4" className="w-[76px] h-[76px] object-cover rounded-lg" />
        </div>
      </main>





      {/* mobil */}
      <div className="bg-[#FFDD55] w-[300px] h-[700px] ml-56">
  <div className="bg-black w-[300px] h-[100px] rounded-b-[40px] flex justify-between items-center px-4">
    <img src="images/logo.png" alt="Description" className="w-[50px] h-[50px] ml-[20px]" />
    <img src="images/Hamburger_MD.png" alt="Right Image" className="w-[50px] h-[50px]" />
  </div>
  

  <h1 className="text-black text-[34px] font-extrabold leading-[40px] text-left mt-[90px] ml-[20px]">
    Hello,
  </h1>
  <h1 className="text-black text-[34px] font-extrabold leading-[20px] text-left mt-[20px] ml-[20px]">
    I'm
  </h1>
  <h3 className="text-[#474A57] text-[15px] font-semibold text-left mt-[20px] ml-[20px]">
    UI/UX Designer
  </h3>
  <h3 className="text-[#474A57] text-[15px] font-semibold text-left ml-[20px]">
    React Developer
  </h3>

  <div className="mt-[30px] flex justify-start ml-[20px]">
  <img src="images/avatar.png" alt="Profile" className="w-[205px] h-[245px]" />
</div>
<div className="mr-[15px] flex flex-col items-end mt-[-180px]">
  <img src="images/Component 1.png" alt="Image 1" className="w-[40px] h-[40px] mb-[5px]" />
  <img src="images/Component 2.png" alt="Image 2" className="w-[40px] h-[40px] mb-[5px]" />
  <img src="images/Component 3.png" alt="Image 3" className="w-[40px] h-[40px] mb-[5px]" />
  <img src="images/Component 4.png" alt="Image 4" className="w-[40px] h-[40px] mb-[5px]" />
</div>
<div className="flex space-x-[30px] mt-[30px] ml-[10px] relative">
  <div className="absolute bottom-[5px] left-[155px] bg-black w-[100px] h-[25px] rounded-[15px_15px_15px_15px]">
  <span className="text-white font-[Montserrat] text-[12px] font-semibold ml-[8px]">Download CV</span>
  </div>


  <div className="bg-[#00C6AE] w-[100px] h-[25px] rounded-[15px_15px_15px_15px]">
  </div>

  
  <div className="absolute bottom-[5px] left-[-5px]  bg-black w-[100px] h-[25px] rounded-[15px_15px_15px_15px]"> <span className="text-white font-[Montserrat] text-[15px] font-semibold ml-[17px]">Hire Me</span>
  </div>

 
  <div className="bg-[#00C6AE] w-[100px] h-[25px] rounded-[15px_15px_15px_15px]">
    
  </div>
</div>






</div>












    </div>
  );
};

export default App;
