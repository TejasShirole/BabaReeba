import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);


  const links = [
    {name:"Home",href:"#"},
    {name:"About",href:"#about"},
    {name:"Gallery",href:"#gallery"},
    {name:"Events",href:"#events"},
    {name:"Contact",href:"#contact"},
  ];


  return (
    <>

    {/* NAVBAR */}

    <header
    className="
    fixed
    top-0
    left-0
    w-full
    z-50

    px-5
    md:px-10
    py-6
    "
    >

      <div className="flex items-center justify-between">


        {/* LOGO */}

        <a href="/">

          <img
          src="/images/logo.png"
          alt="logo"

          className="
          h-9
          md:h-12
          w-auto
          "
          />

        </a>




        {/* DESKTOP LINKS */}

        <nav
        className="
        hidden
        md:flex

        items-center

        gap-8

        text-white

        uppercase

        text-sm

        tracking-widest
        "
        >

          {
            links.map((item)=>(

              <a

              key={item.name}

              href={item.href}

              className="
              hover:text-gray-400
              transition
              duration-300
              "

              >

              {item.name}

              </a>


            ))
          }


        </nav>






        {/* MOBILE MENU BUTTON */}

        <button

        onClick={()=>setIsOpen(true)}

        className="

        md:hidden


        h-12

        w-12


        rounded-full


        border

        border-white/20


        bg-white/10


        backdrop-blur-xl


        flex

        items-center

        justify-center


        text-white

        "

        >

          <Menu size={22}/>


        </button>


      </div>


    </header>







    {/* MOBILE FULL MENU */}


    <div

    className={`

    fixed

    inset-0

    bg-black

    z-[999]


    flex

    flex-col

    items-center

    justify-center


    transition-all

    duration-500


    ${

    isOpen

    ?

    "opacity-100 visible"

    :

    "opacity-0 invisible"

    }

    `}

    >



      <button

      onClick={()=>setIsOpen(false)}

      className="

      absolute

      top-6

      right-6


      h-12

      w-12


      rounded-full


      border

      border-white/20


      text-white


      flex

      items-center

      justify-center

      "

      >

      <X size={22}/>


      </button>




      <div
      className="
      flex
      flex-col
      items-center
      gap-4
      "
      >

      {
        links.map((item)=>(

          <a

          key={item.name}

          href={item.href}

          onClick={()=>setIsOpen(false)}

          className="

          text-white

          text-5xl

          font-bold

          uppercase

          hover:text-gray-500

          transition

          "

          >

          {item.name}

          </a>

        ))
      }


      </div>


    </div>



    </>
  )
}


export default Navbar;