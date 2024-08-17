import React, { useState } from "react";
import Folder from "./Folder";
import FolderItem from "./FolderItem";
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_j8su5sq";
const TEMPLATE_ID = "template_6p6qy4n";
const PUBLIC_KEY = "9tAZIAVv0BxnxiqFC";

const Contact: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = month + "/" + date + "/" + year;
  const handleFolderClick = (folderName: string) => {
    setActiveFolder(folderName);
    setActiveItem(null);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && email && message) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.currentTarget, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
          
        }, (error) => {
          console.log(error.text);
          alert('Something went wrong!');
        });
        event.currentTarget.reset();
    } else {
      if (!name) setName("");
      if (!email) setEmail("");
      if (!message) setMessage("");
    }
  };

  const handleNewMessage = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(false);
  };

  return (
    <>
      <div className="border-r divide-y divide-[#607B96] text-xs flex flex-col border-[#607B96] lg:w-[10rem] 2xl:w-[19.25rem] h-full">
        <div className="w-[19.25rem]">
          <Folder
            name="Contact me"
            isActive={activeFolder === 'Contact me'}
            onClick={() => handleFolderClick('Contact me')}
            icon="list.png"
          >
            <FolderItem
              name="mohaboulhoda@gmail.com"
              isActive={activeItem === 'Email'}
              onClick={() => handleItemClick('Email')}
              icon="mail-icon.png"
            />
            <FolderItem
              name="+212621671778"
              isActive={activeItem === 'Phone'}
              onClick={() => handleItemClick('Phone')}
              icon="phone-icon.png"
            />
          </Folder>
        </div>
      </div>
      <div className="w-full flex">
        <div className="h-full w-[46%] border-r border-[#607B96]">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="flex  flex-col  justify-center items-start h-full w-full text-[#607B96]">
              <div className="flex flex-col gap-4">
                <label htmlFor="from_name">_name:</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={name === "" ? "Please enter your name" : ""}
                  className="2xl:w-[29rem] 2xl:h-12 lg:w-[13rem] rounded-md lg:placeholder:text-xs 2xl:placeholder:text-base bg-[#011221] p-3 border-[#1E2D3D] border focus:border-[#607B96] outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="from_email">_email:</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={email === "" ? "Please enter your email" : ""}
                  className="2xl:w-[29rem] 2xl:h-12 rounded-md lg:w-[13rem] lg:placeholder:text-xs 2xl:placeholder:text-base p-3 bg-[#011221] border-[#1E2D3D] border focus:border-[#607B96] outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start">
                <label htmlFor="message">_message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={message === "" ? "Please write something" : ""}
                  className="2xl:w-[29rem] 2xl:h-[13rem] lg:h-[6rem] p-3 lg:w-[17rem] rounded-md lg:placeholder:text-xs 2xl:placeholder:text-base bg-[#011221] border-[#1E2D3D] border focus:border-[#607B96] resize-none outline-none"
                  required
                />
              </div>
              <button type="submit" className="bg-[#1C2B3A] w-44 rounded-lg text-white h-10">
                Submit-message
              </button>
            </form>
          ) : (
            <div className="flex flex-col gap-7 2xl:mb-48 2xl:pb-48 justify-center items-center h-full w-[100%] text-[#607B96]">
              <p className="text-3xl text-white">Thank You! &#129304;</p>
              <p className="text-2xl">Your message has been accepted. You</p>
              <p className="text-2xl"> will receive an answer really soon!</p>
              <button onClick={handleNewMessage} className="bg-[#1C2B3A] w-44 rounded-lg text-white h-10">
                Send New Message
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center  items-center h-full w-[50%]">
          <div className="text-left gap-3 flex flex-col">
            <div className="gap-8 flex">
              <span className="text-[#607B96] mr-3">1</span>
              <div>
                <span className="text-[#C98BDF]">const</span>
                <span className="text-[#5565E8]"> button </span>
                <span className="text-[#C98BDF]"> = </span>
                <span className="text-[#5565E8]"> document.querySelector</span>
                <span className="text-[#607B96]">(</span>
                <span className="text-[#FEA55F]">'#sendBtn'</span>
                <span className="text-[#607B96]">)</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#607B96] mr-3">2</span>
            </div>
            <div className="flex gap-8">
              <span className="text-[#607B96] mr-3">3 </span>
              <div>
                <span className="text-[#C98BDF]">const</span>
                <span className="text-[#5565E8]"> message </span>
                <span className="text-[#C98BDF]"> = </span>
                <span className="text-[#607B96]">{'{'}</span>
              </div>
            </div>
            <div className="flex gap-16">
              <span className="text-[#607B96]">4</span>
              <div>
                <span className="text-[#5565E8]"> name </span>
                <span className="text-[#607B96]">: </span>
                <span className="text-[#FEA55F]">"{name}"</span>
                <span className="text-[#607B96]">, </span>
              </div>
            </div>
            <div className="flex gap-16">
              <span className="text-[#607B96]">5 </span>
              <div>
                <span className="text-[#5565E8]"> email </span>
                <span className="text-[#607B96]">: </span>
                <span className="text-[#FEA55F]">"{email}"</span>
                <span className="text-[#607B96]">, </span>
              </div>
            </div>
            <div className="flex gap-16">
              <span className="text-[#607B96]">6</span>
              <div>
                <span className="text-[#5565E8]"> message </span>
                <span className="text-[#607B96]">: </span>
                <span className="text-[#FEA55F]">"{message}"</span>
                <span className="text-[#607B96]">, </span>
              </div>
            </div>
            <div className="flex gap-16">
              <span className="text-[#607B96]">7</span>
              <div>
                <span className="text-[#607B96]"> date </span>
                <span className="text-[#607B96]">: </span>
                <span className="text-[#FEA55F]">"{currentDate}"</span>
                <span className="text-[#607B96]">, </span>
              </div>
            </div>
            <div className="flex gap-16">
              <span className="text-[#607B96]">8</span>
              <span className="text-[#607B96]">{'}'}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[#607B96]">9</span>
            </div>
            <div className="flex gap-8">
              <span className="text-[#607B96]">10</span>
              <div>
                <span className="text-[#5565E8]"> button.addEventListener </span>
                <span className="text-[#607B96]">(</span>
                <span className="text-[#FEA55F]">'click'</span>
                <span className="text-[#607B96]">, </span>
                <span className="text-[#607B96]"> () </span>
                <span className="text-[#607B96]">{'{'}</span>
              </div>
            </div>
            <div className="flex gap-16">
                <span className="text-[#607B96]">11</span>
                <div>
                    <span className="text-[#5565E8]"> form.send</span>
                    <span className="text-[#607B96]">(</span>
                    <span className="text-[#5565E8]">message</span>
                    <span className="text-[#607B96]">)</span>
                    <span className="text-[#607B96]">;</span>
            </div>
            </div>
            <div className="flex gap-4">
              <span className="text-[#607B96]">12</span>
              <div>
                <span className="text-[#607B96]"> {'}'})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;