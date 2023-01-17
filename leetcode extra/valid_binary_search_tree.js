var isValidBST = function (root) {
    root.filter(function (e) {
        return e != null;
    });

    if (root[0] == root.length - 1)
        return true;

    return false;
};

console.log(isValidBST([5, 1, 4, null, null, 3, 6]));