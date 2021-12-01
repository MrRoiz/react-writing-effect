# React Writing Effect
## _A simple [Reactjs](https://github.com/facebook/react) component to make a typing effect_

### Installation
 as simple as type a command on your project:
```sh
npm i react-writing-effect
```


## Implementation

Here goes a simple example:

```jsx
import Typing from 'react-writing-effect';

const App = () => {
  return (
    <div>
        <Typing>
            Simple typing effect component
        </Typing>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Documentation
React writing effect is a single component library, as you saw in the implementation example, it has no more mistery than that, if you'd like to customize it you're able to, using some props, those are:

|Prop|Description|Type|Default|Aditional Information
|-|-|-|-|-|
|typingSpeed|Defines the speed to type each letter|String|100|ms|
|cursorTimeLapse|Defines the time lapse the cursor uses to know how fast it needs to blink|String|1|seconds|
|className|A class to use in the whole component|String|undefined|N/A|
|style|Css styles to use in the whole component|React.CSSProperties|undefined|N/A|
|onFinish|A callback used at the end of current animation|Function|undefined|N/A|
|cursor|If you want to use a custom blinker you're able to using this prop|JSX.Element|undefined|N/A|
|cursor|If you want to use a custom blinker you're able to using this prop|JSX.Element|undefined|N/A|
|styleText|Css styles to use just in the text of the component|React.CSSProperties|undefined|N/A|
|styleText|Css styles to use just in the cursor of the component|React.CSSProperties|undefined|N/A|

### Children prop
To pass the text to animate you have to pass it as a Children prop just like in the implementation example.