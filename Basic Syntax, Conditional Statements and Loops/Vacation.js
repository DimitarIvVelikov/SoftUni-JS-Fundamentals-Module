function vacation(count,type,day){
    let price = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                if (count >= 30) {
                    price = 8.45 * count *0.85; 
                }else{
                    price = 8.45 * count;
                }
                
            }else if (type === "Business") {
                if (count >= 100) {
                    price = 10.90 * (count-10); 
                }else{
                    price = 10.90 * count;
                }
                
            }else{
                if (count >= 10 && count <=20) {
                    price = 15 * count * 0.95;
                }else{
                    price = 15 * count;
                }
                
            }
            break;
            case "Saturday":
                if (type === "Students") {
                    if (count >= 30) {
                        price = 9.80 * count * 0.85; 
                    }else{
                        price = 9.80 * count;
                    }
                    
                }else if (type === "Business") {
                    if (count >= 100) {
                        price = 15.60 * (count-10); 
                    }else{
                        price = 15.60 * count;
                    }
                    
                }else{
                    if (count >= 10 && count <=20) {
                        price = 20 * count * 0.95;
                    }else{
                        price = 20 * count;
                    }
                    
                }        
            break;
            case "Sunday":
                if (type === "Students") {
                    if (count >= 30) {
                        price = 10.46 * count * 0.85; 
                    }else{
                        price = 10.46 * count;
                    }
                    
                }else if (type === "Business") {
                    if (count >= 100) {
                        price = 16 * (count-10); 
                    }else{
                        price = 16 * count;
                    }
                    
                }else{
                    if (count >= 10 && count <=20) {
                        price = 22.50 * count * 0.95;
                    }else{
                        price = 22.50 * count;
                    }
                    
                }  
            break;    
        default:
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
    );
    vacation(40,
        "Regular",
        "Saturday");