import SectionTitle from "./SectionTitle";
import { PuffLoader } from "react-spinners";
import {useState} from "react"
import { set } from "mongoose";
const serviceData = [
  {
    id: 1,
    name: "Bundesliga Matchday 18: RB Leipzig vs. Bayer Leverkusen",
    imageUrl: "https://ci3.googleusercontent.com/meips/ADKq_NZoNSsoeca5R2ZpTjzU_Hqc43Te1lWRCPqEyKFsR4hpWr-Z3yQ0bj0_as8Qrs6r8tlw7rIh5UsZ-ScBTfj2KplVDdSHoLYw3aVpTfjVokSIbnP3aWd6jCnXkvAv=s0-d-e1-ft#https://news.bundesliga.com/imgproxy/img/2041575200/xavi_wittz_600.jpg", // Update with actual image path
    desc: "Subplots abound when RB Leipzig host Bundesliga leaders Bayer Leverkusen in Matchday 18's headline fixture on Saturday. Can Leipzig get back on track? Will Leverkusen stay unbeaten? Who will win out between respective December Rookie and Player of the Month winners Xavi and Florian Wirtz? You do not want to miss it!",
    button: "Read More",
    button_link: "https://www.bundesliga.com/en/bundesliga/news/rb-leipzig-bayer-leverkusen-live-line-ups-stats-patrik-schick-patrick-schick-19129"
  },
  // ... other services
];

const email_header = {
  logo:'https://hermes-email-logos.s3.amazonaws.com/companyLogo_black_hermes_text.png'
}




const override = {
  display: "none",
  "position": "fixed",
  "top": "50%",
  "left": "50%",
  "margin": "auto",
  "borderColor": "red",
  zIndex: 9999
};

const DragDrop = () => {
  const [services, setServices] = useState(serviceData);
  const [editServiceId, setEditServiceId] = useState(null);





  const addNewBox = () => {
    const newId = services.length + 1;
    const newService = {
      id: newId,
      imageUrl: "", // Provide a default image path
      desc: "Description of new service.",
      name: "New Service",
      button: "Read More",
      button_link: "https://www.hermesgroup.email"
    };
    setServices([...services, newService]);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };
  


  const handleServiceUpdate = (id, field, value) => {
    setServices(services.map(service => {
      if (service.id === id) {
        return { ...service, [field]: value };
      }
      return service;
    }));
  };

  const handleImageUpload = async (e, id) => {
    try{
      document.getElementById("puffloader").style.display = "block";

    const file = e.target.files[0]; // getting a hold of the uploaded file

    // make image a data uri from the file and set it to a const image
    const image = await new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    // send buffer_url to editEmail api
    const response = await fetch("/api/addImage", {
        method: "POST",
        body: JSON.stringify({image: image}),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();

    if (response.status === 200) {
            document.getElementById("puffloader").style.display = "none";

    
      handleServiceUpdate(id, 'imageUrl', data.image_destination);
    }
  } catch (err) {
    console.log("there was an error")
    console.log(err)
          document.getElementById("puffloader").style.display = "none";

    
  }
    
}

  const toggleEditMode = (id) => {
    setEditServiceId(editServiceId === id ? null : id);
  };

  return (
    <>
     <PuffLoader id="puffloader" cssOverride={override} color="#36d7b7" />
    
    <section id="services" className="section services-section" style={{backgroundColor:"#F4F5F6"}}>

      
             


      <div className="container" >
        <h1 className="title w-100 text-center text-black pb-4">Email Editor</h1>
        <div className="row gy-4 d-flex justify-content-center" >
          
          <div className="col-8">
            <div className="email-header">
              <img style={{height:"100px", width:"auto"}} src={email_header.logo} alt="Hermes Group" />
            </div>
      
          </div>
          
          {services.map((service) => (
            <div className="col-8" key={service.id}>
              <div className="feature-box-01 d-flex flex-column justify-content-center align-items-center" style={{ textAlign: 'center', height: '668px', position: 'relative' }}>
              <button 
  onClick={() => deleteService(service.id)}
  style={{
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>
</button>

                
                {service.imageUrl != "" ?  (<img 
                  src={service.imageUrl} 
                  alt={service.name} 
                  style={{ 
                    width: '600px', 
                    height: '300px', 
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                  }} 
                  className="image-full"
                />) : (
                  
                  <div className="form" >
  <input className="" type="file" onChange={(e) => handleImageUpload(e, service.id)} / > 
  <p>Click Here To  Upload Your Image</p>
</div>
                  
               )}
                <div className="feature-content">
                  <h5
                    contentEditable
                    onBlur={(e) => handleServiceUpdate(service.id, 'name', e.target.innerText)}
                    style={{ paddingTop: '20px' }}
                  >
                    {service.name}
                  </h5>
                  <p
                    contentEditable
                    onBlur={(e) => handleServiceUpdate(service.id, 'desc', e.target.innerText)}
                    style={{ paddingTop: '10px' }}
                  >
                    {service.desc}
                  </p>
                 
                    <h6
                    contentEditable
                    onBlur={(e) => handleServiceUpdate(service.id, 'button', e.target.innerText)}
                    style={{ paddingTop: '20px' }}
                  >
                    {service.button}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={addNewBox} 
            className="px-btn px-btn-theme"
          >
            Add New Box
          </button>
        </div>
      </div>
    </section>
    </>
  );
};


export default DragDrop;