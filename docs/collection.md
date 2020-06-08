# Collection

- Represents a list of data, all adhering to the same structure
- This list of data can be visualized in many ways
-

# V1 Goals

- The library should be able to work with paginated queries, infinite list or static list
- Accepts
  - A static list of data or
  - A function that when executed will provide more data
  - A config based on which the data will be displayed in a specific view. Each view has its own config structure
- Every item must have a unique key called id

## Supported collection types
* Table
* List
* Board
* Calendar
