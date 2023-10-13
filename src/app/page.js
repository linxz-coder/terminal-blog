'use client'
import { useState, useRef, useEffect } from 'react';
import { Press_Start_2P } from "next/font/google";
const ps2 = Press_Start_2P({ subsets: ["latin"], weight:'400'});

export default function Home() {
  const [menus, setMenus] = useState([]);
  const [firstInputValue, setFirstInputValue] = useState('');

  const firstInputRef = useRef(null);
  const inputRef = useRef(null);

  const checkUserInput = (value) => {

    if (value === 'ls') {
      setMenus(prevMenus => [...prevMenus, {type: 'ls',  inputValue: '', ref: inputRef}]);
    } else if (value === 'about') {
      setMenus(prevMenus => [...prevMenus, {type: 'about', inputValue: '', ref: inputRef}]);
    } else if (value === 'clear') {
      setFirstInputValue('');
      setMenus([]); // clear all menus
    } else  if (value === 'education') {
      setMenus(prevMenus => [...prevMenus, { type: 'education', inputValue: '', ref: inputRef }]);
    } else if (value === 'skills') {
        setMenus(prevMenus => [...prevMenus, { type: 'skills', inputValue: '', ref: inputRef }]);
    } else if (value === 'projects') {
        setMenus(prevMenus => [...prevMenus, { type: 'projects', inputValue: '', ref: inputRef }]);
    } else if (value === 'contact') {
        setMenus(prevMenus => [...prevMenus, { type: 'contact', inputValue: '', ref: inputRef }]);
    } else if (value === 'blog') {
        setMenus(prevMenus => [...prevMenus, { type: 'blog', inputValue: '', ref: inputRef }]);
  }
  }

  // 使用useEffect来设置焦点
  useEffect(() => {
    if (menus.length > 0) {
        const lastMenu = menus[menus.length - 1];
        lastMenu.ref.current && lastMenu.ref.current.focus();
    }
  }, [menus]);

  //  一开始光标自动闪烁
  useEffect(() => {
    firstInputRef.current && firstInputRef.current.focus();
  }, []);


  const handleFirstInputChange = (e) => {
    setFirstInputValue(e.target.value);
    checkUserInput(e.target.value);
  }

  const handleSecondInputChange = (menuIndex, e) => {
    const newValue = e.target.value;
    setMenus(prevMenus => {
      const newMenus = [...prevMenus];
      newMenus[menuIndex].inputValue = newValue;
      return newMenus;
    });
    checkUserInput(newValue);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="flex flex-col items-start ml-10 mt-10">
        <h1 className={"text-xl md:text-3xl font-bold text-purple-400 " + ps2.className}>
          linxz:$ 
            <span className="text-gray-500"> type ls to start</span>
        </h1>

        <p className="text-base text-gray-300 mt-10">
          Visit <a href="https://www.linxiaozhong.club" className="text-teal-200">Normal Website</a>
        </p>

        <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
          θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
          <input 
            ref={firstInputRef}
            className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
            value={firstInputValue} 
            onChange={handleFirstInputChange} 
          />
        </p>
        {menus.map((menu, index) => {
          switch (menu.type) {
              case 'ls':
                  return <HelpMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              case 'about':
                  return <AboutMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              case 'education':
                  return <EducationMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              case 'skills':
                  return <SkillsMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              case 'projects':
                  return <ProjectsMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              case 'contact':
                  return <ContactMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              case 'blog':
                  return <BlogMenu key={index} index={index} inputValue={menu.inputValue} onChange={handleSecondInputChange} inputRef={menu.ref} />;
              default:
                  return null;
          }
        })}
      </div>
    </div>

  )
}

const HelpMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* menu content */}
    <div className='flex justify-between'>
      <p>about</p>
      <p>About me</p>
    </div>
    <div className='flex justify-between'>
      <p>education</p>
      <p>My Education</p>
    </div>
    <div className='flex justify-between'>
      <p>skills</p>
      <p>My Tech Skills</p>
    </div>
    <div className='flex justify-between'>
      <p>projects</p>
      <p>My Tech Projects</p> 
    </div>
    <div className='flex justify-between'>
      <p>contact</p>
      <p>Contact Me</p>
    </div>
    <div className='flex justify-between'>
      <p>blog</p>
      <p>Visit my blog</p>
    </div>
    <div className='flex justify-between'>
      <p>clear</p>
      <p>Clear terminal</p>
    </div>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)

const AboutMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* about content */}
    <p className='mb-5'>
      My name is Linxz. I'm a fullstack AI engineer.
    </p>
    <p>
      I love coding in Javascript and Python, and have worked with frameworks like ReactJS, nextJS. <br/><br/>
      I currently use NextJS in a lot of my projects.
    </p>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)

const EducationMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* education content */}
    <p className='mb-5'>
      I graduated from  South China University of Technology in 2012.<br/><br/>
      I also studied on Udemy, Coursera, deeplearning.ai, and github && youtube!
    </p>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)

const SkillsMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* about content */}
    <p className='mb-5'>
      I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:
    </p>

    <p className='font-bold mb-5'>
      <span className='text-purple-400'>Core: </span>HTML, CSS, Node.js and Python<br/>
      <span className='text-purple-400'>Frameworks: </span>React, Gatsby, NextJS, RemixJS, Django and Laravel<br/>
      <span className='text-purple-400'>Database: </span> MongoDB, PostgreSQL, MySQL, and SQLite
    </p>
    <p>
      I also have knowledge of basic shell scripting.
    </p>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)

const ProjectsMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* about content */}
    <p className='mb-5'>
      My Projects: <br/><br/>
      <a className='text-purple-400 underline' href='https://183441.xyz'>ChatFun</a>
      <p>Nextjs, Python, Tailwindcss</p><br/>
      <p>a chatbot can talk about anything, with expert level knowledge in autism.</p>
      <br/>
      <a className='text-purple-400 underline' href='http://localhost:3000'>This website</a>
      <p>Nextjs, Tailwindcss</p><br/>
      <p>My personal website.</p>
      <br/>

    </p>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)

const ContactMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* contact content */}
    <div className='flex justify-between'>
      <p>github</p>
      <a className='text-purple-400 underline' href='https://github.com/linxz-coder'>linxz-coder</a>
    </div>
    <div className='flex justify-between'>
      <p>email</p>
      <a className='text-purple-400 underline' href='colorfool42@gmail.com'>colorfool42@gmail.com</a>
    </div>
    <div className='flex justify-between'>
      <p>X / twitter</p>
      <a className='text-purple-400 underline' href='https://twitter.com/lamhiuzhong'>lamhiuzhong</a>
    </div>
    <div className='flex justify-between'>
      <p>blog</p>
      <a className='text-purple-400 underline' href='https://www.linxiaozhong.club'>linxiaozhong.club</a>
    </div>
    <div className='flex justify-between'>
      <p>微信公众号</p>
      <a className='text-purple-400 underline'>凡学子</a>
    </div>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)

const BlogMenu = ({ index, inputValue, onChange, inputRef }) => (
  <div className={'w-4/5 text-[8px] md:text-base text-gray-300 ' + ps2.className} >
    {/* blog content */}
    <a className='underline text-purple-400' href='https://www.linxiaozhong.club'>www.linxiaozhong.club</a>

    {/* 第二个输入框 */}
    <p className={"text-[8px] md:text-base text-gray-300 mt-10 " + ps2.className}>
      θ/007 ~ <span className="text-teal-200">{`>> $  `}</span>
      <input
        ref={inputRef} 
        className="mt-4 bg-gray-800 text-white p-2 rounded focus:outline-none"
        value={inputValue}
        onChange={(e) => onChange(index, e)} 
      />
    </p>
  </div>
)
