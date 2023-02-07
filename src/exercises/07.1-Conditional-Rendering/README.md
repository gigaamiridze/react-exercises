### **Conditional Rendering** | Exercise Description:

Let’s make our `<BootstrapAlert>` component a little bit smarter.

When using JSX you have all of the Javascript functionalities available: Variables, Loops, Conditionals, etc.

We have already used loops and variables, it’s time to use conditionals!

For example, the following code renders a red or orange alert depending on the color property.

```javascript
const colorClasses = {
  'red': 'alert-danger',
  'orange': 'alert-warning'
}

<div class={`alert ${colorClasses[props.color]}`} role="alert">
  This is a primary alert-check it out!
</div>
```

We are declaring a variable colorClasses that will contain all the class names that will be applied to the alert.

### 📝 Instructions:
1. Create an `<BootstrapAlert>` component that renders a bootstrap alert.

### 💡 Hint:
The component must be able to receive the following 2 properties:
- Text (string): The text content that will be displayed on the alert.
- Color (string): Red or Orange.

```html
// for red color
<div class="alert alert-danger" role="alert">
  This is a primary alert—check it out!
</div>

// for orange color
<div class="alert alert-warning" role="alert">
  This is a primary alert—check it out!
</div>
```
