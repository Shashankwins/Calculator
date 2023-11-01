let str="";
str= prompt("Enter your Expression");
let a="";
let b="";
let op="";
let pos;
let result=0;
let num1;
let num2;

for(let i=0;i<str.length;i++)
{
    if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/')
    {
        op=str[i];
    }
    else
    {
        continue;
    }
}

pos=str.indexOf(op);

for(let i=0;i<str.length;i++)
{
    if(i<pos)
    {
        a=a+str[i];
    }
    else if(i>pos)
    {
        b=b+str[i];
    }
}

console.log(op);
console.log(pos);
console.log(a);
console.log(b);
num1= Number(a);
num2= Number(b);

switch(op){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
}
console.log(result);




let str ="78/*-2"
let a="";
let b="";
let op="";
let pos;
let result=0;
let num1;
let num2;

for(let i=0;i<str.length;i++)
{
    if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/')
    {
        op=str[i];
        break;
    }
    else
    {
        continue;
    }
}

pos=str.indexOf(op);

for(let i=0;i<str.length;i++)
{
    if(i<pos)
    {
        a=a+str[i];
    }
    else if(i>pos && str[i]>=0 && str[i]<=9)
    {
        b=b+str[i];
    }
}
console.log(op);
console.log(a);
console.log(b);
console.log(pos);
num1= Number(a);
num2= Number(b);

switch(op){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
}
console.log(result);