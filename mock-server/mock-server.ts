
export const queryServer = (filter: string)=>{
    if(filter === 'Admin'){
        return [
                  { id: "1", name: "Jonh Smith", role: "Admin" },
                  { id: "2", name: "Adam Muller", role: "Admin" },
                  { id: "3", name: "Perri Smith", role: "Admin" },
                ]
    } else if(filter === 'Manager'){
        return [
                  { id: "1", name: "Jonh Doe", role: "Manager" },
                  { id: "2", name: "Cyril French", role: "Manager" },
                  { id: "3", name: "Ozzy Terry", role: "Manager" },
                ]
    } else{
        return []
    }
}