'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}


class ParkingLot {
    // add your method here
    slotParking = [];
    constructor(slots){
      for(let i=0; i<slots; i++){
        this.slotParking.push({
            occupied: false,
            slot: i,
            carId: null
        });
      }
    }

    park(carId){
        let parked = false;
        for(let i=0; i<this.slotParking.length; i++){
            if(!this.slotParking[i].occupied){
               this.slotParking[i].occupied = true;
                this.slotParking[i].carId = carId;
                parked = true;
                break;
            }
        }
        return parked;
    }

    getSlots(){
        return this.slotParking.map(j=>{
           if(j.carId){
               return j.carId;
           }

              return null;
        });
    }

    remove(carId){
        let freed = false;
        for(let i=0; i<this.slotParking.length; i++){
            if(this.slotParking[i].occupied && this.slotParking[i].carId === carId){
               this.slotParking[i].occupied = false;
                this.slotParking[i].carId = null;
                freed = true;
            }
        }
        return freed;
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const numberOfSlots = parseInt(readLine().trim());
    const parkingLotObj = new ParkingLot(numberOfSlots);
    ws.write(`Parking Lot created with number of slots as ${numberOfSlots}\n`);
    
    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const carId = inputs[1];

        switch(operation) {
            case 'Park':
                if (parkingLotObj.park(carId)) {
                    ws.write(`Parking Started: ${carId}\n`);
                } else {
                    ws.write(`Parking Full: ${carId}\n`);
                }
                break;
            case 'Remove':
                if (parkingLotObj.remove(carId)) {
                    ws.write(`Car id ${carId} removed from parking\n`);
                } else {
                    ws.write(`Car: ${carId} not found\n`);
                }
                break;
            case 'GetSlots':
                const status = parkingLotObj.getSlots();
                status.forEach((obj, i) => {
                    if (obj) {
                        ws.write(`Parked at slot ${i + 1}: ${obj}\n`);
                    } else {
                        ws.write(`Slot ${i + 1} is empty\n`);
                    }
                })
                break;
            default:
                break;
        }
    }
    ws.end();
}