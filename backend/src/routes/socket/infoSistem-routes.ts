import sizeStorageController from "../../modules/sistemInfo/useCase/sizeStorage";
import getCpuController from "../../modules/sistemInfo/useCase/getCpu";
import memoryUsageController from "../../modules/sistemInfo/useCase/memoryUsage";


const infoSistem = (socket : any) => {    
    return sizeStorageController().handle(socket);
};

const infoSistemCpu = (socket : any) => {  
    return getCpuController().handle(socket);
};

const infoSistemTotalmem = (socket : any) => {  
    return memoryUsageController().handle(socket);
};


export {infoSistem, infoSistemCpu, infoSistemTotalmem};


