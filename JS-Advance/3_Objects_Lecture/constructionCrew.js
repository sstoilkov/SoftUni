function solver(input) {

    //weigth kg exp years lvl in mm 0,1 mm per kilo per year of exp
    let worker = {
        weight: input.weight,
        experience: input.experience,
        levelOfHydrated: input.levelOfHydrated,
        dizziness: input.dizziness
    }

    if(worker.dizziness){
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}


solver({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
)