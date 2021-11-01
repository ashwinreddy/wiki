**Dynamic programming** is an algorithmic paradigm in which a problem is solved by identifying a collection of subproblems and tackling them one by one.

In **top down (memoization)** approach, we use recursion and a lookup table to not recompute $f(\cdot)$ multiple times on the same arguments. In the **bottum up** approach (which generally takes the same time but may give memory savings), we fill the lookup table iteratively rather than recursively. 

There is an implicit [[dag|directed acyclic graph]] that sequences the problems.

_Example_. The longest increasing subsequence gives a sequence $\\{a\_i\\}_{i=1}^n$. We want to find the maximum length of an increasing [[subsequence]]. If $L(j)$ is the length of the longest path ending at $j$, then

$$
L(j) = 1 + \max \\{ L(i): (i, j) \in E\\}.
$$

# [[Fibonacci number]] Example

```python
def fibMemo(n, mem):
    if n<=1:
        return n
    elif mem[n]!=None:
        return mem[n]
    else:
        mem[n] = fibMemo(n-1,mem) + fibMemo(n-2,mem)
        return mem[n]

def fibFast(n):
    mem = [None]*(n+1)
    return fibMemo(n, mem)
```