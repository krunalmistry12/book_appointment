// import React, {useState, useContext, useEffect } from 'react'
// import {useParams} from 'react-router-dom'
// import {AppContext} from '../context/AppContext'
// import { assets } from '../assets/assets'


// const Appoitment=()=>{
//   const {docId}=useParams()
//   const {doctors,currencySymbol}=useContext(AppContext)
//   const [docInfo , setDocInfo]=useState(null)
//   const [docSlots,setDocslots]=useState([])
//   const [slotIndex,setSlotsIndex]=useState(0)
//   const [slotTime,setSlottime]=useState('')
  
//   const daysofWeek=['SUN','MON','TUE','WED','THU','FRI','SAT'];

//   const fetchDocInfo = async() =>{
//     const docInfo=doctors.find(doc=>doc._id === docId);
//     setDocInfo(docInfo);
//     console.log(docInfo);
    
//   };
//   const getAvaliableSlots=async()=>{
//     try{setDocslots()
//     let slots=[];
//     //getting currrent date
//     let date=new Date()
//     const today = new Date();
     
//     for(let i=0;i<7;i++){
//       //getting date with index
//       let currrentDate=new Date(today)
//       currrentDate.setDate(today.getDate()+i)
//       currrentDate.setHours(10, 0, 0, 0); // Start time at 10:00 AM

//       //setting time of the date with time
//       let endTime=new Date()
//       endTime.setDate(today.getDate() +  i)
//       endTime.setHours(21,0,0,0)  //end time 9:00 am

//       //setting hours
//       if(today.getDate() === currrentDate.getDate()){
//         currrentDate.setHours(currrentDate.getHours() > 10 ? currrentDate.getHours() + 1 :10)
//         currrentDate.setMinutes(currrentDate.getMinutes() > 30 ? 30 :0)

//       }
//       else{
//         currrentDate.setHours(10)
//         currrentDate.setMinutes(0)
//       }
//       let timeSlots=[]  ;
//       const uniqueDays = new Set();


//       while(currrentDate < endTime){
//         let formattedTime = currrentDate.toLocaleTimeString([], {hour:'2-digit' , minute:'2-digit'})

//         //add slote to array
//         // timeSlots.push({
//         //   datetime: new Date(currrentDate),
//         // time:formattedTime
//         // })
//         // its for the bokking slots ma date line ma show kre like 12,13,14 like
//         const dateKey = currrentDate.toDateString();
//         if (!uniqueDays.has(dateKey)) {
//           uniqueDays.add(dateKey);
//           timeSlots.push({
//             datetime: new Date(currrentDate),
//             time: formattedTime,
//           });
//         }

//         // increment time by 30 minutes
//         currrentDate.setMinutes(currrentDate.getMinutes() + 30)

//       }
//       slots=[...slots,...timeSlots]
      
//     }
//     setDocslots(slots/*prev =>([...prev,timeSlots])*/)
//   }catch(error){
//     console.error("eoor fetching avaliable slots:" ,error);
    
//   }
    
//   }
//   useEffect(()=>{
//     fetchDocInfo()
//   },[doctors,docId])

//   useEffect(()=>{
//     getAvaliableSlots()
//   },[docInfo])
  
//   useEffect(()=>{
//     console.log(docSlots);    
//   },[docSlots]);

//   return (
//     <div>
//          {/* doctors information */}
//          {docInfo ? (
//          <div className='flex flex-col sm:flex-row gap-4'>
          
//           <div>
//             <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name}/>
//           </div>
//           <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
//               {/* Doc info : name,degreee,exper */}
//               <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'> 
//                   {docInfo.name}
//                   <img className='w-5' src={assets.verified_icon} alt=""/>
//               </p>
//               <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
//                 <p>{docInfo.degree} - {docInfo.speciality}</p>
//                 <button className='py-0.5 px-2 border text-xs rounded-full bg-primary text-white'>{docInfo.experience}</button>
//               </div>

//               {/* Doctor About */}
//               <div >
//                 <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon}/></p>
//                 <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
//               </div>
//               <p className='text-gray-500 font-medium mt-4'>
//                 Appoitment Fee:  
//                 <span className='text-gray-600'> {currencySymbol}{docInfo.fees}</span>
//               </p>
//           </div>
//          </div>
//         ):(<p>Loading...</p>)}


