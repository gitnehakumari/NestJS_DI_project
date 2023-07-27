import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class DiskService {
    constructor(private powerService:PowerService){}
    getData(){
        console.log('drwaing 20 watts of powerservice');
        this.powerService.supplyPower(29);
        return "power service"
    }
}
