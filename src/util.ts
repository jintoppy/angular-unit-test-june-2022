export const Util = {
    add: (x:number,y:number):any => {
        Util.log('add');
        return x+y;
    },
    subtract: (x:number, y:number):number => {
        Util.log('subtract');
        return x - y;
    },
    log: (functionName:string) => {
        console.log(functionName + ':called');
    }
}

