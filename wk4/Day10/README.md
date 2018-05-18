## Important Vuejs Concepts

## Components focused
Its all about creating components. A website is comprised of many components. 
### Why components
* Reusable - can resuse the same component
* Composable - can combine multiple components
* Saves time writing redundant lines of code

## Watching and Capturing events
Whats the purpose of functions / linking functions
The website captures events and it  LINK them to a function / variable (data { })
#### methods of capturing events
*v-bind
*v-on
#### Many types of events
*keyboard events
*mouse events
    *mouse hover over something
    *prevent people from quitting your website
    *heatmaps with your mouse
*scroll events
*eye tracking events (need external api)

## 2 way vs 1 way data binding
`<input v-model="something">` is short form  for
```
<input
   v-bind:value="something"
   v-on:input="something = $event.target.value"
>
```
v-model is a two-way binding for form inputs. It combines v-bind, which brings a js value into the markup, and v-on:input to update the js value.

