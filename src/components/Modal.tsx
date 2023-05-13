import { useState } from 'react'
type ModalProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    plan: string
    setPlan: React.Dispatch<React.SetStateAction<string>>
}

const Modal = ({ setModal, plan, setPlan }: ModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setModal(false)
    }

    return (
        <form
            className="w-[250px] p-5  rounded-lg shadow-lg z-100 absolute bg-indigo-700 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center "
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl p-2">Choose a payment plan</h1>

            <div className="flex items-center pl-4 border-gray-200 rounded dark:border-gray-700">
                <label
                    className="cursor-pointer"
                    onClick={() => {
                        setPlan('$9.99/month')
                    }}
                >
                    <input
                        type="radio"
                        name="option"
                        value={plan}
                        checked={plan === '$9.99/month'}
                    />
                    $9.99/month
                </label>
            </div>
            <div className="flex items-center pl-4 border-gray-200 rounded dark:border-gray-700">
                <label
                    onClick={() => {
                        setPlan('$59.99/year')
                    }}
                    className="cursor-pointer"
                >
                    <input
                        type="radio"
                        name="option"
                        value={plan}
                        checked={plan === '$59.99/year'}
                    />
                    $59.99/year
                </label>
            </div>

            <button
                type="submit"
                className="block w-full bg-white text-black rounded-lg p-2 mt-1  text-xl  hover:bg-indigo-500 hover:text-white cursor-pointer"
            >
                Submit
            </button>
        </form>
    )
}
export default Modal
