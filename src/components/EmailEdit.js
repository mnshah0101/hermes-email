import SectionTitle from "./SectionTitle";
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import { PuffLoader } from "react-spinners";
import DragDrop from "./DragDrop";
import Message from "./Message";





const EmailEdit = (props) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [active, setActive] = useState(false);
   

  const router = useRouter()

    useEffect(() => {

    if (status == "unauthenticated") {
      router.push("/login")
      return;


    }

 
})    






 return (
  <section id="skill" className="section experience-section">
      <Message message={message} active={active} >
                <button onClick={(e)=>setActive(false)} className='px-btn px-btn-theme'>{message}</button>
              </Message>
    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
      </div>
      <div className="row">
        <DragDrop />
      </div>

      <div className="row">
        </div>



        


        



      
      </div>
      
  </section>
);
}
export default EmailEdit;
