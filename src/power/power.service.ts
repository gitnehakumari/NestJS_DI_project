import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watts:number){
    console.log(`supplyong ${watts} worth of power`)
    }
}
