// async function github() {
//     console.log("Fetching start");
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//     // console.log(data);

//     const parent = document.getElementById('first');

//     for(let user of data) {
//         const element = document.createElement('div')
//         element.classList.add('user');

//         const userImage = document.createElement('img');
//         userImage.src = user.avatar_url;

//         const userName = document.createElement('h2');
//         userName.textContent = user.login;

//         const userProfile = document.createElement('a');
//         userProfile.href = user.html_url;
//         userProfile.textContent = "Visit Profile";

//         element.append(userImage, userName, userProfile);

//         parent.append(element);
//     }
// }
// github();



async function github() {

    try {
        const response = await fetch("https://api.github.com/users");
        if(!response.ok) {
            throw new Error("Data is not present")
        }
        const data = await response.json();
    
        const parent = document.getElementById('first');
    
        for(let user of data) {
            const element = document.createElement('div')
            element.classList.add('user');
    
            const userImage = document.createElement('img');
            userImage.src = user.avatar_url;
    
            const userName = document.createElement('h2');
            userName.textContent = user.login;
    
            const userProfile = document.createElement('a');
            userProfile.href = user.html_url;
            userProfile.textContent = "Visit Profile";
    
            element.append(userImage, userName, userProfile);
    
            parent.append(element);
        }
    }
    catch(error) {
        console.log("Error: ", error);
    };
}

github();
