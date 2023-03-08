
//globals

let letters = [];
let indexes = [];
const map_name = document.getElementById("map_name");
const map1img = document.getElementById("map1img");
const map2img = document.getElementById("map2img");
const start_input = document.getElementById("start_input");
const end_input = document.getElementById("end_input");

let selected_map = {
    
    "name":false,
    "map":false
}



//start application

start();





function start(){
    
    for(let a = 0; a <= 25; a++){
    
            letters[String.fromCharCode(97 + a)] = a;
            indexes.push(String.fromCharCode(97 + a));
    }
    
    
    //starts with map1, map1 does not need format
    selected_map.map = map1;
    selected_map.name = "map1";
    
    map_name.innerText = selected_map.name;
} 

function format_map(inmap){

    let map = [];
    
    inmap.forEach((c)=>{
    
        let new_connect = [];
        
        c.connect.forEach((v)=>{
        
            const ob3 = {
            
                "name":v.name,
                "index":letters[v.name],
                "distance":v.distance
            }
            
            new_connect.push(ob3);
        })
    
        let ob2 = {
            
            "name":c.name,
            "index":letters[c.name],
            "connect":new_connect
        }
        
        map.push(ob2);
    })
    
    return map;
} 
    
    
    
function get_distance(){

    let current_map_indexes = [];
    
    selected_map.map.forEach((l)=>{
        
        current_map_indexes.push(l.index);
    })


    if(indexes.includes(start_input.value) && indexes.includes(end_input.value) && current_map_indexes.includes(letters[start_input.value]) && current_map_indexes.includes(letters[end_input.value])){
    
        console.log("both points are elegible, continue process...");
    
    }else{
    
        alert("introduce two points");
        start_input.value = "";
        end_input.value = "";
        return;
    }
    
    const raw_start = start_input.value;
    const raw_end = end_input.value;
    const cities_map = selected_map.map;
    
    const start = letters[raw_start];
    const end = letters[raw_end];
    
    //a good number to simulate until get the must efficient value is:
    const simulations_number = selected_map.map.length * selected_map.map.length;
    let min = 1000;
    
    //the winner set
    let winner_combination;
    
    for(let i = 0; i < simulations_number; i++){
    
        let result = false;
    
        while(!result){
    
            result = simulate(cities_map, start, end);
        }
        
        if(result.walked < min){
        
            min = result.walked;
            winner_combination = result.path;
        }
    }

    let txt = "for the " + selected_map.name + " in a total of: " + simulations_number + " simulations, the best path finded for [ " + raw_start + " " + raw_end + " ] was: [";
    
    winner_combination.forEach((p)=>{
    
        txt += " " + p;
    })
    
    txt += " ] with " + min + " distance units";
    
    document.getElementById("out").innerText = txt;
}
    
function simulate(cities, s, e){

    let path = [];
    
    path.push(indexes[s]);
    
    let walked = 0;
    let option = random_int(0, cities[s].connect.length-1);
    
    path.push(indexes[cities[s].connect[option].index]);
    walked += cities[s].connect[option].distance;
    
    let index = cities[s].connect[option].index;
    
    let connect = get_connect(cities, index);
    let option2 = random_int(0, connect.length-1);
    let checker = (arr, target) => target.every(v => arr.includes(v));
    
    while(index === s || index !== e){
    
        option2 = random_int(0, connect.length-1);
        
        const containing_arr = [];
        
        connect.forEach((c)=>{
        
            containing_arr.push(indexes[c.index]);
        })
        
        if(checker(path, containing_arr)){
        
            return false;
        }else if(path.length === cities.length){
        
            break;
        }else if(connect[option2].index === s || path.includes(indexes[connect[option2].index])){
        
            continue;
        }
        
        const last_connect = connect;
        
        const ob = visit(cities, connect, option2);
        connect = ob.connect;
        walked += ob.distance;
        path.push(indexes[ob.index]);
        
        if(last_connect[option2].index === e || path.length === cities.length){
        
            break;
        }
    }
    
    const result = {
    
        "path":path,
        "walked":walked
    }
    
    return result;
}

function visit(cities, connect, option){

    const result = {
    
        "distance":connect[option].distance,
        "index":connect[option].index,
        "connect":cities[connect[option].index].connect
    }
    
    return result;
}

function get_connect(cities, index){

    return cities[index].connect;
}
    
function change_selected(opt){

    if(opt === 1){
    
        selected_map.name = "map1";
        selected_map.map = map1;
    
        map_name.innerText = selected_map.name;
        
        map1img.setAttribute("style", "border:5px solid red;height:200px;width:300px;cursor:pointer;"); 
        map2img.setAttribute("style", "border:none;height:200px;width:400px;cursor:pointer;");
        
        start_input.value = "";
        
        end_input.value = "";
        
        document.getElementById("out").innerText = "";
    }else{
    
        selected_map.name = "map2";
        selected_map.map = format_map(map2);
    
        map_name.innerText = selected_map.name;
        
        map2img.setAttribute("style", "border:5px solid red;height:200px;width:400px;cursor:pointer;") ; 
        map1img.setAttribute("style", "border:none;height:200px;width:300px;cursor:pointer;");
        
        start_input.value = "";
        
        end_input.value = "";
        
        document.getElementById("out").innerText = "";
    }
}

function random_int(min, max) {

    let floor = Math.ceil(min);
    let coil = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
