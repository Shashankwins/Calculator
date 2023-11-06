let exp = "";
function show(val) {
    if (val !== '=') {
        exp = exp + val;
        document.getElementById("screen").value = exp;
    }
    else if (val == '=') {
        exp = result(exp);
        document.getElementById("screen").value = exp;
    }
}

function clr() {
    document.getElementById("screen").value = "";
    exp = "";

}


function result(str) {

    let a = "";
    let b = "";
    let op = "";
    let pos;
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/') {
            op = str[i];
            break;
        }
        else {
            continue;
        }
    }

    pos = str.indexOf(op);

    for (let i = 0; i < str.length; i++) {
        if (i < pos) {
            a = a + str[i];
        }
        else if (i > pos && str[i] >= 0 && str[i] <= 9) {
            b = b + str[i];
        }
    }

    switch (op) {
        case '+':
            ans = Number(a) + Number(b);
            break;
        case '-':
            ans = Number(a) - Number(b);
            break;
        case '*':
            ans = Number(a) * Number(b);
            break;
        case '/':
            ans = Number(a) / Number(b);
            break;
    }
    return ans;
}
