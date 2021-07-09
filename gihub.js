class gitHub{
    constructor(){
        this.client_id = '95d4c2409c97c78b9f34';
        this.client_secret = '33030945043a580081bc1a53ee873cc9cc37c530';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'; 
    }

    async getUser(user){
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const responseRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profileRepo = await responseRepo.json();
        const profileData = await response.json(); 
        return {
            profileData,
            profileRepo
        }     
    }
}