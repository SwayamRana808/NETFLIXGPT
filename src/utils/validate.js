export const checkvalid=(email,pass,user,check)=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    const userValid=/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(user)
    if(check){
        if(!userValid) return "Username is not valid (8-20 char)"
    }
    if(!emailRegex) return "Email is not valid!"
    if(!passValid) return "Password is not valid (capital,small,special and number char)"
   
    return null;
}