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

export function reBegin() {
    tTTree = new TTTree();
    tTTree.generateTTTree(6);
    console.log('重新开始');
    refresh();
}