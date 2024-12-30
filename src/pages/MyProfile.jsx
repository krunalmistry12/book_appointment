import React, { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "kunal",
    image: assets.profile_pic,
    email: "kunalmistry581@gmail.com",
    phone: "+91 70435 45612",
    address: {
      line1: "c-301 cross,richmond",
      line2: "circle, chruch road, london",
    },
    gender: "male",
    dob: "2004-07-17",
  });
  const [isEdit, setIsedit] = useState(false);
  return (
    <div>
      <img src={userData.image} />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>Contact Information:</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }));
                }}
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }));
                }}
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line1}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : 
            <p>{userData.gender}</p>
          }
          <p>BirthDate:</p>
          {
            isEdit
            ?<input type="date"onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              } value={userData.dob}/>
            :<p>{userData.dob}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit
          ?<button onClick={()=>setIsedit(false)}>Save Information</button>
          :<button onClick={()=>setIsedit(true)}>Edit</button>
        }
      </div>
    </div>
  );
}

export default MyProfile;
