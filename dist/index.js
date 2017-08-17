"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unitList = " 萬億兆京垓秭穰溝澗正載".split("");
var unitList1 = " 万亿兆京垓秭穰沟涧正载".split("");
function shortNumber(value, simplified) {
    if (simplified === void 0) { simplified = false; }
    var result = "";
    var editValue = +value;
    var list = simplified === true ? unitList1 : unitList;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var unit = list_1[_i];
        if (editValue > 10000) {
            editValue /= 10000;
        }
        else if (!isNaN(editValue) && value !== null) {
            result = editValue + unit.trim();
            break;
        }
    }
    return result;
}
exports.shortNumber = shortNumber;
//# sourceMappingURL=index.js.map