//         {/* // BOOKING SLOTS */}
//         <div className='sm:ml-72 sm:pl-4 mt-4 fonr-medium text-gray-700'>
//           <p>Booking Slots</p>
//           <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
//         <p>Booking Slots</p>
//         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//           {docSlots.length > 0 ? (
//             docSlots.map((slot, index) => (
//               // Check if slot and slot.datetime exist before accessing
//               slot && slot.datetime ? (
//                 <div onClick={()=>setSlotsIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
//                   <p>{ daysofWeek[slot.datetime.getDay()]}</p>
//                   <p>{slot.datetime.getDate()}</p>
//                   {/* <p>{slot.time}</p> */}
//                 </div>
//               ) : null // Render nothing if slot is undefined or does not have datetime
//             ))
//           ) : (
//             <p>No available slots.</p>
//           )}
//         </div>
//         </div>

//         </div>
//         <div>
//         {docSlots.length > 0 && docSlots[slotIndex] ? (
//           <p>{docSlots[slotIndex].time}</p>
//         ) : (
//           <p>Select a slot to see the time.</p>
//         )}
//       </div>
//     </div>

    
//   )
// }

// export default Appoitment;
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import ReletedDoctor from '../components/ReletedDoctor';

const Appoitment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [slotIndex, setSlotsIndex] = useState(0);

  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    try {
      let slots = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        currentDate.setHours(10, 0, 0, 0); // Start time at 10:00 AM

        const endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0); // End time at 9:00 PM

        let dailySlots = [];
        while (currentDate < endTime) {
          const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          dailySlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        slots.push({
          date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + i),
          availableSlots: dailySlots,
        });
      }

      // Filter out time slots based on the current time
      const now = new Date();
      for (const slot of slots) {
        if (slot.date.toDateString() === now.toDateString()) {
          slot.availableSlots = slot.availableSlots.filter(s => s.datetime >= now);
        }
      }

      setDocSlots(slots);
    } catch (error) {
      console.error("Error fetching available slots:", error);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const selectedDaySlots = docSlots.find(slot => slot.date.toDateString() === date.toDateString());
    setAvailableTimeSlots(selectedDaySlots ? selectedDaySlots.availableSlots : []);
    setSlotsIndex(0); // Reset selected time slot index
  };

  return (
    <div>
      {/* Doctors information */}
      {docInfo ? (
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {docInfo.name}
              <img className='w-5' src={assets.verified_icon} alt="" />
            </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full bg-primary text-white'>{docInfo.experience}</button>
            </div>
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} /></p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>
              Appointment Fee:
              <span className='text-gray-600'> {currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Booking Dates */}
      <div className='sm:ml-72 sm:pl-4 mt-4 fonr-medium text-gray-700'>
        <p className='font-medium text-gray-700'>Booking Dates</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.map((slot, index) => (
            <div 
              key={index}
              onClick={() => handleDateClick(slot.date)}
              className={`text-center py-4 min-w-24 rounded-full cursor-pointer border ${selectedDate?.toDateString() === slot.date.toDateString() ? 'bg-primary text-white' : 'border-gray-200'}`}
            >
              <p>{daysofWeek[slot.date.getDay()]}</p>
              <p>{slot.date.getDate()}</p>
            </div>
          ))}
        </div>
      

      {/* Available Time Slots for Selected Date */}
      
        
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
          {availableTimeSlots.length > 0 ? (
            availableTimeSlots.map((slot, index) => (
              <div 
                key={index}
                onClick={() => setSlotsIndex(index)} 
                className={`text-sm font light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer  ${slotIndex === index ? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`}
              >
                <p>{slot.time}</p>
              </div>
            ))
          ) : (
            <p>No available slots for the selected date.</p>
          )}
        </div>
        
      

      {/* Selected Slot Time */}
      <div className='mt-2 text-gray-400'>
        {availableTimeSlots.length > 0 && availableTimeSlots[slotIndex] ? (
          <p>Selected Slot Time: {availableTimeSlots[slotIndex].time}</p>
        ) : (
          <p>Select a slot to see the time.</p>
        )}
      </div>
      <button 
        className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
    </div>
    {/* listining releted doctor */}
    {docInfo && 
    (<ReletedDoctor docId={docId} speciality={docInfo.speciality}/>)}
    </div>
  );
};

export default Appoitment;

