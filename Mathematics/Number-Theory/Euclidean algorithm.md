**Euclidean algorithm** is an [[algorithm]] for finding the [[greatest common divisor]] using [[recursion]].

# Pseudocode

```python
def gcd(a, b):
    return a if b == 0 else return gcd(b, a % b)
```