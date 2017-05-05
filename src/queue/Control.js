import Queue from './Queue'

let queue = new Queue();
queue.generateQueue(8);

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

export function getDataStructer(toX, toY) {
    return queue;
}

//console.log('浏览器宽度（clientWidth）:'+document.body.clientWidth);
export function getMaxNum(){
  let dataNodeWidth = 60;
  return Math.floor(document.body.clientWidth /dataNodeWidth) -1;
}

export function refresh() {
  refresher();
}

export function reBegin() {
    queue = new Queue();
    queue.generateQueue(8);
    console.log('重新开始');
    refresh();
}