export const hideEmail = email => {
    let partTillAt = email.slice(0, (email.indexOf("@")));
    let part1;
    let part2;

    if (partTillAt.length <= 5) {
        part1 = email.slice(0, 1);
        part2 = email.slice((email.indexOf("@")-1), email.length);

    } else {
        part1 = email.slice(0, 3);
        part2 = email.slice((email.indexOf("@")-3), email.length)
    }

    return `${part1}...${part2}`;
};