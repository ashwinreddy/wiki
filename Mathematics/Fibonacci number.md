A **Fibonacci number** is a $F_i$ in the [[sequence]] $\\{F_n\\}$ where we use the [[recurrence relation]]

$$
F_n = \begin{cases} 0 & n = 0 \\\\ 1 & n = 1 \\\\ F_{n-1} + F_{n-2} & \text{otherwise} \end{cases}
$$

```python
def fib(n):
    if n<=1: 
        return n
    else:
        return fib(n-1) + fib(n-2)
```