import { MdMail } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


const mobileNavLinks=[
    {
      img:<FaHome/>,
      path:"/"
    },
    {
      img:<FaRegUser/>,
      path:"/about"
    },
    {
      img:<GrReactjs/>,
      path:"/tech-stack"
    },
    {
      img:<GrTask/>,
      path:"/projects"
    },
    {
      img:<MdMail/>,
      path:"/contact"
    },
    // {
    //   img:"/nav/Vector.svg",
    //   path:""
    // }
  ]
export default mobileNavLinks;