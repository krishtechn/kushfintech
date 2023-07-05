'use client'
import React,{useState} from 'react'
import { contactbannerpage} from '../backend/data';
import Technical from '../Components/Technical';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { HiOutlineMail,HiOutlineLocationMarker } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wave from '../Components/Wave';

const contact = () => {
  let [name,setname] = useState("");
  let [email,setemail] = useState("");
  let [address,setaddress] = useState("");
  let [pass,setpass] = useState("");

  let submitdata = (e:any)=>{
    e.preventDefault();
    if(name == ""){
      toast("name can't be blank");
    }else if(email == ""){
      toast("email can't be blank");
    }else if(address == ""){
      toast("address can't be blank");
    }else if (pass == ""){
      toast("password can't be blank");
    }else if (pass.length < 3){
      toast("password char most be greater then 3");
    }else {
      toast("you are signup");
    }
   }



  return (
    <div>
      <Technical item={contactbannerpage} />
      <div className='md:h-[200px] mb-2 max-[900px]:hidden'>
      <Wave />
     </div>

      <div className='flex justify-center items-center w-full flex-col my-[40px]'>
      <h1 className='text-3xl mb-7 text-gray-800 font-bold'>Create your Account</h1>
       <form method='post' className='flex bg-[#eee] rounded-lg p-5 w-full justify-center items-center flex-col pt-8' onSubmit={(e)=>submitdata(e)}>
        <div className='flex bg-white shadow justify-between items-center my-0 py-3 px-5 md:w-[40%]'>
          <AiOutlineUserAdd />
        <input type='text' name='name' value={name} className='border-none outline-none pl-4 w-full' minLength={3} placeholder='Enter your name..' onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div className='flex bg-white shadow justify-between items-center my-3 py-3 px-5 md:w-[40%]'>
          <HiOutlineMail />
        <input type='email' value={email} name="email" className='border-none outline-none pl-4 w-full' placeholder='Enter your Email..' onChange={(e)=>setemail(e.target.value)}/>
        </div>

        <div className='flex bg-white shadow justify-between items-center my-3 py-3 px-5 md:w-[40%]'>
          <HiOutlineLocationMarker />
        <input type='address' name="address" value={address} className='border-none outline-none pl-4 w-full' placeholder='Enter your Address..' onChange={(e)=>setaddress(e.target.value)}/>
        </div>

        <div className='flex bg-white shadow justify-between items-center my-3 py-3 px-5 md:w-[40%]'>
        <RiLockPasswordLine />
        <input type='password' name='password' value={pass} className='border-none outline-none pl-4 w-full' placeholder='Enter your Password..' onChange={(e)=>setpass(e.target.value)}  pattern="[a-z0-9]{1,15}" title="Password should be digits (0 to 9) or alphabets (a to z)."/>
        </div>

        <button style={{position:"relative",top:"30px"}} className='py-3 px-5 rounded-full shadow-lg mt-5 text-white bg-indigo-400'>create your Account</button>
      
     </form>

      </div>
      <ToastContainer />
    </div>
  )
}

export default contact