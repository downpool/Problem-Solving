let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let stack = [];
let ans = '';

for (let i of input) {
    if (i >= 'A' && i <= 'Z') {
        ans += i;
    } else if (i == '(') {
        stack.push('(');
    } else if (i == '*' || i == '/') {

    } else if (i == '+' || i == '-') {

    } else if (i == ')') {
        stack.pop('(');
    } else if(stack.length){
        ans += stack.pop();
    }
}
{
    if (s[i] == '(')
        op.push(s[i]);
    else if (s[i] == '*' || s[i] == '/')
    {
        while (!op.empty() && (op.top() == '*' || op.top() == '/'))
        {
            cout << op.top();
            op.pop();
        }
        op.push(s[i]);
    }
    else if (s[i] == '+' || s[i] == '-')
    {
        while (!op.empty() && op.top() != '(')
        {
            cout << op.top();
            op.pop();
        }
        op.push(s[i]);
    }
    else if (s[i] == ')')
    {
        while (!op.empty() && op.top() != '(')
        {
            cout << op.top();
            op.pop();
        }
        op.pop();
    }
}