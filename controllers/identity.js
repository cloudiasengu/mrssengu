import { connectToDatabase } from "@/db";
import Identity from "@/modelIdentity";

export async function createIdentity(req, res) {
    try {
      const { fullName, gender, dateOfBirth, placeOfBirth, nationality, maritalStatus, residentialAddress, contact, otherInformation } = req.body;
  
      await connectToDatabase();
  
      const newIdentity = new Identity({
        fullName,
        gender,
        dateOfBirth,
        placeOfBirth,
        nationality,
        maritalStatus,
        residentialAddress,
        contact,
        otherInformation,
      });
  
      await newIdentity.save();
  
      res.status(201).json({ message: "Identity created successfully", identity: newIdentity });
    } catch (error) {
      console.error("Error creating identity", error);
      res.status(500).json({ message: "Error creating identity" });
    }
  }
  
  