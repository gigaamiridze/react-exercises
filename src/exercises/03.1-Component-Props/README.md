### **Component Props** | Exercise Description:

What is the best way to do Props? Use it!

### Using properties in HTML

When you are coding HTML you are constantly using the  `<tag>`  properties to modify the tag behavior, for example:

When you use the  **anchor**  tag (`<a>`) you have to specify the  **href**  property like this:

<a href="http://google.com">Take me to google</a>
<a href="http://twitter.com">Take me to twitter</a>

Note: Here I'm re-using the anchor tag (`<a>`) for two different links

> Using properties in React.js

In React.js we also can create our own tags and use our own invented properties, for example we could specify the  `name`  property of our  `<Person />`, like this:

    //for Paul
    <Person name="Paul" />
    
    // for Bob
    <Person name="Bob" />

Our  `component`  function will receive all its properties (including name) through the first parameter that we can call  `props`.

```javascript
const Person = (props) => {
  return (
	  <div className='person-name'>{props.name}</div>
  );
}
```

To be able to work with component properties, you have to specify what properties the component will receive (the name and data-type of each property),  [here you can read more about prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html).

For example:
here we are specifying that this component will receive the property "name" and it will be a string.

```javascript
Person.propTypes = {
	name: PropType.string
};
```

### 📝  Instructions:

1. Please add/use the  `name`,  `surname`,  and  `age`  properties inside the  `Person`  function and also on the  `<Person />`  tag (With other person's information that has by default). Do it the same way  `title`  was already included in both.
