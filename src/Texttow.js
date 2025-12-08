import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
const Texttow = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div
        className="text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm  
    bg-gradient-to-r from-gray-600  from-10% via-slate-820 via-30% to-zinc-600 to-90%  pl-4 pr-4 text-white"
      >
        <span style={{ color: "pink" }} className=" flex justify-center">
          ---Skills---
        </span>
          Windows Server , Active Directory, Group Policy
           <br/>     GPO, DNS, DHCP, WSUS,
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
              <div id="example-collapse-text">
                                      {" "}
          LAN/WAN, Cisco Routing & Switching, VPN,
                Firewalls, TCP/IP, Hardware & Software Troubleshooting, Helpdesk
                Support, Remote Assistance, Endpoint Protection, Backup &
                Recovery, Access Control, SAP Support, PowerShell, Node.js,
                Python, MySQL, SQL Server, CCTV, Biometric & Access Control
                Systems.{" "}
              </div>
            </Collapse>
          </>
        ) : (
          <>
            <div>
              {" "}
          LAN/WAN, Cisco Routing & Switching, VPN,
                Firewalls, TCP/IP, Hardware & Software Troubleshooting, Helpdesk
                Support, Remote Assistance, Endpoint Protection, Backup &
                Recovery, Access Control, SAP Support, PowerShell, Node.js,
                Python, MySQL, SQL Server, CCTV, Biometric & Access Control
                Systems.{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Texttow;
