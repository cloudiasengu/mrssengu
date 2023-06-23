import { createIdentity } from "@/controllers/identity";

export default function handler(req, res) {
  if (req.method === "POST") {
    createIdentity(req, res);
  } else if (req.method === "GET") {
    getIdentities(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
