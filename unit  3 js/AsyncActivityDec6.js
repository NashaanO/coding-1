function stateLandmark(state) {
    state = state.toLowerCase();
    switch (state) {
        case "pennsylvania":
            return "A landmark in Pennsylvania is the Liberty Bell.";
        case "new york":
            return "A landmark in New York is the Statue of Liberty.";
        case "california":
            return "A landmark in California is the Hollywood Walk of Fame.";
        case "south carolina":
            return "A landmark in South Carolina is Fort Sumter, where the initial shots of the American Civil War took place.";
        case "florida":
            return "A landmark in Florida is Walt Disney World.";
        default:
            return "The state could not be found.";
    }
}