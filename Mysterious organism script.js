// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactor = (num, arr) =>{
    return {
      specimenNum:num,
      dna: arr,
      mutate(){
        let randomInd = Math.floor(Math.random()*14)
        let randBase = returnRandBase()
        while(true){
          if(this.dna[randomInd]!==randBase){
            this.dna[randomInd]=randBase
            break
          } else{
            randBase = returnRandBase()
          }
          
          
        }
        return this.dna
  
        },
        compareDNA(otherOrg){
          let numIdentical = 0
          for(let i = 0; i<otherOrg.length;i++){
            if (otherOrg[i]===this.dna[i]){
              numIdentical++
  
            }
          }
            let similarityPercent = (numIdentical/otherOrg.length)*100
            return `Specime #1 and specimen #2 have ${similarityPercent}% dna in common.`
        },
        willLikelySurvive(){
          let numC=0;
          let numG=0;
          this.dna.forEach(strand =>{
            if(strand==='C'){
              numC++
            }if(strand==='G'){
              numG++
            }
          })
          if ((numC/this.dna.length)>0.6 ||(numC/this.dna.length>0.6 )){
            return true
          } else{
            return false
          }
        },
        complementDNA(){
          let complementaryDNA=[];
          this.dna.forEach(strand =>{
            if (strand === 'A'){
              complementaryDNA.push('T')
            }if (strand === 'T'){
              complementaryDNA.push('A')
            } if(strand === 'C'){
              complementaryDNA.push('G')
            } if (strand==='G'){
              complementaryDNA.push('C')
            }
          })
          return complementaryDNA
        }
  
  
      }
    }
  //create 30 instances of pAequor
  let id=1;
  let survivingDNA=[];
  while (survivingDNA.length<30){
    let Dna = pAequorFactor(id,mockUpStrand())
    if(Dna.willLikelySurvive() === true){
      survivingDNA.push(Dna)
    }
    id++
  }
  
  
  
  
  
  
  
  
  
  
  
  
  