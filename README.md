## rn-show-more-text

A super lightweight plugin to expand/collapse text in React-Native. Truncated text is ended with dotdotdot.

Working on IOS/Android/Ipad

### Installation

```
npm install --save @leviit9x/rn-show-more-text

```
or

```
yarn add @leviit9x/rn-show-more-text

```


### Usage

- **numberOfLines**(number)(*required): Number of lines to be displayed.
- **text**(object): full text.


```javascript
  import { RNShowMoreText } from '@leviit9x/rn-show-more-text';
  
  
  export default function Example() {
    return (
      <RNShowMoreText 
      text={'Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.'} 
      numOfLines={2}
      >
    )
  }

```


