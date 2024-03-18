import React, { useState } from "react";
import './createEvent.css';
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../page";
import { v4 as uuidv4 } from 'uuid';


function CreateEventForm() {
  const [EventName, setEventName] = useState('');
  const [EventDescription, setEventDescription] = useState('');
  const [EventDate, setEventDate] = useState('');
  const [EventTime, setEventTime] = useState('');
  const [EventImage, setEventImage] = useState(null); 
  const [FreeEntry, setFreeEntry] = useState('');
  const [TicketEntry, setTicketEntry] = useState(''); 
  const [PhisicalMode, setPhisicalMode] = useState(''); 
  const [VirtualMode, setVirtualMode] = useState(''); 
  const [RegistrationLink, setRegistrationLink] = useState(''); 
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);

  const navigate = useNavigate();

  const generateUniqueLink = () => {
    return uuidv4(); // Generating a unique identifier using UUID
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  const registrationLink = generateUniqueLink(); // Generating a unique registration link
    setRegistrationLink(registrationLink); // Updating the state with the generated link
    setIsLinkGenerated(true); // Setting the flag to indicate that the link is generated
    navigate('/eventLink', { state: { registrationLink } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      setEventImage(file);
    }
  };

  return(
    <>
      <div className="Container-fluid CEContainer col-md-9 col-8 ml-sm-auto col-lg-10 px-md-4">
        <form onSubmit={handleSubmit} className=" CEForm">
          <h1>Create Event</h1>
          <input
            required
            className="col-md-12"
            id="EnameInput"
            type="text"
            placeholder="EVENT NAME"
            value={EventName}
            onChange={(e) => setEventName(e.target.value)}
          />
           <input
            required
            className="col-lg-12 col-12 col-md-12"
            id="EdesInput"
            type="text"
            placeholder="Provide a brief description of the event"
            value={EventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
          <div className="row ImageContainer col-lg-12">
            <input
              required
              className="col-lg-3 col-md-12"
              id="EImageInput"
              type="file"
              onChange={handleImageChange}
            />
            {/* Display the file name if a file is selected */}
            {EventImage && (
              <p>Selected file: {EventImage.name}</p>
            )}
             <div style={{display:"flex",flexWrap:'wrap', flexDirection:'column', gap:'30px'}} className="col-lg-8">
                  <label style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}} className="DTcontainer">
                  <input
                  style={{background:'none',color:'#fff',border:'1px solid #E2E700',borderRadius:'9px'}}
                    required
                    className="col-lg-4 col-md-6 col-12"
                    id="EDateInput"
                    type="date"
                    placeholder="EVENT DATE"
                    value={EventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />

                  <input
                  style={{background:'none',color:'#fff',border:'1px solid #E2E700',borderRadius:'9px'}}
                    required
                    className="col-lg-4 col-md-6 col-12"
                    id="ETimeInput"
                    type="time"
                    value={EventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                  </label>

                  <section className="checkContainer" style={{display:'flex', flexDirection: 'column',gap:'30px'}}>
                      <label style={{display:'flex',gap:'15px'}} >Entry:
                        <label>Free</label>
                        <input
                          required
                          className="col-lg-2"
                          id="FreeInput"
                          type="checkBox"
                          value={FreeEntry}
                          onChange={(e) => setFreeEntry(e.target.value)}
                        />
                        <label>Ticketed</label>
                        <input
                          required
                          className="col-lg-2"
                          id="TicketInput"
                          type="checkBox"
                          value={TicketEntry}
                          onChange={(e) => setTicketEntry(e.target.value)}
                        />
                      </label>

                      <label style={{display:'flex',gap:'15px'}}>Event Mode:
                        <label>Phisical</label>
                        <input
                          required
                          className="col-lg-2"
                          id="PhisicalInput"
                          type="checkBox"
                          // placeholder="EVENT MODE"
                          value={PhisicalMode}
                          onChange={(e) => setPhisicalMode(e.target.value)}
                        />
                        <label>Virtual</label>
                        <input
                          required
                          className="col-lg-2"
                          id="VirtualInput"
                          type="checkBox"
                          placeholder="EVENT MODE"
                          value={VirtualMode}
                          onChange={(e) => setVirtualMode(e.target.value)}
                        />
                      </label>
                  </section>
              </div>
          </div>
          <button type="submit" className="regLinkBtn">Generate Registration Link</button>
        </form>
        {/* Displaying the generated registration link only when it's generated */}
        {isLinkGenerated && (
          <div>
            <h2>Registration Link:</h2>
            <a href="dashboard">{RegistrationLink}</a>
          </div>
        )}

      </div>
    </>
  )
}




function CreateEvent(){
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <CreateEventForm />
      </div>
    </div>
  );
}
export default CreateEvent;
