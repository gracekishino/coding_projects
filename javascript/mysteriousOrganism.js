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
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        randIndex = Math.floor(Math.random() * dna.length)
        randBase = dna[randIndex]
        const dnaBases = ['A', 'T', 'C', 'G'].filter( (base) => base !== randBase)
        dna[randIndex] = dnaBases[Math.floor(Math.random() * 3)] 
      },
      compareDNA(pAequor) {
        commonDna = 0
        for (i=0;i<dna.length;i++) {
          if (dna[i] === pAequor.dna[i]) {
            commonDna ++
          }
        }
        commonPercent = Math.round(100*commonDna/dna.length)
        return `specimen #${specimenNum} and specimen #${pAequor.specimenNum} have ${commonPercent}% DNA in common`
      },
      willLikelySurvive() {
        basesWithCG = 0
        for (i=0;i<dna.length;i++) {
          if (dna[i] === 'C' || dna[i] === 'G') {
            basesWithCG ++
          }
        }
        if (basesWithCG/dna.length >= 0.6) {
          return true
        } else {
          return false
        }
      }
    }
  }
  
  // Create 30 instances of pAequor that can survive in their natural environment
  let pAequorCount = 0
  let pAequorArray = []
  while (pAequorCount < 30) {
    let dna = pAequorFactory(pAequorCount,mockUpStrand())
    if (dna.willLikelySurvive()) {
      pAequorArray.push(dna)
      pAequorCount ++
    }
  }
  
  // print their DNA to the console
  pAequorArray.forEach(base => console.log(base.dna.join('')))
  