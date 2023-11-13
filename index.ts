function merge(collection1: number[], collection2: number[]): number[] {
    const merged: number[] = [];
    let j = 0
    let k = 0
    while (j < collection1.length && k < collection2.length) {
        if (collection1[j] < collection2[k]) {
            merged.push(collection1[j])
            j++
        } else {
            merged.push(collection2[k])
            k++
        }
    }
    while (j < collection1.length) {
        merged.push(collection1[j])
        j++
    }
    while (k < collection2.length) {
        merged.push(collection2[k])
        k++
    }
    return merged;
}

export default merge;
