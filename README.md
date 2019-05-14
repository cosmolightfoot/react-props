 React Properties
Agenda
Properties
Passing props
Components takes props
Passing props to a component
Type checking props
Conditional Rendering
Dependencies
npm i -D prop-types
Resources
Components and Props
Conditional Rendering
Typechecking Props
Properties
In React properties, or props, is our way to pass data to a component. Props are passed to a component as an object. These props are read-only, which means that we cannot (or should not) change their values.

Passing Props
Component Definition
Components have a props parameter which allows us to pass data into a component.

import React from 'react';

export default function Dog(props) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{props.name}</dd>
      <dt>Age</dt>
      <dd>{props.age}</dd>
      <dt>Weight</dt>
      <dd>{props.weight}</dd>
    </dl>
  )
}
Often, to make the component more readable we will destructure props. This makes it easier for other developers to know what props our component takes.

import React from 'react';

export default function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <dt>Weight</dt>
      <dd>{weight}</dd>
    </dl>
  )
}
Component Use
We pass data into components by passing props to the component. Props are passed using a syntax similar to HTML attribute syntax.

import React from 'react';
import Dog from './Dog';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="spot" age={5} weight="25 lbs" />
    </>
  )
}
Type Checking Props
In order to keep readability high, even in complex applications and components, its often nice to add prop type checking. This makes it easier for developers to know what types they can pass as props as well as providing nice error messaging should a developer pass in the wrong type.

import React from 'react';
import PropTypes from 'prop-types'

function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <dt>Weight</dt>
      <dd>{weight}</dd>
    </dl>
  )
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
}

export default Dog;
Conditional Rendering
Sometimes we don't want to render all elements. For example, we may not know a dog's weight. If we don't know a dog's we can display unknown.

import React from 'react';
import PropTypes from 'prop-types'

function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>
      <dt>Age</dt>
      <dd>{age}</dd>
      <dt>Weight</dt>
      <dd>{weight ? weight : 'unknown'}</dd>
    </dl>
  )
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string
}

export default Dog;
Above we user the ternary operator condition ? if true : else to display unknown if weight is not defined. Note also that the weight PropTypes is no longer required.

We can also leave off the entire Weight section if weight is not provided

import React from 'react';
import PropTypes from 'prop-types'

function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      {weight && <dt>Weight</dt>
      <dd>{weight}</dd>}
    </dl>
  )
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired
}

export default Dog;
Above we use && to conditionally display the weight section only if weight is defined.
