let flag = true;

const unfold = () => {

    //展示与折叠内容
    const foldedDiv = document.querySelectorAll('.folding-div');
    foldedDiv.forEach(function(box) {
        if(flag) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    })

    //按钮变化
    const btn = document.querySelector('.btn>button');
    if(flag) {
        btn.style.transform = 'rotateX(180deg)';
    } else {
        btn.style.transform = '';
    }
    flag = !flag;
}