function constructionCrew(worker) {

    let { weight, experience, levelOfHydrated, dizziness } = worker;

    if (worker.dizziness === true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});