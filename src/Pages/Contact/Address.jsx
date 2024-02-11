import React, {useState} from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import ContactImg from '../../assets/images/contact.png';
import Button from '../../Components/Button';
import { PulseLoader } from 'react-spinners';

export default function Address(){
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [successMessage, setSuccessMessage] = useState();

    const submitInquiry = (e) => {
        e.preventDefault();
        setSuccessMessage();
        let errors = {};
        let formData = {};
        // Using Array.from to convert e.target.elements to an array
        Array.from(e.target.elements).forEach((input) => {
            
            if(!input.value.trim() && input.type !== 'submit'){
                errors[input.name] = `The ${input.name} Field is required`;
            }else{
                formData[input.name] = input.value;
            }
        });

        if (Object.keys(errors).length === 0) {
            setErrors({})
            setLoader(<PulseLoader className='ml-2' color="white" size={10} speedMultiplier={0.7} />);
            setTimeout(function(){
                e.target.reset();
                setLoader(false);
                setSuccessMessage(true);
            },3000)

        }else{
            setErrors(errors);
        }
        
      };

      const onChangeInput = (e) => {
        if(!e.target.value.trim()) {
            setErrors({
             ...errors,
                [e.target.name]: `The ${e.target.name} Field is required`
            })
        }else{
            setErrors({
             ...errors,
                [e.target.name]: ''
            })
        }
      }

    return (
        <div className='md:mx-auto max-w-[1000px] py-[30px] md:py-[100px] mx-3'>
            <div className='md:grid grid-cols-3 gap-20 '>
                <div className='shadow-md hover:shadow-xl rounded-lg p-6 bg-[#F1F5FA] text-center mb-2'>
                    <IoCallOutline className='text-[30px] text-[#2699fb] mx-auto'/>
                    <div className='mt-2'>
                    <h3 className='font-bold text-xl mb-2'>Call the Office</h3>
                        <p>(255) 352-6258</p>
                    </div>
                </div>
                <div className='shadow-md hover:shadow-xl rounded-lg p-6 bg-slate-600 text-center text-white mb-2'>
                    <IoLocationOutline className='text-[30px] text-[#2699fb] mx-auto'/>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xl mb-2'>Office Location</h3>
                        <p>1234 Divi St. #1000, San Francisco, CA 94220</p>
                    </div>
                </div>
                <div className='shadow-md hover:shadow-xl rounded-lg p-6 bg-[#F1F5FA] text-center mb-2'>
                    <MdOutlineMailOutline className='text-[30px] text-[#2699fb] mx-auto'/>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xl mb-2'>Email Us</h3>
                        <p>support@softaweb.com</p>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-20 mt-[30px] md:mt-[100px]'>
                <img src={ContactImg} alt="contact" className='md:mt-[-50px]' />
                <div className='overflow-hidden'>
                    {successMessage && 
                        <div className="bg-green-50 border border-green-400 text-green px-4 py-3 rounded relative mb-5" role="alert">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline"> Your request has been submitted successfully.</span>
                            <span onClick={() => setSuccessMessage(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </span>
                        </div>
                    }
                    <form onSubmit={(e) => submitInquiry(e)} action="#">
                        <div className='mb-5'>
                            <input onChange={(e) => onChangeInput(e)} type="text" name='name' placeholder='Enter your name' className={`w-full border ${errors.name ? 'border-rose-600' : 'border-slate-500'} rounded-md py-3 px-2 focus:border-color-[#2699fb] focus:shadow-lg`}/>
                            {errors.name && <p className='text-red-500 pt-1'>{errors.name}</p>}
                        </div>
                        <div className='mb-5'>
                            <input onChange={(e) => onChangeInput(e)} type="email" name="email" placeholder='Enter your email' className={`w-full border ${errors.email ? 'border-rose-600' : 'border-slate-500'} rounded-md py-3 px-2 focus:border-color-[#2699fb] focus:shadow-lg`}/>
                            {errors.email && <p className='text-red-500 pt-1'>{errors.email}</p>}
                        </div>
                        <div className='mb-5'>
                            <input onChange={(e) => onChangeInput(e)} type="text" name="subject" placeholder='Enter your subject' className={`w-full border ${errors.subject ? 'border-rose-600' : 'border-slate-500'} rounded-md py-3 px-2 focus:border-color-[#2699fb] focus:shadow-lg`}/>
                            {errors.subject && <p className='text-red-500 pt-1'>{errors.subject}</p>}
                        </div>
                        <div>
                            <textarea onChange={(e) => onChangeInput(e)} name="message" rows="4" className={`w-full border ${errors.message ? 'border-rose-600' : 'border-slate-500'} rounded-md py-3 px-2 focus:border-color-[#2699fb] focus:shadow-lg`} placeholder='Enter your message'></textarea>
                            {errors.message && <p className='text-red-500 pt-1'>{errors.message}</p>}
                        </div>
                        <Button btnText= 'Send Inquiry' hoverBgColor='[#2699fb]' hoverTxtColor='white' loader={loader}/>
                    </form>
                </div>
            </div>
        </div>
        
    )
}