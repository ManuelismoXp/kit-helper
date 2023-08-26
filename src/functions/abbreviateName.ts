export const abbreviateName = (name: string): string => {
    const connections: string[] = ["e", "de", "da", "sa", "do", "das", "dos"];
    const names: string[] = name.split(" ");

    const abbreviateName: string[] = [];

    names.forEach((name, index) => {
        const isIncluded = connections.includes(name.toLowerCase());
        
        if (!isIncluded && index > 0 && index < names.length - 1) {
            abbreviateName.push(name[0].toUpperCase() + ".");
        } else {
            abbreviateName.push(name);
        }
    })

    const abbreviateNameString = abbreviateName.join(" ");

    return abbreviateNameString;
}