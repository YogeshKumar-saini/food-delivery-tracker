document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        ID: document.getElementById('id').value,
        Delivery_person_ID: document.getElementById('deliveryPersonId').value,
        Delivery_person_Age: document.getElementById('age').value,
        Delivery_person_Ratings: document.getElementById('ratings').value,
        Restaurant_latitude: parseFloat(document.getElementById('restLat').value),
        Restaurant_longitude: parseFloat(document.getElementById('restLong').value),
        Delivery_location_latitude: parseFloat(document.getElementById('delLat').value),
        Delivery_location_longitude: parseFloat(document.getElementById('delLong').value),
        Order_Date: document.getElementById('orderDate').value,
        Time_Orderd: document.getElementById('timeOrdered').value,
        Time_Order_picked: document.getElementById('timePicked').value,
        Weatherconditions: document.getElementById('weather').value,
        Road_traffic_density: document.getElementById('traffic').value,
        Vehicle_condition: parseInt(document.getElementById('vehicleCondition').value),
        Type_of_order: document.getElementById('orderType').value,
        Type_of_vehicle: document.getElementById('vehicleType').value,
        multiple_deliveries: document.getElementById('multipleDeliveries').value,
        Festival: document.getElementById('festival').value,
        City: document.getElementById('city').value
    };

    try {
        const response = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById('result').innerHTML = `Predicted Delivery Time: ${result.toFixed(2)} minutes`;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error predicting delivery time';
        console.error('Error:', error);
    }
});