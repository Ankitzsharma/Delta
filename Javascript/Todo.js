let todo=[];

let operation=prompt("Enter Operation You want To Perform: ");

while(true){
    if(operation==="Quit"){

        console.log("*************************");
        console.log("Quitting App.");
        break;
    }
    if(operation==="List"){
        console.log("------------------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------------")

    } 
    else if(operation==="Add"){
        console.log("------------------------")
        let task=prompt("Please Enter The Task You Want To Add: ");
        todo.push(task);
        console.log("Task Added.")
        // if(task=="skip"){
        //     continue;
        // }
    }
    else if(operation==="Delete"){
        let idx=prompt("Please Enter the task Index.")
        todo.splice(idx,1);
        console.log("Task Deleted.");
    }
    operation=prompt("Please Enter your Request: ")
}