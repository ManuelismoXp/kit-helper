"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abbreviateName = void 0;
const abbreviateName = (name) => {
    const connections = ["e", "de", "da", "sa", "do", "das", "dos"];
    const names = name.split(" ");
    const abbreviateName = [];
    names.forEach((name, index) => {
        const isIncluded = connections.includes(name.toLowerCase());
        if (!isIncluded && index > 0 && index < names.length - 1) {
            abbreviateName.push(name[0].toUpperCase() + ".");
        }
        else {
            abbreviateName.push(name);
        }
    });
    const abbreviateNameString = abbreviateName.join(" ");
    return abbreviateNameString;
};
exports.abbreviateName = abbreviateName;
