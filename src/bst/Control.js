import BST from './BST'



let bST = new BST();
bST.generateBST(10);

export function getDataStructer() {
    return bST;
}

export function getMaxNum(){
  return 31;
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
export function getLevel(i){
  let ans = 0;

  while (i !== 0 ){
    ans ++;
    i = Math.floor((i-1)/2);
  }
  return ans;
}
export function reBegin(n) {
  if (n == null){
    n = 10;
  }
  bST = new BST();
  bST.generateBST(n);
  console.log('重新开始');
  refresh();
}