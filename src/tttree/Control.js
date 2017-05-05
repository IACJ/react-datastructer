import TTTree from './TTTree'

let tTTree = new TTTree();
tTTree.generateTTTree(6);

export function getDataStructer() {
    return tTTree;
}



let refresher = null;
export function getRefresher(o) {
  console.log('getRefresher');
  if (refresher) {
    console.log('refresher changed');
  }

  refresher= o;

  return () => {
    refresher = null;
  };
}

export function refresh() {
  refresher();
}

export function reBegin(n) {
  if (n == null){
    n = 10;
  }
  tTTree = new TTTree();
  tTTree.generateTTTree(6);
  console.log('重新开始');
  refresh();
}

if (document.body.clientWidth<1000){
  alert("您的浏览器窗口的宽度不足以显示画布，可能会导致移位！\n建议使用更大的窗口访问本页面！\n\
      推荐宽度: 1000以上 , 您的浏览器窗口宽度: "+ document.body.clientWidth);
}