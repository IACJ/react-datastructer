let AreaWidth =  document.body.clientWidth -34;
console.log('clientWidth '+AreaWidth);
let half = AreaWidth / 2;


export default function BinaryTreePosition (index) {
    let position = {};


    switch (index) {
        //level 1
        case 0:{
            position={
                left : half - 26,
                top  : 0,
            }
            
            break;
        }
        // level 2
        case 1:{
            position={
                 left :half -210  - 26,
                 top  : 75,
            }
            break; 
        }
        case 2:{
            position={
                 left :half +210 - 26,
                 top  : 75,
            }
            break;
        }
        // level 3
        case 3:{
            position={
                 left :half -210 - 105 -26,
                 top  : 150,
            }
            break;
        }
        case 4:{
            position={
                 left :half -210 + 105 -26,
                 top  : 150,
            }
            break;
        }
        case 5:{
            position={
                 left :half +210 - 105 -26,
                 top  : 150,
            }
            break;
        }
        case 6:{
            position={
                 left :half +210 +105 -26,
                 top  : 150,
            }
            break;
        }

        // level 4:
        case 7:{
            position={
                 left :half -210 - 105 -52 -26,
                 top  : 225,
            }
            break;
        }
        case 8:{
            position={
                 left :half -210 - 105 +52 -26,
                 top  : 225,
            }
            break;
        }
        case 9:{
            position={
                 left :half -210 + 105 -52 -26,
                 top  : 225,
            }
            break;
        }
        case 10:{
            position={
                 left :half -210 +105 +52 -26,
                 top  : 225,
            }
            break;
        }
        case 11:{
            position={
                 left :half +210 - 105 -52 -26,
                 top  : 225,
            }
            break;
        }
        case 12:{
            position={
                 left :half +210 - 105 +52 -26,
                 top  : 225,
            }
            break;
        }
        case 13:{
            position={
                 left :half +210 + 105 -52 -26,
                 top  : 225,
            }
            break;
        }
        case 14:{
            position={
                 left :half +210 +105 +52 -26,
                 top  : 225,
            }
            break;
        }
        //level 5
       case 15:{
            position={
                 left :half -210 - 105 -52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 16:{
            position={
                 left :half -210 - 105 -52 +26 -26,
                 top  : 300, 
            }
            break;
        }
        case 17:{
            position={
                 left :half -210 - 105 +52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 18:{
            position={
                 left :half -210 -105 +52 +26 -26,
                 top  : 300, 
            }
            break;
        }
        case 19:{
            position={
                 left :half -210 + 105 -52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 20:{
            position={
                 left :half -210 + 105 -52 +26 -26,
                 top  : 300, 
            }
            break;
        }
        case 21:{
            position={
                 left :half -210 + 105 +52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 22:{
            position={
                 left :half -210 + 105 +52 +26 -26,
                 top  : 300, 
            }
            break;
        }
       case 23:{
            position={
                 left :half +210 - 105 -52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 24:{
            position={
                 left :half +210 - 105 -52 +26 -26,
                 top  : 300, 
            }
            break;
        }
        case 25:{
            position={
                 left :half +210 - 105 +52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 26:{
            position={
                 left :half +210 -105 +52 +26 -26,
                 top  : 300, 
            }
            break;
        }
        case 27:{
            position={
                 left :half +210 + 105 -52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 28:{
            position={
                 left :half +210 + 105 -52 +26 -26,
                 top  : 300, 
            }
            break;
        }
        case 29:{
            position={
                 left :half +210 + 105 +52 -26 -26,
                 top  : 300, 
            }
            break;
        }
        case 30:{
            position={
                 left :half +210 + 105 +52 +26 -26,
                 top  : 300, 
            }
            break;
        }
    
        default:
            break;
    }
    
    return position;
}