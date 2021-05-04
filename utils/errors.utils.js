module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };
  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caracteres minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.email = "Cet email est déjà enregistré";

 if (err.code ===11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email= "Cet email est déja enregistré"

  return errors;
};

module.exports.signInErrors = (err)=>{
    let errors = {email:"", password:""}

    if(err.message.includes("email")) 
    errors.email="Email inconnu"

    if(err.message.includes("password"))
    errors.password = "Le mot de passe est erroné"

    return errors
}

module.exports.uploadErrors =(err)=>{
  let errors={format:"",maxSize:""}

   if(err.message.includes("Invalid file"))
   errors.format="Format incompatible";

   if(err.message.includes("Max size"))
   errors.maxSize ="Le fichier dépasse 500ko"

   return errors;
}