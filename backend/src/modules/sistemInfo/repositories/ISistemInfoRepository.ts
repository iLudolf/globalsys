import { SistemInfo } from "../entities/SistemInfo";

interface ISistemInfoDTO {
    sizeStorage?: number; 
}

interface ISistemInfoRepository{
    checkSizeStorage(): Promise<number>; 
    getProcessadorInfo(): Promise<any>; 
    MemoryUsage(): Promise<any>;
}

export {ISistemInfoRepository, ISistemInfoDTO};