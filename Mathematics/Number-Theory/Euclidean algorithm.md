**Euclidean algorithm** is an [[algorithm]] for finding the [[greatest common divisor]] using [[recursion]].

# Pseudocode

```python
gcd = lambda a, b: a if b == 0 else return gcd(b, a % b)
```