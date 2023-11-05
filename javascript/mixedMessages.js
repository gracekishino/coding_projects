// Today's chakra, sutra and yin yoga pose randomly generated

const yogaData = {
    chakras: ["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"],
    sutras: [
        "1.2 Calm your thoughts to experience yoga", 
        "1.5 There are five kinds of thought waves, some bring suffering and some don\'t",
        "1.14 Over time continued earnest practice becomes firmly grounded", 
        "1.33 Friendliness towards the happy, compassion for the suffering, joy for the good and equanimity for the bad, will bring peace of mind",
        "1.39 Or by meditating on what you find agreeable",
        "1.41 Waned thoughts are pure like a crystal, reflecting the seer, the act of seeing and the seen as one",
        "2.5 Ignorance thinks of the impermanent as permanent",
        "2.11 Thoughts are calmed by meditation",
        "2.33 When disturbed by thoughts, cultivate the opposite",
        "2.42 From contentment, supreme joy is gained"
    ],
    poses: ["Butterfly", "Bananasana", "Caterpillar", "Child", "Deer", "Dragon", "Frog", "Melting Heart", "Reclined Twist", "Saddle", "Seal", "Swan"],
    getRandom(arr) {
        randomIndex = Math.floor(Math.random() * arr.length)
        return arr[randomIndex]
    },
    showMessage() {
        console.log(`Nourish your ${this.getRandom(this.chakras)} chakra today.`)
        console.log(`Meditate on this sutra: ${this.getRandom(this.sutras)}`)
        console.log(`Practise this yin yoga pose: ${this.getRandom(this.poses)}`)
    }
}

yogaData.showMessage()