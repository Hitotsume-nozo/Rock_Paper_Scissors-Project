//script begins here
function Redirector(link){
    let c_link = 'https://'+link
    console.log(c_link)
    window.location.href = c_link
}

function GetValue(id,link){
    let val_lin = document.getElementById(id).value
    console.log(val_lin)
}
function main(iden){
    console.log(iden)
    let prob = Math.random()
    if (prob>=0 && prob<0.333333){
        console.log(prob)
        let id_comp = 'roc'
        if (iden == 'roc'){
            alert(`It's a Tie!, you chose ${iden} and computer chose ${id_comp}`)
        }else if (iden == 'pap'){
            alert(`You Won!, you chose ${iden} and computer chose ${id_comp}`)
        }else if (iden == 'scis'){
            alert(`comp Won!, you chose ${iden} and computer chose ${id_comp}`)
        }
    }else if (prob>=0.333333 && prob<0.66666){
        console.log(prob)
        let id_comp = 'pap'
        if (iden == 'pap'){
            alert(`It's a tie, you chose ${iden} and computer chose ${id_comp}`)
        }else if (iden == 'roc'){
            alert(`Computer Won!, you chose ${iden} and computer chose ${id_comp}`)
        }else if (iden == 'scis'){
            alert(`You Won!, you chose ${iden} and computer chose ${id_comp}`)
        }
    }else if (prob>=0.66666 && prob<0.99999){
        console.log(prob)
        let id_comp = 'scis'
        if (iden == 'scis'){
            alert(`It's a tie, you chose ${iden} and computer chose ${id_comp}`)
        }else if (iden == 'roc'){
            alert(`You Won!, you chose ${iden} and computer chose ${id_comp}`)
        }else if (iden == 'pap'){
            alert(`Computer Won!, you chose ${iden} and computer chose ${id_comp}`)
        }
    }else if (prob>0.99999){
        main(iden)
    }
}