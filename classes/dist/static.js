"use strict";
class Ride {
    startRide() {
        Ride._activeRide++;
    }
    stopRide() {
        Ride._activeRide--;
    }
    get activeRide() {
        return Ride._activeRide;
    }
}
Ride._activeRide = 0;
let R1 = new Ride();
R1.startRide();
let R2 = new Ride();
R2.startRide();
console.log(R1.activeRide);
console.log(R2.activeRide);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0YXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxJQUFJO0lBR04sU0FBUztRQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsUUFBUTtRQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7O0FBWGMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7QUFjbkMsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNwQixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3BCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDIn0=