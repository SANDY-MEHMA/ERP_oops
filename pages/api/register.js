import db from "@/lib/db";

const handleRegister = async (req, res) => {
    if (req.method === 'POST') {
        const {StudentName,FatherName,MotherName,DateOfBirth,Board,Gender,Medium,Category,OtherCategoryDetails,PostalAddress,City,State,PinCode,PhoneNo,Mobile1,Mobile2,Email,LastSchool,PreviousAchievements,studentImage
        } = req.body;
        console.log(req.body);
        

        try {
            const [result] = await db.execute(
                `INSERT INTO studentdetails (
          StudentName, FatherName, MotherName, DateOfBirth, Board, Gender, Medium, Category, OtherCategoryDetails,
          PostalAddress, City, State, PinCode, PhoneNo, Mobile1, Mobile2, Email, LastSchool, PreviousAchievements, studentImage
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    StudentName, FatherName, MotherName, DateOfBirth, Board, Gender, Medium, Category, OtherCategoryDetails,
                    PostalAddress, City, State, PinCode, PhoneNo, Mobile1, Mobile2, Email, LastSchool, PreviousAchievements, studentImage
                ]
            );

            res.status(200).json({ message: "Data inserted", result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Database error', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handleRegister;
