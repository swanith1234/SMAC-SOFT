import nodemailer from "nodemailer";
import { User } from "../models/user.js";
import { Application } from "../models/application.js";
import { Employer } from "../models/employer.js";
import { google } from "googleapis";
const CLIENT_ID =
  "322077792958-jh3aqn30o4n6k3dc7gst0l7jq97bn1k3.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04TT7Z_EB7pNWCgYIARAAGAQSNwF-L9Ir-wp2oyE-8RhGUK9hh0L2jAbv3v_KdgXhEGd_xxhRQ2BtqeeMmC7So19qGtKF-XMR6Rg";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (req, res) => {
  console.log("request");
  console.log(req.params);

  try {
    const clickedUser = await User.findOne({ email: req.params.id });

    let dbusers = await User.find({ email: { $ne: req.params.id } });
    console.log(dbusers);

    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "swanithpidugu@gmail.com",
        CLIENT_ID,
        CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: oAuth2Client.getAccessToken(),
      },
    });

    await Promise.all(
      dbusers.map(async (user) => {
        let mailDetails = {
          from: "mushumohammad61@gmail.com",
          to: "swanithpidugu@gmail.com",
          subject: "Test mail",
          text: `Hello swanith, how are you?`,
        };

        await mailTransporter.sendMail(mailDetails);
        console.log("Email sent successfully");
      })
    );

    res.status(200).send("Emails sent successfully");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

const sendEmailSelect = async (req, res) => {
  console.log("request");
  console.log(req.params);

  try {
    const application = await Application.findOne({ _id: req.params.id });
    const employer = await Employer.findOne({
      _id: application.employerId.user,
    });

    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "swanithpidugu@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: oAuth2Client.getAccessToken(),
      },
    });

    let mailOptions = {
      from: "swanithpidugu@gmail.com",
      to: application.email,
      subject: "Sending Email using Node.js",
      text: `congratulations ${application.name} you got selected`,
    };

    const result = await transport.sendMail(mailOptions);
    console.log("Email sent successfully");

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { sendEmail, sendEmailSelect };
