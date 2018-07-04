# gitbook-plugin-dot

<a href="http://npmjs.com/gitbook-plugin-dot">
  <img src="https://img.shields.io/npm/v/gitbook-plugin-dot.svg?style=flat-square" alt="npm">
</a>

Gitbook plugin for rendering
[DOT (graph description language)](<https://en.wikipedia.org/wiki/DOT_(graph_description_language)>) into SVG.

## Prerequisite

Gitbook `^3` is required.

You need working dot binary which is included in [Graphviz](https://www.graphviz.org/). If you don't have one
[download](https://www.graphviz.org/download/) & install it first.

## Installation

```bash
npm install gitbook-plugin-dot
```

## Usage

```
Insert graph using DOT block:

{% dot %}
graph graphname {
  a -- b -- c;
  b -- d;
}
{% enddot %}
```

## Config

| Key  | Type     | Default | Description                                |
| ---- | -------- | ------- | ------------------------------------------ |
| bin  | string   | `'dot'` | A path to the dot binary file              |
| args | string[] | `[]`    | Additional arguments passed to dot command |

```json
{
  "plugins": ["dot"],
  "pluginsConfig": {
    "dot": {
      "bin": "/usr/local/bin/dot",
      "args": ["-x"]
    }
  }
}
```
