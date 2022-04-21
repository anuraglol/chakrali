oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g chakrali
$ chli COMMAND
running command...
$ chli (--version)
chakrali/0.0.0 linux-x64 node-v16.13.2
$ chli --help [COMMAND]
USAGE
  $ chli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`chli hello PERSON`](#chli-hello-person)
* [`chli hello world`](#chli-hello-world)
* [`chli help [COMMAND]`](#chli-help-command)
* [`chli plugins`](#chli-plugins)
* [`chli plugins:install PLUGIN...`](#chli-pluginsinstall-plugin)
* [`chli plugins:inspect PLUGIN...`](#chli-pluginsinspect-plugin)
* [`chli plugins:install PLUGIN...`](#chli-pluginsinstall-plugin-1)
* [`chli plugins:link PLUGIN`](#chli-pluginslink-plugin)
* [`chli plugins:uninstall PLUGIN...`](#chli-pluginsuninstall-plugin)
* [`chli plugins:uninstall PLUGIN...`](#chli-pluginsuninstall-plugin-1)
* [`chli plugins:uninstall PLUGIN...`](#chli-pluginsuninstall-plugin-2)
* [`chli plugins update`](#chli-plugins-update)

## `chli hello PERSON`

Say hello

```
USAGE
  $ chli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/kr-anurag/chakrali/blob/v0.0.0/dist/commands/hello/index.ts)_

## `chli hello world`

Say hello world

```
USAGE
  $ chli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `chli help [COMMAND]`

Display help for chli.

```
USAGE
  $ chli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for chli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `chli plugins`

List installed plugins.

```
USAGE
  $ chli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ chli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `chli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ chli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ chli plugins add

EXAMPLES
  $ chli plugins:install myplugin 

  $ chli plugins:install https://github.com/someuser/someplugin

  $ chli plugins:install someuser/someplugin
```

## `chli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ chli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ chli plugins:inspect myplugin
```

## `chli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ chli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ chli plugins add

EXAMPLES
  $ chli plugins:install myplugin 

  $ chli plugins:install https://github.com/someuser/someplugin

  $ chli plugins:install someuser/someplugin
```

## `chli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ chli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ chli plugins:link myplugin
```

## `chli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chli plugins unlink
  $ chli plugins remove
```

## `chli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chli plugins unlink
  $ chli plugins remove
```

## `chli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chli plugins unlink
  $ chli plugins remove
```

## `chli plugins update`

Update installed plugins.

```
USAGE
  $ chli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
