import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor DBank {
  stable var currentValue:Float = 300;
  currentValue := 300;

  let id = 6461354515;

 stable var startTime =Time.now();
 startTime:=Time.now();
 Debug.print(debug_show(startTime));


  // Debug.print(debug_show(id))

 public func topUp(amount:Float) {
    currentValue +=amount;
    Debug.print(debug_show(currentValue)); 
  };

  public func withDraw(amount:Float){
    let tempValue:Float = currentValue - amount;
    if(tempValue:Float >=0){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));}
    else{
      Debug.print("Insufficient funds");
    }
  };

  public query func checkBalance():async Float {
 return currentValue;
  };

public func compound(){
  let currentTime = Time.now();
  let timeElsapsedNS = currentTime - startTime;
 let timeElapsedS = timeElsapsedNS / 1000000000;
currentValue :=currentValue *(1.01 ** Float.fromInt(timeElapsedS));
startTime :=currentTime;

}
  // topUp();

}