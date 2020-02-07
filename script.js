const rolls = (list) =>{
    let new_list = [...list];
    for(i = 0; i < list.length; i++){
        if (list[i] === 1 ){
            new_list[i + 1] = 0
            
        }
        else if (list[i] === 6 && list[i + 1] !== undefined){
            new_list[i + 1] = list[i + 1] + list[i + 1]
            
        }
    }
    return new_list.reduce((total,currentValue) => {
        return total + currentValue;
      });
}


const rollDice = () =>{
    return Math.floor(Math.random() * 6) + 1
}


let all_rolls = [];
let currentRoll;
function clickRoll(){
    current_roll = rollDice()
    all_rolls.push(current_roll)
    document.getElementById("currentRoll").innerHTML = current_roll;
    document.getElementById("allRolls").innerHTML = all_rolls;
    return all_rolls
};



function playing(){
    if (all_rolls.length > 2){
        total = rolls(all_rolls)
        document.getElementById('total').innerHTML = total
        all_rolls = []
        

    }
    else{
        alert('cannot submit with less than 3 rolls')
    }
};