function generateRandomIdx(num){
    //console.log("working");
    return Math.floor(Math.random()*num);
}

let obj={
    advice:["study hard","think about career","get up early in the morning"],
    mood:["good","bad"],
    toDo:["play more","trust no one","be humble"]
}

let msgArr=[]

for(let item in obj){
    let idx=generateRandomIdx(obj[item].length);
    switch(item){
        case 'advice':
            msgArr.push(`You should ${obj[item][idx]}.`);
            break;
        case 'mood':
            msgArr.push(`You are in a ${obj[item][idx]} mood.`);
            break;
        case 'toDo':
            msgArr.push(`You should ${obj[item][idx]}.`);
            break;
        default:
            msgArr.push("Not enough information.");
            break;
    }
}

function generateMsg(msg){
    const formattedMsg=msg.join('\n')
    console.log(formattedMsg)
}
generateMsg(msgArr)