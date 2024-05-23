export const sendTokenuser = (user, statusCode, res, message) => {
  const token = user.geJWTToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Corrected assignment operator
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true, // Corrected typo in 'success' key
    user,
    message,
    token,
  });
};
export const sendTokenemployer = (employer, statusCode, res, message) => {
  const token = employer.geJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Corrected assignment operator
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    employer,
    message,
    token,
  });
};
