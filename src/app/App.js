const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="bg-[#FFDD55] w-full lg:w-[1000px] lg:h-[700px] relative p-4">
      
        <nav className="bg-black w-full h-[120px] rounded-b-[40px] flex items-center justify-between px-4 lg:px-12 absolute top-0 left-0">
          <img src="images/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
          <div className="hidden lg:flex gap-[48px]">
            <ul className="flex space-x-[38px]">
              <li className="text-white text-[26px] font-semibold">Home</li>
              <li className="text-white text-[26px] font-semibold">About</li>
              <li className="text-white text-[26px] font-semibold">Services</li>
              <li className="text-white text-[26px] font-semibold">Contact</li>
            </ul>
          </div>
          <div className="lg:hidden">
            <img
              src="images/Hamburger_MD.png"
              alt="Menu"
              className="w-[50px] h-[50px]"
            />
          </div>
        </nav>

    
        <div className="lg:flex lg:justify-between lg:items-center mt-[160px]"> 
          <div className="lg:text-left text-left">
            <h1 className="text-black text-[34px] lg:text-[54px] font-extrabold mt-12">
              Hello,
            </h1>
            <h1 className="text-black text-[34px] lg:text-[54px] font-extrabold mt-2">
              I'm
            </h1>
            <h3 className="text-[#474A57] text-[15px] lg:text-[20px] font-semibold mt-4">
              UI/UX Designer, React Developer
            </h3>
            <div className="flex space-x-4 mt-8">
              <button className="w-[100px] lg:w-[194px] h-[40px] lg:h-[63px] bg-black text-white text-[12px] lg:text-[20px] font-semibold rounded-lg">
                Hire Me
              </button>
              <button className="w-[100px] lg:w-[194px] h-[40px] lg:h-[63px] bg-black text-white text-[12px] lg:text-[20px] font-semibold rounded-lg">
                Download CV
              </button>
            </div>
          </div>

        
          <div className="flex items-center lg:justify-end mt-12 lg:mt-0"> 
            <img
              src="images/avatar.png"
              alt="Profile"
              className="w-[205px] lg:w-[370px] h-[245px] lg:h-[480px] rounded-lg"
            />
            <div className="flex flex-col gap-2 mt-4 lg:mt-0 ml-4">
              <img
                src="images/Component1.png"
                alt="Icon 1"
                className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
              />
              <img
                src="images/Component2.png"
                alt="Icon 2"
                className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
              />
              <img
                src="images/Component3.png"
                alt="Icon 3"
                className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
              />
              <img
                src="images/Component4.png"
                alt="Icon 4"
                className="w-[40px] lg:w-[76px] h-[40px] lg:h-[76px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
