const validation = (values) => {

    let errors={};
    if(!values.firstName){
        errors.firstName="First name is required.";
    }
    if(!values.lastName){
        errors.lastName="Last name is required.";
    }
    if(!values.email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Use correct format for your email.";
    }
    if(!values.username){
        errors.username="Username is required.";
    } else if(values.username.length < 3){
        errors.username="Username must be longer than 3 characters.";
    }
    if(!values.password){
        errors.password="Password is required.";
    } else if(values.password.length < 6){
        errors.password="Password must be longer than 6 characters.";
    }

    return errors;
};

export default validation;