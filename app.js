const searchQuery = document.getElementById('searchUser'); 
const gihubRequest = new gitHub; 
let ui = new UI; 

searchQuery.addEventListener('keyup',(e)=>{
    const searchUser = e.target.value;
    if(searchUser !== ''){
        gihubRequest.getUser(searchUser)
          .then(data=>{
              if(data.profileData.message === "Not Found"){
                  // show alert 
                  ui.showAlert('User Not found','alert alert-danger'); 
              }else{
                  // show profile 
                  ui.showProfile(data.profileData); 
                  // show repo 
                  ui.showRepo(data.profileRepo); 
              }
          })
          .catch(e=>console.log(e)); 
    }else{
        // clear the body
        ui.clearProfile(); 
    }
});