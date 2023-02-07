### **Rendering From Object** | Exercise Description:

Now lets use a complex variable to render our JSX, let's say we have the following JS Object containing a customer information:

```javascript
const customer = {
	first_name: 'Giga',
	last_name: 'Amiridze'
}
```

To retrieve any property from the `customer` object we have to use the dot (`.`) operator, like this:

```javascript
console.log(customer.first_name); // will print "Giga" on the console.
```

### 📝 Instructions:
Open the  `App.jsx`  and create the necesary code to make your file render the following output into the DOM:

```html
<div>
    <h1>My name is Giga</h1>
    <h2>My last name is Amiridze</h2>
</div>
```