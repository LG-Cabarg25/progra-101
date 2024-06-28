function max(a: number, b: number, c: number) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    return mayor;
}

export let maxValue = max(5, 2, 6);
console.log(maxValue);