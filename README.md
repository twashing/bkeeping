# bkeeping

A web frontend library to the [bkell](https://github.com/twashing/bkell) bookkeeping system. 

## Usage

## Devops

- `HOST` environment variable needs to be set, to your host's IP address

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## TODO 

- `add-user-ifnil`
- internal data structures can only be maps and vectors (update-in doesn't work on lists, sets and sequnces)
- kludgey implementation of entry-partstate update; refactor
  - setting a global entryF, and updating using an index (transact on sub-curosrs isn't working)
  - explicitly calling parent-owner/refresh!, because parent component isn't re-rendering on state change
    - passing around index and parent-owner, to manage this kludge
  - calling om/set-state! in IRenderState, to force local state change

## Notes 

- run coffeescript compiler with `lein shell coffee -w -m -o resources/public/js/ src/coffee/`

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
