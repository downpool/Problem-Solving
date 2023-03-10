//미완
function tree1matrix(tree){
    //포화 이진트리 or 완전 이진트리에 이용
    //되도록 사용하지 말자...
    let parent = Array(tree.length + 1);

    for(let i = 2; i <= n; i++){
        parent[i] = Math.floor(i / 2);
    }

    console.log(parent.join(' '));
}

//완
function tree2matrix(n){
    let tree = Array.from(Array(n + 1), () => Array(2));
}

function tree_list_Input(tree){

}

function tree_list_nonInput(n){
    let obj = {};
    //input like => obj[value] = [left, right];
    
}

function tree_matrix_Input(tree){

}

function tree_matrix_nonInput(n){
    let tree = Array.from(Array(n), () => Array(3).fill(-1));
    let order = [];
    //input like => value, left(val or -1), right(val or -1);

    function DFS(l){
        if(l[1] == -1 && l[2] == -1){
            order.push()
        }
    }
}