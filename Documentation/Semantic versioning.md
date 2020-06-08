[**Semantic versioning**](https://semver.org/) is a software versioning specification where version are given as MAJOR.MINOR.PATCH. 

1. Patch number increments with a bug fix (backwards compatible).
2. Minor number increments with added functionality (also backwards compatible).
3. Major number increments with a backwards incompatible API change.

The upshot is this:

* Always use the latest patch number since it'll have the most bug fixes.
* If multiple versions within the same major need to be used, use the max minor number.