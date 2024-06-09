import { useState } from "react";
import Folder from "./Folder";
import FolderItem from "./FolderItem";

const Contact: React.FC=()=>{
    const [activeFolder, setActiveFolder] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);
  
    const handleFolderClick = (folderName: string) => {
      setActiveFolder(folderName);
      setActiveItem(null); 
    };
    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
      };

    return(
        <>
        <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] w-[19.25rem] h-full">
                <div className="w-[19.25rem] ">
                <Folder
                name="Contact me"
                isActive={activeFolder === 'Contact me'}
                onClick={() => handleFolderClick('Contact me')}
                icon="list.png"
                >
                <FolderItem
                    name="Email"
                    isActive={activeItem === 'Email'}
                    onClick={() => handleItemClick('Email')}
                    icon="mail-icon.png"
                />
                <FolderItem
                    name="Phone"
                    isActive={activeItem === 'Phone'}
                    onClick={() => handleItemClick('Phone')}
                    icon="phone-icon.png"
                />
                </Folder>
            </div>
    </div>
    <div className="w-full flex">
    <div className="   h-full w-[46%] border-r border-[#607B96] ">
        <div className="flex flex-col gap-16 p-96 justify-start items-start h-full w-[100%] text-[#607B96]">
            <div className="flex flex-col gap-4">
                <label htmlFor="">_name:</label>
                <input type="text" className="w-[29rem] h-12 rounded-md bg-[#011221] border-[#1E2D3D] border focus:border-[#607B96]"/>
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="">_email:</label>
                <input type="text" className="w-[29rem] h-12 rounded-md bg-[#011221] border-[#1E2D3D] border focus:border-[#607B96]"/>
            </div>
            <div className="flex flex-col gap-4">
            <label htmlFor="">_message:</label>
        <input type="text" className="w-[29rem] h-[13rem] rounded-md bg-[#011221] border-[#1E2D3D] border focus:border-[#607B96]" />
            </div>
        <button className="bg-[#1C2B3A] w-44 rounded-lg text-white h-10 justify-start  ">Submit-message</button>
        </div>
        
    </div>
    <div className="flex justify-center text-2xl  pb-44 items-center h-full w-[50%]">
      <div className="text-left gap-3 flex flex-col ">
        <div className=" gap-8 flex ">
          <span className="text-[#607B96]  mr-3"> 1</span>
          <div>
            <span className="text-[#C98BDF]"> const</span> 
            <span className="text-[#5565E8]"> button </span>
            <span className="text-[#C98BDF]"> = </span>
            <span className="text-[#5565E8]"> document.querySelector</span>
            <span className="text-[#607B96]">(</span>
            <span className="text-[#FEA55F]">'#sendBtn'</span>
            <span className="text-[#607B96]">)</span>
          </div>
        </div>
        <div className=" flex gap-4">
          <span className="text-[#607B96] mr-3">2</span>
        </div>
        <div className="flex gap-8"> 
          <span className="text-[#607B96] mr-3">3 </span>
        <div>
                <span className="text-[#C98BDF]"> const</span> 
                <span className="text-[#5565E8]"> message </span>
                <span className="text-[#C98BDF]"> = </span>
                <span className="text-[#607B96]">{'{'}</span>
          </div>
        </div >
        <div className=" flex gap-16">
          <span className="text-[#607B96]">4</span>
          <div>
            <span className="text-[#5565E8]"> name </span>
            <span className="text-[#607B96]">: </span>
            <span className="text-[#FEA55F]">"Mohamed Aboulhoda"</span>
            <span className="text-[#607B96]">, </span>
          </div>
        </div>
        <div className=" flex gap-16">
          <span className="text-[#607B96]">5 </span>
          <div>
            <span className="text-[#5565E8]"> email </span>
            <span className="text-[#607B96]">: </span>
            <span className="text-[#FEA55F]">""</span>
            <span className="text-[#607B96]">, </span>
          </div>
        </div>
        <div className=" flex gap-16">
          <span className="text-[#607B96]">6</span>
          <div>
            <span className="text-[#5565E8]"> message </span>
            <span className="text-[#607B96]">: </span>
            <span className="text-[#FEA55F]">""</span>
            <span className="text-[#607B96]">, </span>
          </div>
        </div>
        <div className=" flex gap-16">
          <span className="text-[#607B96]">7</span>
          <div>
                <span className="text-[#607B96]"> date </span>
                <span className="text-[#607B96]">: </span>
                <span className="text-[#FEA55F]">"Sunday june 09"</span>
                <span className="text-[#607B96]">, </span>
          </div>
        </div>
        <div className=" flex gap-16">
          <span className="text-[#607B96]">8</span>
          <span className="text-[#607B96]">{'}'}</span>
        </div>
        <div className=" flex gap-4">
          <span className="text-[#607B96]">9</span>
        </div>
        <div className=" flex gap-8">
          <span className="text-[#607B96]">10</span>
          <div>
            <span className="text-[#5565E8]"> button.addEventListener </span>
            <span className="text-[#607B96]">(</span>
            <span className="text-[#FEA55F]">'Click'</span>
            <span className="text-[#607B96]">,</span>
            <span className="text-[#607B96]">()</span>
            <span className="text-[#C98BDF]"> {"=>"}</span> 
            <span className="text-[#607B96]">{'{'}</span>
          </div>
        </div>
        <div className=" flex gap-16">
          <span className="text-[#607B96]">11</span>
        <div>
                <span className="text-[#5565E8]"> form.send</span>
                <span className="text-[#607B96]">(</span>
                <span className="text-[#5565E8]">message</span>
                <span className="text-[#607B96]">)</span>
                <span className="text-[#607B96]">;</span>
          </div>
        </div>
        <div className=" flex gap-16">
          <span className="text-[#607B96]">12</span>
          <div>
            <span className="text-[#607B96]">{'}'}</span>
            <span className="text-[#607B96]">)</span>
          </div>
        </div>
    </div>
    </div>
    </div>
    </>
    );
};
export default Contact
