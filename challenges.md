# Browser Back/Forward System Using Two Stacks

## Overview

To implement a browser back/forward system using two stacks, we'll use the following approach:

1. **Stacks**:
   - `backStack`: Stores the history of visited sites in the backward direction.
   - `forwardStack`: Stores the history of visited sites in the forward direction.

2. **Current Site**:
   - `current`: Keeps track of the current site being visited.

## Pseudo-code

### Initialization
```pseudo
backStack = new Stack()
forwardStack = new Stack()
current = null

function visit(site):
    if current is not null:
        backStack.push(current)
    current = site
    forwardStack = new Stack()  // Clear the forward stack

function goBack():
    if backStack.isEmpty():
        print("No pages to go back to")
        return
    forwardStack.push(current)
    current = backStack.pop()

function goForward():
    if forwardStack.isEmpty():
        print("No pages to go forward to")
        return
    backStack.push(current)
    current = forwardStack.pop()

## Example Usage

current = null
backStack = []
forwardStack = []

visit("Google")
current = "Google"
backStack = []
forwardStack = []


