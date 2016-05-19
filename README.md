# API Workbench

API Workbench, a rich, full-featured integrated development environment (IDE) for designing, building, testing, documenting and sharing RESTful HTTP APIs. It supports both RAML 0.8 and the recently launched RAML 1.0. [RAML](http://raml.org) makes it easy to manage the whole API lifecycle from design to sharing.

NOTE: This version includes a [hack](https://github.com/stephanesan/api-workbench/commit/fa532a4efcad07f8ca789c2b31a470b268f9393b) to resolve json-schema dependencies on the local filesystem.

## Installation

On windows:
```
cd C:\Users\{username}\.atom\packages\
rmdir .\api-workbench /s /q
git clone https://github.com/stephanesan/api-workbench.git
cd api-workbench
apm link
apm install
```

On linux:
```
cd ~/.atom/packages
rm –rf api-workbench
git clone https://github.com/stephanesan/api-workbench.git
cd api-workbench
apm link
apm install
```

## More Information

The main API Workbench site: [www.apiworkbench.com](http://apiworkbench.com)

Please file API Workbench issues in the [issues area](https://github.com/mulesoft/api-workbench/issues)

Additional information such as tips on installation may be found in the [wiki](https://github.com/mulesoft/api-workbench/wiki)
