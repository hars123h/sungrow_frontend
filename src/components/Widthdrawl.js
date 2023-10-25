import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import chip from '../images/Chip.svg'
import BASE_URL from '../api_url';
import axios from 'axios';

const Widthdrawl = () => {

    const navigate = useNavigate();


    const { userDetails, setLoading, setUserDetails, getUserDetails, user, toaster, amounts, setAmounsts } = useContext(ContextApi);

    // console.log(amounts);

    // const [bank_details, setBank_details] = useState(
    //     {
    //         fullName: '',
    //         bankAccount: '',
    //         ifsc: '',
    //     }
    // )
    const [bank_details, setBank_details] = useState(userDetails?.bank_details)

    const [deposit, setDeposit] = useState()
    const [wpwd, setWpwd] = useState()
    const [wpwd2, setWpwd2] = useState(localStorage.getItem('wpwd'))

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    const withdrawDate = new Date(userDetails?.lastWithdrawal)
    withdrawDate.setHours(0, 0, 0, 0)

    const isBetween = () => {
        var startTime = '10:00:00';
        var endTime = '18:00:00';

        var currentDate = new Date()

        var startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        var endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);


        var valid = startDate < currentDate && endDate > currentDate;
        //console.log(valid);
        return valid;
    }

    const handleWithdrawal = async () => {

        if (Number(deposit) === false || Number(deposit) <= 0) {
            toaster('Enter a valid number');
            return;
        }

        if ((Number(deposit)) < Number(amounts.mwamount)) {
            //console.log((Number(deposit)+Number(amounts.withdrawal_fee)), Number(amounts.mwamount));
            toaster(`Amount should be greater than ${amounts.mwamount}`);
            //console.log(deposit, amounts.amount);
            return;
        }

        if (withdrawDate.toDateString() === date.toDateString()) {
            toaster('you can withdraw once in a day.')
            return
        }

        if ((Number(deposit) > 50000)) {
            toaster('Amount should not be greatr than Rs 50,000');
            return;
        }

        if (((Number(deposit)) > Number(userDetails.balance))) {
            toaster('You dont have enough balance');
            return;
        }
        //&& otp === otpfield
        if (userDetails.wpwd === wpwd) {
            try {
                //const docRef1 = 
                var temp_details = bank_details;
                delete temp_details._id;

                setLoading(true)

                await axios.post(`${BASE_URL}/place_withdrawal`, {
                    withdrawalAmount: (Number(deposit)),
                    ...temp_details,
                    afterDeduction: (Number(deposit) - (Number(amounts.withdrawal_fee) * Number(deposit) / 100)),
                    user_id: localStorage.getItem('uid'),
                    time: new Date(),
                    balance: userDetails.balance,
                    status: 'pending'
                }).then(() => {
                    setLoading(false)
                    toaster('Withdrawal request placed successfully!');
                    setTimeout(() => {
                        navigate('/widthdrawlrecords')
                    }, 3000);
                }).catch(e => {
                    setLoading(false)
                    toaster("some error occured")
                    console.log(e);
                })

            } catch (e) {
                setLoading(false)
                toaster('error adding document')
                console.error("Error adding document: ", e);

            }
        } else {
            setLoading(false)
            toaster('Trade Password is incorrect');
            //console.log(wpassword, loc.state.withdrawalPassword);
        }

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

    useEffect(() => {

        if (wpwd2 === 'undefined') {
            toaster('Set Trade Password')
            setTimeout(() => {
                navigate('/widthdrawlpassword')
            }, 3000);
        }

        else if (userDetails?.bank_details.bankAccount.length === 0) {
            toaster("Add bank details first")
            setTimeout(() => {
                navigate('/bankcardadd')
            }, 3000);
        }
    }, [])


    // console.log(bank_details,'withdrawl');


    console.log();




    return (
        <>
            {/* <div className="after:bg-white after:contents-[' '] after:fixed ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed bg-[rgb(1,77,173)] z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/account'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                <LiaAngleLeftSolid size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >My Bank Account</h2>

                        </div>
                    </header>

                    <div className="mx-auto relative z-[1]">

                        <div className="bg-[rgb(1,77,173)] px-5 pt-5 overflow-hidden invite">

                            <div className="flex flex-wrap items-center mb-5 ">
                                <div className="mt-[10px]">
                                    <h3 className='text-[30px] font-bold text-white leading-none' >
                                        <em className='mr-1 p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                        {(Number(userDetails?.balance)).toFixed(2)}
                                    </h3>
                                    <span className='text-base text-[#fffc] opacity-80 leading-none'>Withdrawable account balance</span>
                                </div>
                            </div>

                            <div className="">
                                <div className=" px-5 pt-[10px] pb-10 relative bankcard rounded-[15px]">

                                    <div className="m-auto relative">
                                        <p className='text-white text-sm tracking-[2px]'>IFSC:{userDetails?.bank_details?.ifsc}</p>
                                    </div>

                                    <div className="py-[10px]">
                                        <h3 className='font-bold text-[26px] text-white'>{userDetails?.bank_details?.bankAccount.toString().replace(/\d{4}(?=.)/g, '$& ')}</h3>
                                    </div>

                                    <div className="">
                                        <span className='text-white font-light text-xs leading-4'>CARD HOLDER</span>
                                        <p className='text-white text-sm tracking-[2px]'>{userDetails?.bank_details?.fullName}</p>
                                    </div>

                                    <div className="w-[45px] top-5 right-[10px] absolute z-[2]">
                                        <img src={chip} alt="" className='w-full opacity-20' />
                                    </div>

                                    <div className="shading rounded-[15px]"></div>

                                </div>
                            </div>

                        </div>

                        <div className="m-[10px] p-[10px]">

                            <div className="mb-5 relative">

                                <div className=" relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">

                                    <div className="flex items-center relative w-full">
                                        <input
                                            onChange={e => setDeposit(e.target.value)}
                                            type="number"
                                            name="withdrawl"
                                            id="withdrawl"
                                            className=' fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent flex-1 '
                                            maxLength={11}
                                            size={11}
                                            placeholder=''
                                        />
                                        <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                        <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Withdrawal Amount</label>

                                    </div>
                                </div>
                            </div>

                            <div className="mb-5 relative">

                                <div className=" relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">

                                    <div className="flex items-center relative w-full ">
                                        <input
                                            onChange={e => setWpwd(e.target.value)}
                                            type="password"
                                            name="wpwd"
                                            id="wpwd"
                                            className=' fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent flex-1 '
                                            maxLength={11}
                                            size={11}
                                            placeholder=''
                                        />
                                        <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                        <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Trade Password</label>

                                    </div>
                                </div>
                            </div>

                            <div className="px-[5px] py-10 mb-5 relative">
                                <div className="flex flex-wrap items-stretch w-full ">

                                    {isBetween() ?

                                        <div onClick={handleWithdrawal} className="bg-[#00aa75] flex-1 text-center h-[45px] leading-[45px] px-5 text-base text-white block rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative  ">
                                            Submit
                                        </div>
                                        :
                                        <div onClick={() => toaster('You can withdraw only between 10:00:00 to 18:00:00 ')} className="bg-[#00aa75] flex-1 text-center h-[45px] leading-[45px] px-5 text-base text-white block rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative  ">
                                            Submit
                                        </div>
                                    }

                                </div>
                            </div>

                        </div>

                        <div className="mx-[10px] p-5">
                            <div className="my-5">
                                <p className='leading-tight py-[2px] text-[#4b4d5e] mb-[10px]'>1. The daily withdrawal time is from 10:00:00 to 18:00:00</p>
                                <p className='leading-tight py-[2px] text-[#4b4d5e] mb-[10px]'>2. The single withdrawal amount is between 300 and 50000</p>
                                <p className='leading-tight py-[2px] text-[#4b4d5e] mb-[10px]'>3. 10% of the withdrawal amount will be charged as tax for each withdrawal</p>
                                <p className='leading-tight py-[2px] text-[#4b4d5e] mb-[10px]'>4. In order to facilitate financial settlement, you can only apply for cash withdrawal 1 times a day</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div> */}

            <section className="withdraw-page flex flex-col">
                <div className="withdraw-page-content flex-1">
                    <div className="input-amount">
                        <div className="text-center">
                            <div className="title">Withdraw</div>
                            <div className="withdrawBalance">Withdraw Balance {(Number(userDetails?.balance)).toFixed(2)}
                            </div>
                        </div>
                        <div className="flex items-center input-amount-content">
                            ₹
                            <input
                                placeholder="0"
                                type="number"
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="trade-password relative">
                        <div className="label absolute">Trade Password </div>
                        <input
                            type="password"
                            placeholder="Please enter your tradePin PIN"
                            style={{ width: '100%' }}
                        />
                    </div>
                    {/* <div className="select-bank">
                        <div className="title">Select receiving bank card</div>
                        <div role="radiogroup" className="select-bank-content van-radio-group">
                            {userDetails?.bank_details?.fullName &&
                                <div className="">
                                    <input type='radio' className='' />{userDetails?.bank_details?.bankAccount} ({userDetails?.bank_details?.fullName})
                                </div>
                            }
                        </div>
                    </div> */}
                    <div className="withdraw-page-content-tips mt-5">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none" className='inline-block'>
                                <path d="M30.5 3.75C16.0026 3.75 4.25 15.5026 4.25 30C4.25 44.4975 16.0025 56.25 30.5 56.25C44.9975 56.25 56.75 44.4975 56.75 30C56.75 15.5026 44.9975 3.75 30.5 3.75ZM30.5 52.5C18.0736 52.5 8 42.4264 8 30C8 17.5736 18.0736 7.5 30.5 7.5C42.9264 7.5 53 17.5736 53 30C53 42.4264 42.9264 52.5 30.5 52.5Z" fill="#FF8F0C"></path>
                                <path d="M26.75 43.125C26.75 44.1196 27.1451 45.0734 27.8484 45.7766C28.5516 46.4799 29.5054 46.875 30.5 46.875C31.4946 46.875 32.4484 46.4799 33.1516 45.7766C33.8549 45.0734 34.25 44.1196 34.25 43.125C34.25 42.1304 33.8549 41.1766 33.1516 40.4734C32.4484 39.7701 31.4946 39.375 30.5 39.375C29.5054 39.375 28.5516 39.7701 27.8484 40.4734C27.1451 41.1766 26.75 42.1304 26.75 43.125Z" fill="#FF8F0C"></path>
                                <path d="M30.5 13.125C27.6523 13.125 25.3438 15.4335 25.3438 18.2812C25.3438 18.4393 25.3437 18.75 25.5788 19.8246L28.625 33.75C28.625 34.7855 29.4645 35.625 30.5 35.625C31.5355 35.625 32.375 34.7855 32.375 33.75L35.4212 19.8246C35.6562 18.75 35.6562 18.4393 35.6562 18.2812C35.6562 15.4335 33.3478 13.125 30.5 13.125Z" fill="#FF8F0C"></path>
                            </svg>
                            <div className="withdraw-page-content-tips-title">Withdraw Instructions</div>
                        </div>
                        <ul>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>The daily withdrawal time is from 10:00:00 to 20:00:00
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>
                                The amount of a single withdrawal is 200-50000,
                                only multiples of 100
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>
                                4% of the withdrawal amount will be charged as tax for each withdrawal
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>
                                In order to facilitate financial settlement, you can only apply for cash withdrawal 1 times a day
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="withdraw-page-bottom fixed w-full">
                    <div className="flex">
                        <Link to={'/home'} className="close flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885Z" fill="orange"></path>
                            </svg>
                        </Link>
                        <button onClick={handleWithdrawal} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">NEXT</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Widthdrawl