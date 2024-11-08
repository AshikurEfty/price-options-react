import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = 
    [
        {
            "id": 1,
            "option_name": "Basic Membership",
            "price": 20,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 group fitness class per month",
                "Free WiFi",
                "Access during off-peak hours"
            ]
        },
        {
            "id": 2,
            "option_name": "Standard Membership",
            "price": 40,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "2 guest passes per month",
                "Free WiFi",
                "Access during all hours",
                "Discount on in-house café",
                "Access to virtual fitness classes"
            ]
        },
        {
            "id": 3,
            "option_name": "Premium Membership",
            "price": 60,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "Unlimited guest passes",
                "1 personal training session per month",
                "Access to sauna and pool",
                "Free WiFi",
                "Priority class booking",
                "Access to virtual fitness classes",
                "Discount on in-house café",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 4,
            "option_name": "Family Membership",
            "price": 80,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "Unlimited guest passes",
                "4 personal training sessions per month",
                "Access to sauna and pool",
                "Family access for up to 4 members",
                "Free WiFi",
                "Priority class booking",
                "Access to virtual fitness classes",
                "Discount on in-house café",
                "Monthly fitness assessment",
                "Childcare services",
                "Family yoga and fitness classes"
            ]
        }
    ]
    
    return (
        <div className="m-5 ">
            <h2 className="text-5xl mb-5">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
