### **Conditional Rendering** | Exercise Description:

You can also use the component properties to change its behavior, like show or hide your `<Button />` based on a property called `isVisible`.

```javascript
{ /* This will make your button show */ }
<Button title="Submit" isVisible={true}>

{ /* This will make your button to be hidden */ }
<Button title="Reset" isVisible={false}>
```

We can acomplish that by adding a if... else... statement inside the render method like this:

```javascript
function Button(props) {
  if(props.show === false){
    return null;
  }
  else{
    // return here the component html
  }
} 
```

### 📝 Instructions:
1. Create an `<Button />` component that renders a bootstrap button.

### 💡 Hint:
The component must be able to receive the following 2 properties:
- isVisible(bool): true or false.
- title(string): The message to include inside the button.
