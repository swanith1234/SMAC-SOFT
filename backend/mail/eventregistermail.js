import nodemailer from "nodemailer";
import { User } from "../models/user.js";
import { Application } from "../models/application.js";
import { Employer } from "../models/employer.js";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
import "dotenv";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const sendEmailSelect = async (req, res) => {
  console.log("request");
  console.log(req.params);
  const token = req.params.id;
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  try {
    const user = await User.findOne({ _id: decoded.id });

    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "swanithpidugu@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: oAuth2Client.getAccessToken(),
      },
    });

    let mailOptions = {
      from: "swanithpidugu@gmail.com",
      to: user.email,
      subject: "register email",
      text: `Hello ${user.name} you're successfully registered for the slot,stay tuned for further updates`,
    };

    const result = await transport.sendMail(mailOptions);
    console.log("Email sent successfully");

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { sendEmailSelect };
