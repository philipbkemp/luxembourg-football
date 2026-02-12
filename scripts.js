function playoffNames(poName) {
    switch( poName ) {
        case "promotion_2":
            return "2. Division Promotion playoffs";
            break;
        case "promotion_3":
            return "3. Division Promotion playoffs";
            break;
        case "title_playoff":
            return "Playoff";
            break;
        case "title":
            return "Title decider";
            break;
        case "title_3_S":
            return "Title decider (3. Division Series South)";
            break;
    }
    dataKeys.push("playoffNames("+poName+")");
    return "???";
}