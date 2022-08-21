$($.getJSON("http://localhost:5000/get-allCustomer", 
function (data){
    const customers = data.response.customers;
    const customersTabElement =$("#customersTab");
    for (let i=0; i < customers.lenght; i++){
        const customer = customers [i];

        let row= document.createElement("tr");
        
        let firstName= document.createElement("td");
        firstName.innerHTML = customer.firstName;
        firstName.append(firstName);

        let lastName= document.createElement("td");
        lastName.innerHTML = customer.lastName;
        lastName.append(lastName);

        let email= document.createElement("td");
        email.innerHTML = customer.email;
        email.append(email)

        let phone= document.createElement("td");
        phone.innerHTML = customer.phone;
        phone.append(lastName)
    }

}
))

