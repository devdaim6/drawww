"use client"
import React, {  useState } from "react";
import { useTheme } from "next-themes";
import { Tldraw } from '@tldraw/tldraw'
const Home = () => {
  const { theme } = useTheme();
  const [editor,setEditor]=useState(theme=='dark'?true:false)
  editor?.user?.updateUserPreferences({isDarkMode:theme=='dark'?true:false})

return <>
  <div style={{ position: 'fixed', inset: 0}} className=" mt-[50px]">
  <Tldraw  onMount={(editor)=> {setEditor(editor)}}/>
</div>

  </>
};

export default Home;
