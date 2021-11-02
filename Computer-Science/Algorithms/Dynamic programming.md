**Dynamic programming** is an algorithmic paradigm in which a problem is solved by identifying a collection of subproblems and tackling them one by one.

In **top down (memoization)** approach, we use recursion and a lookup table to not recompute $f(\cdot)$ multiple times on the same arguments. In the **bottum up** approach (which generally takes the same time but may give memory savings because it can discard results of subproblems that won't be revisited), we fill the lookup table iteratively rather than recursively. 

There is an implicit [[dag|directed acyclic graph]] that sequences the problems.

# Examples

## Longest increasing [[subsequence]]

The longest increasing subsequence gives a sequence $\\{a\_i\\}_{i=1}^n$. We want to find the maximum length of an increasing [[subsequence]]. If $L(j)$ is the length of the longest path ending at $j$, then

$$
L(j) = 1 + \max \\{ L(i): (i, j) \in E\\}.
$$

## [[Fibonacci number]] Example

Here is the top-down.

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

Here is the bottom up.

```python
def fibBottomUp(n):
    mem = [None]*(n+1)
    mem[0] = 0
    mem[1] = 1
    for i in range(2, n+1):
        mem[i] = mem[i-1] + mem[i-2]
    return mem[n]

def fibBottomUpSpaceSaving(n):
    mem = [0, 1] # stores mem[i-1] and mem[i-2]
    for i in range(2, n+1):
        x = mem[0] + mem[1]
        mem[0] = mem[1]
        mem[1] = x
    return mem[1]
```

# Time Complexity

The runtime is generally $\order{ \text{number of subproblems} \times \text{time to compute a subproblem} }$.