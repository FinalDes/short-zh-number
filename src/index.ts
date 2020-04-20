export function shortNumber(value: number|string, simplified = false): string {
    const unitList = " 萬億兆京垓秭穰溝澗正載".split("");
    const unitList1 = " 万亿兆京垓秭穰沟涧正载".split("");
    let editValue = +value;
    const list = simplified === true ? unitList1 : unitList;
    for (const unit of list) {
        if (editValue >= 10000) {
            editValue /= 10000.0;
        } else if (!isNaN(editValue) && value !== null) {
            return editValue.toLocaleString("en") + unit.trim();
        }
    }
    return "";
}
