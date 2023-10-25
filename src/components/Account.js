import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import { RiVipLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import information from '../images/Information.svg'
import bankcard from '../images/BankCard.svg'
import LoginPassword from '../images/LoginPassword.svg'
import PayPassword from '../images/PayPassword.svg'
import Logoutimg from '../images/LogOut.svg'
import axios from 'axios'
import BASE_URL from '../api_url'
import { ContextApi } from '../App'
import logo from '../images/sungrow/logo_25_m.png'
import { BiEditAlt, BiLogOut } from 'react-icons/bi'
import { LiaAngleRightSolid } from 'react-icons/lia'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { LuShieldCheck } from 'react-icons/lu'
import { PiClockCounterClockwiseLight } from 'react-icons/pi'

const Account = () => {

    const navigate = useNavigate();

    const { userDetails, setUserDetails, setUser, getUserDetails, toaster, user, vipimg } = useContext(ContextApi);


    const [name, setname] = useState('')
    const [mobno, setMobno] = useState(0)
    const [id, setid] = useState(0)
    const [Balance, setBalance] = useState(0)
    const [rewards, setRewards] = useState(50)

    const handelSignOut = () => {
        localStorage.clear();
        setUser()
        navigate('/login');
    }

    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
    }, [])




    return (
        <>

            {/* <div className="mx-auto mb-28 bgimg">
                <div className="w-full mx-auto max-w-[800px]" >

                    <div className="relative mx-auto z-[1]">
                        <div className="">

                            <div className="p-[10px] pb-[5px] rounded-br-[15px] rounded-bl-[15px]">

                                <div className="py-5 px-[10px] flex flex-wrap items-center">

                                    <div className="flex-1">
                                        <p className='text-[#4b4d5e] font-bold text-xl'>{userDetails?.name}</p>
                                        <span className='text-[#818393] text-sm'>{userDetails?.mobno} (ID: {id})</span>
                                    </div>

                                    <Link to={`/vip`} className='flex items-end '>
                                        <RiVipLine size={40} className='text-[#b3bdc4]' />
                                        <img src={vipimg} alt="" className='w-6' />
                                    </Link>

                                </div>

                                <div className="p-5 bg-[rgb(1,77,173)] backdrop-blur-[5px] shadow-[rgba(0,0,0,0.03)_0px_0px_10px_5px] rounded-[15px]">

                                    <div className="mb-5 justify-between items-center flex flex-wrap">

                                        <div className="">
                                            <h3 className='text-[28px] font-bold text-white leading-none' >
                                                <em className='mr-1 p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                                {userDetails?.balance?.toFixed(2)}
                                            </h3>
                                            <span className='text-sm text-white opacity-80 leading-none'>Balance</span>
                                        </div>

                                    </div>

                                    <div className="w-full justify-end items-stretch flex flex-wrap">

                                        <Link to={'/deposit'} className="px-5 text-[#0aa496] bg-white font-bold h-[35px] leading-9 text-sm text-center rounded-[500px]  ">
                                            Deposit
                                        </Link>

                                        <Link to={'/widthdrawl'} className="px-5 ml-[10px] bg-[#0aa496] text-white font-bold h-[35px] leading-9 text-sm text-center rounded-[500px] ">
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {(Number(userDetails?.balance)).toFixed(2)} Withdraw
                                        </Link>


                                    </div>

                                </div>

                            </div>

                            <div className="flex px-[5px] pb-[10px] flex-wrap">

                                <Link to={'/deposit_records'} className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {userDetails?.recharge_amount.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total deposits</span>
                                    </div>
                                </Link>

                                <Link to={'/widthdrawlrecords'} className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {userDetails?.withdrawal_sum?.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total withdrawal</span>
                                    </div>
                                </Link>

                                <Link to={'/orders'} className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {userDetails?.plans_purchased?.length}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>My order</span>
                                    </div>
                                </Link>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {userDetails?.earning?.toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total earnings</span>
                                    </div>
                                </div>

                                <div className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {userDetails?.rewards?.toFixed(2) || 50.00}
                                        </p>
                                        <span className='text-sm text-[#818393] leading-none'>Total rewards</span>
                                    </div>
                                </div>

                                <Link to={'/comissions'} className="w-1/2 px-[5px] pt-[5px] text-left">
                                    <div className="h-full px-5 py-[10px] bg-white backdrop-blur-[5px] rounded-[7px] ">
                                        <p className='text-base font-bold text-[#1f3d70] leading-none '>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                            {(Number(userDetails?.indirectRecharge) + Number(userDetails?.in_indirectRecharge) + Number(userDetails?.directRecharge)).toFixed(2)}
                                        </p>
                                        <span className='text-sm text-[#818393] '>Total commission</span>
                                    </div>
                                </Link>

                            </div>

                            <div className="px-[10px] ">
                                <div className="mb-[10px]">

                                    <Link to={'/update'} className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={information} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>PersonalData</p>
                                            </div>
                                        </div>

                                    </Link>

                                    <Link to={'/bankcard'} className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={bankcard} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>BankCard</p>
                                            </div>
                                        </div>

                                    </Link>

                                    <Link to={'/changepassword'} className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={LoginPassword} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>ChangeLoginPassword</p>
                                            </div>
                                        </div>

                                    </Link>

                                    <Link to={'/changewidthdrawlpassword'} className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={PayPassword} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1">
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[#4b4d5e] text-base whitespace-normal break-all'>ChangeTradePassword</p>
                                            </div>
                                        </div>

                                    </Link>

                                    <div onClick={handelSignOut} className="my-[5px] py-[15px] px-[10px] bg-white rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex justify-center items-center mr-[10px] w-[35px] h-[35px] relative rounded-[50%]">
                                            <img src={Logoutimg} alt="information" className='w-4/5' />
                                        </div>

                                        <div className="flex flex-wrap items-center flex-1" >
                                            <div className="whitespace-normal break-words break-all">
                                                <p className='text-[rgba(255,87,40,0.9)] text-base whitespace-normal break-all'>LogOut</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}
            <Navbar />

            <div className="p-5 mb-10">

                <div className="flex space-x-5 items-center">

                    <div className="bg-white rounded-full w-32 h-32 shadow-xl flex justify-center items-center p-5">
                        <img src={logo} alt="" />
                    </div>

                    <div className="">
                        <h1 className='text-4xl font-bold'>{userDetails?.name}</h1>
                        <p className='text-[#888483]'>ID: {userDetails?.mobno}</p>
                    </div>

                </div>

                <div className="mt-5">

                    <Link to={'/update'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <BiEditAlt size={20} />
                            </div>
                            <p className='font-bold text-lg'>Edit Profile</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <Link to={'/bankCard'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <AiOutlineCreditCard size={20} />
                            </div>
                            <p className='font-bold text-lg'>My Card</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] flex space-x-2 items-center ">
                            <p>{userDetails?.bank_details.fullName ? 1 : 0} Card Saved</p>
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <div className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <RiVipLine size={20} />
                            </div>
                            <p className='font-bold text-lg'>VIP Level</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </div>

                    <div className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <LuShieldCheck size={20} />
                            </div>
                            <p className='font-bold text-lg'>Change Trade Password</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </div>

                    <div className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <PiClockCounterClockwiseLight size={20} />
                            </div>
                            <p className='font-bold text-lg'>Balance Records</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </div>

                    <div className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <div>
                                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 49" fill="none">
                                        <path d="M14.8703 34.3161L22.3949 41.8407C23.274 42.7198 24.698 42.7198 25.5771 41.8407L33.1369 34.2809C33.1931 34.2247 33.1931 34.1368 33.1369 34.0805L31.7445 32.6881C31.6882 32.6318 31.6003 32.6318 31.544 32.6881L25.3696 38.8695C25.2817 38.9575 25.1305 38.8942 25.1305 38.7711L25.1305 6.62971C25.1305 6.55236 25.0672 6.48906 24.9899 6.48906L23.0208 6.48906C22.9435 6.48906 22.8802 6.55236 22.8802 6.62971L22.8802 38.8063C22.8802 38.9328 22.729 38.9926 22.6411 38.9047L16.4631 32.7268C16.4069 32.6705 16.319 32.6705 16.2627 32.7268L14.8703 34.1192C14.8141 34.1719 14.8141 34.2634 14.8703 34.3161Z" fill="#565151"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='font-bold text-lg'>Deposit Records</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </div>

                    <Link to={'/widthdrawlrecords'} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <div>
                                    <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 49" fill="none">
                                        <path d="M33.137 14.6722L25.6124 7.14756C24.7333 6.26852 23.3093 6.26852 22.4302 7.14756L14.8705 14.7073C14.8142 14.7636 14.8142 14.8515 14.8705 14.9078L16.2629 16.3002C16.3191 16.3564 16.407 16.3564 16.4633 16.3002L22.6377 10.1187C22.7256 10.0308 22.8768 10.0941 22.8768 10.2172L22.8768 42.3586C22.8768 42.4359 22.9401 42.4992 23.0174 42.4992L24.9865 42.4992C25.0639 42.4992 25.1272 42.4359 25.1272 42.3586L25.1272 10.182C25.1272 10.0554 25.2783 9.99567 25.3663 10.0836L31.5442 16.2615C31.6004 16.3178 31.6883 16.3178 31.7446 16.2615L33.137 14.8691C33.1933 14.8163 33.1933 14.7249 33.137 14.6722Z" fill="#565151"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className='font-bold text-lg'>Withdraw Records</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </Link>

                    <div onClick={handelSignOut} className=" flex items-center justify-between my-5">

                        <div className=" flex items-center space-x-3">
                            <div className="bg-[#cfc1c13b] text-[#565151] w-10 h-10 rounded-full flex justify-center items-center">
                                <BiLogOut size={20} />
                            </div>
                            <p className='font-bold text-lg'>Logout</p>
                        </div>

                        <div className="font-bold text-[#cfc1c1] ">
                            <LiaAngleRightSolid />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Account