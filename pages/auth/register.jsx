import axios from 'axios';
import React, { useState } from 'react'

function Register() {

  const [studentDetails, setStudentDetails] = useState({
    StudentName : "",
    FatherName: "",
    MotherName: "",
    DateOfBirth: "",
    Board : "",
    Gender: "",
    Medium : "",
    Category: "",
    OtherCategoryDetails: "",
    PostalAddress: "",
    City: "",
    State : "",
    PinCode : "",
    PhoneNo : "",
    Mobile1: "",
    Mobile2: "",
    Email : "",
    LastSchool : "",
    PreviousAchievements : "",
    studentImage: "demo"
  })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(studentDetails);
    try {
      let response = await axios.post("/api/register", studentDetails)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>

      <div>Register</div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Student Name</label>
        <input type="text" value={studentDetails.StudentName} onChange={(e) => setStudentDetails({...studentDetails, StudentName: e.target.value})}/>
        <br />

        <br />
        <label htmlFor="">Father Name</label>
        <input type="text" value={studentDetails.FatherName} onChange={(e) => setStudentDetails({...studentDetails,FatherName: e.target.value })}/>
        <br />

        <br />
        <label htmlFor="">Mother Name</label>
        <input type="text" value={studentDetails.MotherName} onChange={(e) => setStudentDetails({...studentDetails, MotherName: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">DOB</label>
        <input type="date" value={studentDetails.DateOfBirth} onChange={(e) => setStudentDetails({...studentDetails, DateOfBirth:e.target.value})} />

        <br />
        <br />

        <label htmlFor="">Board</label>
        <input type="text" value={studentDetails.Board} onChange={(e) => setStudentDetails({...studentDetails, Board: e.target.value})}/>

        <br />
        <br />

        <label htmlFor="">Gender</label>
        <input type="text" value={studentDetails.Gender} onChange={(e) => setStudentDetails({...studentDetails, Gender: e.target.value})} />
        <br />

        <br />
        <label htmlFor="">Medium</label>
        <input type="text" value={studentDetails.Medium} onChange={(e) => setStudentDetails({...studentDetails, Medium:e.target.value})}/>

        <br />
        <br />

        <label htmlFor="">Category</label>
        <input type="text" value={studentDetails.Category} onChange={(e) => setStudentDetails({...studentDetails, Category: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">Other Category</label>
        <input type="text" value={studentDetails.OtherCategoryDetails} onChange={(e) => setStudentDetails({...studentDetails, OtherCategoryDetails: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">Postal Address</label>
        <input type="text" value={studentDetails.PostalAddress} onChange={(e) => setStudentDetails({...studentDetails, PostalAddress: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">City</label>
        <input type="text" value={studentDetails.City} onChange={(e) => setStudentDetails({...studentDetails, City: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">State</label>
        <input type="text" value={studentDetails.State} onChange={(e) => setStudentDetails({...studentDetails, State: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">Pin Code</label>
        <input type="number" value={studentDetails.PinCode} onChange={(e) => setStudentDetails({...studentDetails, PinCode: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">Phone Number</label>
        <input type="number" value={studentDetails.PhoneNo} onChange={(e) => setStudentDetails({...studentDetails, PhoneNo: e.target.value})} />

        <br />
        <br />

        <label htmlFor="">Mobile 1</label>
        <input type="number" value={studentDetails.Mobile1} onChange={(e) => setStudentDetails({...studentDetails, Mobile1: e.target.value})} />
        <br />
        <br />

        <label htmlFor="">Mobile 2</label>
        <input type="number" value={studentDetails.Mobile2} onChange={(e) => setStudentDetails({...studentDetails, Mobile2: e.target.value})} />
        <br />
        <br />


        <label htmlFor="">Email</label>
        <input type="text" value={studentDetails.Email} onChange={(e) => setStudentDetails({...studentDetails, Email: e.target.value})} />
        <br />
        <br />


        <label htmlFor="">Last School</label>
        <input type="text" value={studentDetails.LastSchool} onChange={(e) => setStudentDetails({...studentDetails, LastSchool: e.target.value})}/>
        <br />
        <br />

        <label htmlFor="">Previous Achievements</label>
        <input type="text"  value={studentDetails.PreviousAchievements} onChange={(e) => setStudentDetails({...studentDetails, PreviousAchievements: e.target.value})}/>

        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Register