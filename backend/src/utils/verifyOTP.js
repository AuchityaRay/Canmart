const speakeasy = require('speakeasy');

const verifyOTP = async(userEnteredOTP)=>{

    const secret = "AwesomeJS";
    
    // Verify the OTP entered by the user
    const isValid = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: userEnteredOTP,
        window: 6 // The allowable time window (in number of steps) for OTP verification
    });
    
    if (isValid) {
        return true;
    } else {
        return false;
    }
}
module.exports = verifyOTP;