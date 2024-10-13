let pins= 1111, kaarka=200, balances= 30000, furo= 770, yourPIN= Number(prompt("fadlan gali pin-kaaga (enter pin)"))
if(yourPIN===pins){
    let Options=Number(prompt(`
    1.itus haraagaaga
    2.kaarka ku hadlka
    3.bixi biil 
    4.uwareeji Evcplus
    5.warbixin kooban
    6.salaam bank
    7.maareynta 
    8.Taaj
    9.bill payment
    `));
    switch(Options){
        case 1:
            alert(`haraagaaga waa: $${balances}`)
            break;
        case 2:
            let kuhadal= Number(prompt(`
            1:ku shubo Airtime
            2: ugu shub Airtime
            3:MIFI Packages
            4:ku shubi internet
            5: ugu shub qof kle(MMT)
            `))
            if (kuhadal==1) {
                let num = Number(prompt("fadlan gali lacagta"))
                let loo= Number(prompt('gali numberka loo rabo'))
                let hops= Number(prompt(`ma huptaa inaaad  $${num} ugu shubtid  ${loo} undefined ?
                1.Haa
                2.Maya 
                `))
                if (hops==1) {
                    if(num>kaarka){
                        alert("Haraaga xisabtaadu kuguma filna")
                    }

                    else{
                        alert( `waxaad ugu shubaty $${num} number no: ${loo} haraaga card ka waa $${num-kaarka} mahadsanid`)
                    }
                }
                
            }
            if (kuhadal==2) {
                let tell= 618520031;
                let numberka= Number(prompt(`fadlan gali number-ka`))
                let lacagta = Number(prompt(`fadlan gali lacagat`))
                let hubtaasno= Number(prompt(`ma hubtaa inaad $${lacagta} ugu shubtid ${numberka} ? 
                1:Haa
                2:Maya
                `))
                if (hubtaasno==1) {
                    if(lacagta>kaarka){
                        alert(`Haraaga xisaabtaadu kuguma filna,
                         Mobeil No:  ${tell}
                        `)
                    }
                    else{
                        alert(`waxaad ugu shubtid numberkas ${numberka} Haragaagu waa $${lacagta-kaarka} Mahadsanid`)
                    }
                    
                }

                
            }
            if (kuhadal==3) {
                let Evcplus= Number(prompt(`EVCPlus:
                1:ku shubo
                data-da MIFI`))

                if (Evcplus==1) {
                    let Bundle= Number(prompt(  `--Internet Bundle 
                    Recharge --
                    1. Isbuucle
                    (weekly)
                    2.maalinle
                    (daily)
                    3.Bille (MiFi)`))

                    if (Bundle==1) {
                        let isbuuc= Number(prompt(`fadlan kala dooro
                        Bundle ka
                        1. $5 = 10 GB
                        2.$10 = 25 GB`))
                        if(isbuuc==1){
                            let dum = Number(prompt(`fadlan gali MiFi User `))
                        }
                        if(isbuuc==2){
                            let dum = Number(prompt(`fadlan gali MiFi User `))
                        }
                    }

                    if (Bundle==2) {
                        let isbuuc= Number(prompt(`fadlan kala dooro
                        Bundle ka
                        1. $1 = 2 GB
                        2.$2 = 5 GB`))
                        if(isbuuc==1){
                            let dum = Number(prompt(`fadlan gali MiFi User `))
                        }
                        if(isbuuc==2){
                            let dum = Number(prompt(`fadlan gali MiFi User `))
                        }
                    }
                    if (Bundle==3) {
                        let isbuuc= Number(prompt(`fadlan kala dooro
                        Bundle ka
                        1. $20 = 20 GB
                        2.$40 = 85 GB
                        3.$60 = 150 GB`))
                        if(isbuuc==1){
                            let dum = Number(prompt(`fadlan gali MiFi User `))
                        }
                        if(isbuuc==2){
                            let dum = Number(prompt(`fadlan gali MiFi User `))
                        }
                    }
                  
                }
            }
            if (kuhadal==4) {
                let nums =  Number(prompt(`fadlan dooro number-ka ku shubeyso
                1. isbuucle (weekly)
                2. TIME BASED PACKAGES
                3. DATA
                4. Maalinle (daily)
                5. Bille (MiFi) 
                `))
                if (nums==1) {
                    let numbrs= Number(prompt(`fadlan gali lacagat`))
                    let hup= Number(prompt(`ma hubtaa inaad $${numbrs} shubtid ?
                    1. Haa
                    2. Maya`))
                  if (hup==1) {
                    if(numbrs>kaarka){
                        let num =618520031
                        alert(`Haraaga xisaabtaadu kuguma filna
                       mobeil No: ${num}`)

                    }
                    else{
                        alert(`lacagta aad ku shubaneyso 
                        ma ahan mid sax ah`)
                    }

                    
                  }
                    
                }
                if (nums==2) {
                    let numbrs= Number(prompt(`fadlan gali lacagat`))
                    let hup= Number(prompt(`ma hubtaa inaad $${numbrs} shubtid ?
                    1. Haa
                    2. Maya`))
                  if (hup==1) {
                    if(numbrs>kaarka){
                        let num =618520031
                        alert(`Haraaga xisaabtaadu kuguma filna
                       mobeil No: ${num}`)

                    }
                    else{
                        alert(`lacagta aad ku shubaneyso 
                        ma ahan mid sax ah`)
                    }

                    
                  }
                    
                }
                if (nums==3) {
                    let numbrs= Number(prompt(`fadlan gali lacagat`))
                    let hup= Number(prompt(`ma hubtaa inaad $${numbrs} shubtid ?
                    1. Haa
                    2. Maya`))
                  if (hup==1) {
                    if(numbrs>kaarka){
                        let num =618520031
                        alert(`Haraaga xisaabtaadu kuguma filna
                       mobeil No: ${num}`)

                    }
                    else{
                        alert(`lacagta aad ku shubaneyso 
                        ma ahan mid sax ah`)
                    }

                    
                  }
                    
                }
                if (nums==4) {
                    let numbrs= Number(prompt(`fadlan gali lacagat`))
                    let hup= Number(prompt(`ma hubtaa inaad $${numbrs} shubtid ?
                    1. Haa
                    2. Maya`))
                  if (hup==1) {
                    if(numbrs>kaarka){
                        let num =618520031
                        alert(`Haraaga xisaabtaadu kuguma filna
                       mobeil No: ${num}`)

                    }
                    else{
                        alert(`lacagta aad ku shubaneyso 
                        ma ahan mid sax ah`)
                    }

                    
                  }
                    
                }
                if (nums==5) {
                    let numbrs= Number(prompt(`fadlan gali lacagat`))
                    let hup= Number(prompt(`ma hubtaa inaad $${numbrs} shubtid ?
                    1. Haa
                    2. Maya`))
                  if (hup==1) {
                    if(numbrs>kaarka){
                        let num =618520031
                        alert(`Haraaga xisaabtaadu kuguma filna
                       mobeil No: ${num}`)

                    }
                    else{
                        alert(`lacagta aad ku shubaneyso 
                        ma ahan mid sax ah`)
                    }

                    
                  }
                    
                }
                
            }
            if (kuhadal==5) {
                let mimi = Number(prompt(`fadlan Gali Mobile-ka `))
                let lacag = Number(prompt(`fadlan Gali lacagta`))
                let hupin = Number(prompt(`ma hubtaa inaad $${lacag} wareejisay ${mimi}
                1. Haa
                2. Maya`))
                if (hupin==1) {
                    if(lacag>kaarka){
                        alert(`error occurred,
                        please try again later`)
                    }
                    else{
                        alert(`waxaad dirtay data $${lacag} u wareejisay ${mimi} haraagaga waa $${lacag-kaarka} mahadsanid`)
                    }
                }

                
            }
            break
        case 3: 
          let pro = Number(prompt(`Bixi Biil
          1. post paid
          2. ku ibso`))
          if (pro==1) {
            let pos= Number(prompt(`Post  Paid
            1. Ogow Biilka.
            2. Bixi Biil.
            3. Ka Bixi Biil`))
            if (pos==1) {
                alert(`error occurred,
                please try again later`)
                
            }
            if(pos==2){
                let salad= +252618520021
                let lacag = Number(prompt(`fadlan Gali lacagta`))
                let mahu = Number(prompt(`ma hubtaa inaad bixisid biil lacagtisu tahay: $${lacag} ?
                1. Haa
                2. Maya`))
                if (mahu==1) {
                    if(lacag>balances){
                        alert(`Haraaga xisaabtadu kuguma filna,
                        Mobile No:
                        `+salad)
                    }else{
                        alert(`Evc-Plus:$${lacag} waxaad bixsay biilka guriga Haraaga waa: ${lacag-balances} mahadsanid`)
                    }
                    
                }
            }
            if(pos==3){
                let salad= +252618520021
                let mobile = Number(prompt(`fadlan Gali mobile-ka`))
                let lacag = Number(prompt(`fadlan Gali lacagta`))
                let mahu = Number(prompt(`Ma Hubtaa inaad bixisid biil lacagtisu tahay: $${lacag} oo  laga rabo Tell No ${mobile} ?
                1. Haa
                2. Maya`))
                if (mahu==1) {
                    if(lacag>balances){
                        alert(`Haraaga xisaabtadu kuguma filna,
                        Mobile No:
                        `+salad)
                    }else{
                        alert(`Evc-Plus:$${lacag} waxaad u wareejisay  ${mobile} Haraagaaga waa: ${lacag-balances} mahadsanid`)
                    }
                    
                }
            }

         
            
            
          }
          if (pro==2) {
            let aqonsi= Number(prompt(`fadlan Gali 
            Aqoonisga
            Ganacsiga`))
            
        }
          
          break
          







        case 4:
            let lacagta= Number(prompt(`fadlan lacagta gali `));
            let lorabo= Number(prompt(`gali mobeilka `));
            let hupin= Number(prompt(`ma hubtaa inaad ${lacagta} wareejisay ${lorabo}
            1.Haa
            2.maya
            `))
            if(hupin==1) {
                if(lacagta>balances){
                    alert("haraagaaga kuguma filno")
                }else{
                    alert(`Evc-plus: ${lacagta} waxaad u wareejisay ${lorabo} haragaaga waa ${lacagta-balances} mahadsanid`)
                 }
                

                
            } 
            break
        case 5:
            let warbixin = Number(prompt(`Warbixin Kooban
            1. lasta action
            2. wareejintii u danbeysay
            3. iibsashadii u danbeysay
            4. last 3 action
            5. Email Me My Activity`))
            if (warbixin==1) {
                let last= Number(prompt(`[-EVC-Plus-]
                waxaad $220
                ugu shubtay 
                252618520031`))
                
            }
            if (warbixin==2) {
                let warejin= Number(prompt(`Statementiga: 
                1. u dirtay
                2. Kaheshay`))
                if (warejin==1) {
                    let mob= Number(prompt(`fadlan Gali Mobile-ka`))
                    // let mim= 617181920
                    if (mob==mob) {
                        alert(`$200 Ayaad u wareejisay ${mob}
                         Taariikh:
                        17/04/2024 20:30:09`)
                        
                    }
                    
                }
                if (warejin==2) {
                    let nut= Number(prompt(`fadlan gali numberk-ka`))
                    if(nut==nut){
                        alert(`Operation
                        succeeded 
                        No Transaction 
                        to Display`)
                    }
                    
                }
                
            }
            break    



    }


 

}
else{
    alert("invalid pin")
}