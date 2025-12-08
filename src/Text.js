import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
const Text = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div
      className="bg-gradient-to-r from-slate-400 from-10% via-gray-600  via-30% to-zinc-600 to-90% 
    ... h-2vh  pl-4 pr-4 text-white  text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm "
    >
      <div className=" flex justify-center">
        {" "}
        <span style={{ color: "pink" }}>---About me--- </span>
      </div>
      I’m an
        <span style={{ color: "Yellow" }}>  IT Support & Infrastructure Engineer & Network Engineer
     </span>  specializing in system administration, network management,
      

      {isSmallScreen ? (
        <>
          <p
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="text-amber-400 underline cursor-pointer"
          >
            {open ? "show less" : "show more"}
          </p>
          <Collapse in={open}>
            <div id="example-collapse-text" className="  ">
              and enterprise technical support. I have hands-on experience
              managing Windows Server environments, Active Directory, and Cisco
              networks, ensuring stable and secure IT operations. My work
              focuses on maintaining reliable systems, solving technical
              challenges, and improving performance across business networks. In
              addition, I develop automation scripts and backend tools using
              Node.js, PowerShell, and MySQL to simplify daily IT tasks and
              enhance efficiency.
              <br />
            </div>
          </Collapse>
        </>
      ) : (
        <>
          {/* <div className=' flex justify-center'>  <span style={{color:"pink"}}>-------About me-------- </span></div> <br/> */}
          
           and enterprise technical support. I have hands-on experience
              managing Windows Server environments, Active Directory, and Cisco
              networks, ensuring stable and secure IT operations. My work
              focuses on maintaining reliable systems, solving technical
              challenges, and improving performance across business networks. In
              addition, I develop automation scripts and backend tools using
              Node.js, PowerShell, and MySQL to simplify daily IT tasks and
              enhance efficiency.
          <br />
        </>
      )}
    </div>
  );
};

export default Text;
