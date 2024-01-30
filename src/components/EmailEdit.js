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
  const [active, setActive] = useState(false);

  const { data: session, status } = useSession()
   

  const router = useRouter()

    useEffect(() => {

    if (status == "unauthenticated") {
      router.push("/login")
      return;


    }

 
})    






 return (
  <section id="skill" className="section experience-section" >
     
    <div className="container" >
     
      <div className="row"  >
        <DragDrop />
      </div>

      <div className="row" >
        </div>



        


        



      
      </div>
      
  </section>
);
}
export default EmailEdit;
