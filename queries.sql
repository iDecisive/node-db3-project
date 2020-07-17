-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select ProductName, CategoryName from Product
join Category
on Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.Id, s.CompanyName 
from [Order] o
join [Shipper] s
on o.ShipVia = s.Id
where o.OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, od.Quantity
from [Product] p
join [OrderDetail] od
on od.ProductId = p.Id
where od.OrderId = "10251"
order by p.ProductName asc

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.Id as "Order ID", c.CompanyName as "Customer's Company Name", e.LastName as "Employee's Last Name"
from [Order] o
join [Customer] c
on o.CustomerId = c.Id
join [Employee] e
on o.EmployeeId = e.Id
