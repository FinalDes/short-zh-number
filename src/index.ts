const unitList = " 萬億兆京垓秭穰溝澗正載".split("");
const unitList1 = " 万亿兆京垓秭穰沟涧正载".split("");
export function shortNumber(value: number, simplified: boolean = false): string {
    let result: string = "";
    const list = simplified === true ? unitList1 : unitList;
    for (const unit of list) {
        if (value > 10000) {
            value /= 10000;
        }else {
            result = value + unit.trim();
            break;
        }
    }
    return result;
}
