let available_to_sale = document.getElementById("available_to_sale");
let qntiti_of_all_chiken6 = document.getElementById("qntiti_of_all_chiken6");
let qntiti_of_all_chiken5 = document.getElementById("qntiti_of_all_chiken5");
let qntiti_of_all_chiken1 = document.getElementById("qntiti_of_all_chiken1");
let sold_fahem = document.getElementById("sold_fahem");
let available_to_sale_fahem = document.getElementById("available_to_sale_fahem");
let available_chiken_makena6 = document.getElementById(
  "available_chiken_makena6"
);
let available_chiken_makena5 = document.getElementById(
  "available_chiken_makena5"
);
let available_chiken_makena1 = document.getElementById(
  "available_chiken_makena1"
);

let qynt = 0;
let qynt_of_sold = 0;
let qynt_of_sold_foron =0;
const add_qntiti_makena6 = () => {
  btn_num_of_click = Math.floor(qntiti_of_all_chiken6.innerText.slice(1));
  qynt_of_sold += btn_num_of_click;
  console.log(qynt_of_sold);
  $("#available_to_sale").attr("placeholder", qynt_of_sold);
};
const add_qntiti_makena5 = () => {
  btn_num_of_click = Math.floor(qntiti_of_all_chiken5.innerText.slice(1));
  qynt_of_sold += btn_num_of_click;
  console.log(qynt_of_sold);
  $("#available_to_sale").attr("placeholder", qynt_of_sold);
};
const add_qntiti_makena1 = () => {
  btn_num_of_click = Math.floor(qntiti_of_all_chiken1.innerText.slice(1));
  qynt_of_sold += btn_num_of_click;
  $("#available_to_sale").attr("placeholder", qynt_of_sold);
  console.log(qynt_of_sold);
};




const add_plus=()=>{
    qynt++
    qynt_of_sold--
    $("#available_chiken_makena").attr("placeholder", qynt);
    $("#available_to_sale").attr("placeholder", qynt_of_sold);

}


const min_plus=()=>{
    qynt--
    qynt_of_sold++

    $("#available_chiken_makena").attr("placeholder", qynt);
    $("#available_to_sale").attr("placeholder", qynt_of_sold);

}
const min_min=()=>{
    qynt--
    $("#available_chiken_makena").attr("placeholder", qynt);
}
const fivten_add=()=>{
    qynt+=0.5
    qynt_of_sold-=0.5
    $("#available_chiken_makena").attr("placeholder", qynt);
    $("#available_to_sale").attr("placeholder", qynt_of_sold);

}
const fivten_min=()=>{
    qynt-=0.5
    qynt_of_sold+=0.5
    $("#available_chiken_makena").attr("placeholder", qynt);
    $("#available_to_sale").attr("placeholder", qynt_of_sold);

}
const twini_five=()=>{
    qynt+=0.25
    qynt_of_sold-=0.25
    $("#available_chiken_makena").attr("placeholder", qynt);
    $("#available_to_sale").attr("placeholder", qynt_of_sold);

}
const min_twini_five=()=>{
    qynt-=0.25
    qynt_of_sold+=0.25
    $("#available_chiken_makena").attr("placeholder", qynt);
    $("#available_to_sale").attr("placeholder", qynt_of_sold);

}
let quntiti_fahem_sold=0

const add_fahem1=()=>{
quntiti_fahem_sold++    
    $("#sold_fahem").attr("placeholder", quntiti_fahem_sold);
    
}
const min_fahem1=()=>{
  quntiti_fahem_sold--
    $("#sold_fahem").attr("placeholder", quntiti_fahem_sold);
    // $("#sold_fahem").attr("placeholder", qynt_of_sold);
    
}

const fivten_fahem1_add=()=>{
  quntiti_fahem_sold+=0.5
    $("#sold_fahem").attr("placeholder", quntiti_fahem_sold);
    // $("#sold_fahem").attr("placeholder", qynt_of_sold);
    
}
const fivten_fahem1_min=()=>{
  quntiti_fahem_sold-=0.5
    $("#available_to_sale_fahem").attr("placeholder", quntiti_fahem_sold);
    $("#sold_fahem").attr("placeholder", quntiti_fahem_sold);
    
}


const min_qntiti_makena6=()=>{
  btn_num_of_click = Math.floor(qntiti_of_all_chiken6.innerText.slice(1));
  qynt_of_sold -= btn_num_of_click;
  console.log(qynt_of_sold);
  $("#available_to_sale").attr("placeholder", qynt_of_sold);


}

const min_qntiti_makena5=()=>{
  btn_num_of_click = Math.floor(qntiti_of_all_chiken5.innerText.slice(1));
  qynt_of_sold -= btn_num_of_click;
  console.log(qynt_of_sold);
  $("#available_to_sale").attr("placeholder", qynt_of_sold);


}

const min_qntiti_makena1=()=>{
  btn_num_of_click = Math.floor(qntiti_of_all_chiken1.innerText.slice(1));
  qynt_of_sold -= btn_num_of_click;
  console.log(qynt_of_sold);
  $("#available_to_sale").attr("placeholder", qynt_of_sold);
  
  
}




const add_foron_chicken_one=()=>{
  qynt_of_sold_foron++
  $("#inp_of_chicken_foron").attr("placeholder", qynt_of_sold_foron);

}
const min_foron_chicken_one=()=>{
  qynt_of_sold_foron--
  $("#inp_of_chicken_foron").attr("placeholder", qynt_of_sold_foron);

}


const min_foron_chicken_half=()=>{
  qynt_of_sold_foron-=0.5
  $("#inp_of_chicken_foron").attr("placeholder", qynt_of_sold_foron);

}

const add_foron_chicken_half=()=>{
  qynt_of_sold_foron+=0.5
  $("#inp_of_chicken_foron").attr("placeholder", qynt_of_sold_foron);

}