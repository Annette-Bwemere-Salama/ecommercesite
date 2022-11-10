const name = 'Max';
const age = 29;
const hasHobbies = true;


age = 30;
const  summarizeUser = (userName, userAge, userHoby) => {
    return(
        "Name is" + 
        userName + 'age is' + 
        userAge + 
        userHoby
    );
}

console.logsummarizeUser(name, age, hasHobbies);