const validation = (values) => {

    let errors={};

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