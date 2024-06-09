function Monday(){
    console.log("Go for a five-mile run")
    console.log("Pump iron")
}

function Tuesday(){
    console.log("Go for a five-mile run")
    console.log("Swim 40 laps")
}

function Wednesday(){
    console.log("Go for a five-mile run")
    console.log("Go for a five-mile run")
}

function Thursday(){
    console.log("Go for a five-mile run")
    console.log("Pump iron")
}

function Friday(){
    console.log("Go for a five-mile run")
    console.log("Swim 40 laps")
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights(){
    console.log("Punp iron")
}

function swimFortyLaps() {
    console.log("Swim 40 laps")
}

function Monday(){
    runFiveMiles()
    liftWeights()
}

function Monday(){
    exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity){
    runFiveMiles();
    postRunActivity();
}
function Tuesday(){
    exerciseRoutine(swimFortyLaps);

}

function receivesAFunction(cb){
    cb();
}
function returnsANamedFunction(){
    return function something(){
        console.log(2 + 2)
    }
}

function returnsAnAnonymousFunction (){
    return function(){
        console.log(2 + 2)
    }
}