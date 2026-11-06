function getRandomColor() {
    return "rgb(" + randomInt(256)+ "," + randomInt (256) + "," +randomInt(256) + ")"   
}





function randomInt(max) {
    return Math.floor (Math.random() * max ) 
}