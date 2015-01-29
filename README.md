# bkeeping

A web frontend library to the [bkell](https://github.com/twashing/bkell) bookkeeping system. 

## Usage

Start the system in 2 parts. 

1) Start the datomic transactor, or make sure one is already running. This is typically done with a command like below. For more details, see datomic's [getting started](http://docs.datomic.com/getting-started.html) page.
```
$ bin/transactor config/transactor.properties 
Launching with Java options -server -Xms1g -Xmx1g -XX:+UseG1GC -XX:MaxGCPauseMillis=50
Starting datomic:dev://<your-host>:4334/<DB-NAME>, storing data in: data ...
System started datomic:dev://<your-host>:4334/<DB-NAME>, storing data in: data
```

2) Start the bkeeping system with the following steps.
- Setup your configuration. The simplest way is to copy the template configuration file to `resources/config.edn`. So this command should do it `cp resources/config.edn{.template,}`. Make sure the config contents reflect your files and DB URL.
- Start a repl. The initial namespace should be `bkeeping.shell`.
- Invoke the function `(start)`.


## Devops

- `HOST` environment variable needs to be set, to your host's IP address

## Prerequisites

You will need [Leiningen][https://github.com/technomancy/leiningen] 2.0.0 or above installed.

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
