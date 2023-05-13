import heroImage from '../assets/illustration-hero.svg'
import musicIcon from '../assets/icon-music.svg'
import { useState } from 'react'
import Modal from './Modal'

const OrderSummary = () => {
    const [modal, setModal] = useState(false)
    const [plan, setPlan] = useState('$9.99/month')
    const handleClick = () => {
        setModal((prev) => !prev)
    }
    return (
        <div className="flex flex-col items-center w-[400px] shadow-lg rounded-xl font-defaultFont relative sm:m-5">
            <img
                className="rounded-t-xl"
                src={heroImage}
                alt="person listening to music"
            />
            <div className="p-6">
                <div className="flex flex-col items-center">
                    <h1 className="mt-4 font-bold text-2xl">Order Summary</h1>
                    <p className="w-full text-center mt-4">
                        You can now listen to millions of songs, audiobooks, and
                        podcasts on any device anywhere you like!
                    </p>
                </div>
                {modal && (
                    <Modal setModal={setModal} plan={plan} setPlan={setPlan} />
                )}
                <div className="flex justify-around w-full bg-gray-100 items-center p-4 rounded-lg">
                    <div className="flex ">
                        <img className="mr-4" src={musicIcon} alt="music" />
                        <div className="flex items-start flex-col mr-14">
                            <p className="font-semibold">Payment Plan</p>
                            <p className="text-gray-500">{plan}</p>
                        </div>
                    </div>

                    <a
                        onClick={handleClick}
                        href="#"
                        className="underline text-blue-700 font-bold "
                    >
                        Change
                    </a>
                </div>
                <button className="block w-full bg-indigo-700 rounded-lg p-5 mt-4 text-white font-bold text-xl shadow-xl shadow-indigo-200 hover:bg-indigo-500 cursor-pointer">
                    Proceed to Payment
                </button>
                <button className="block w-full text-gray-500 font-bold mt-4 text-xl hover:text-black cursor-pointer">
                    Cancel Order
                </button>
            </div>
        </div>
    )
}
export default OrderSummary
