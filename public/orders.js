async function orderListController() {
    let response = await fetch('http://localhost:3000/api/orders');
    let orders = await response.json();
    orderListView(orders);
    console.log("RUNNING THE CONTROLLER.");
    return orders;
};

function orderListView(orders) {
    let table = document.getElementById("orderTable");
    let view = `<thead><tr><th>Order ID</th>` +
                        `<th>Order Desc</th>` +
                        `<th>Quantity</th>` +
                        `<th>Unit</th>`;

    //JSON is a nested array, so we'll need the data tag.
    orders.data.forEach(order => {
        view = view + 
        `<tbody><tr><td>${order['orderID']}</td> ` +
        `<td>${order['orderDesc']}</td>` +
        `<td>${order['quantity']}</td>` +
        `<td>${order['unitCost']}</td></tr></tbody>`;
    });
    

    table.innerHTML = view;
    
};


//Creating a new user.
function createNewOrder() {
    let orderDesc = document.getElementById("orderDesc").value;
    let quantity = document.getElementById("quantity").value;
    let unitCost = document.getElementById("unitCost").value;

    const neworder = {
        orderDesc : orderDesc,
        quantity : quantity,
        unitCost : unitCost
    };


    fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(neworder)
    });
};