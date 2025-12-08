import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
const TextCollaps = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-400 from-10% via-gray-600  via-30% to-zinc-600 to-90% ... h-2vh  pl-4 pr-4 text-white text-xs  ">
      <div className=" flex justify-center">
        {" "}
        <span style={{ color: "pink" }}>-------About me-------- </span>
      </div>{" "}
      <br />
      I’m an IT Support & Infrastructure Engineer & Network Engineer
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
           specializing in system administration, network management,
          <br />
          <span style={{ color: "Yellow" }}> React js </span>
        </div>
      </Collapse>
      and enterprise
      technical support. I have hands-on experience managing Windows Server
      environments, Active Directory, and Cisco networks, ensuring stable and
      secure IT operations. My work focuses on maintaining reliable systems,
      solving technical challenges, and improving performance across business
      networks. In addition, I develop automation scripts and backend tools
      using Node.js, PowerShell, and MySQL to simplify daily IT tasks and
      enhance efficiency.
      <br />
      {/* ---------------------persoonality----------------<br/>
   i have bachelor information comuncation technology
 i'm a social person whow likes to work with a
  team and collbaration .
  I like to faced the trouble to solve it 
 */}
    </div>
  );
};

export default TextCollaps;
