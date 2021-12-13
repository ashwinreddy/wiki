**Dynamic programming** is an [[algorithmic|algorithm]] paradigm in which a problem is solved by identifying a collection of subproblems and tackling them one by one.

In **top down (memoization)** approach, we use recursion and a lookup table to not recompute $f(\cdot)$ multiple times on the same arguments. In the **bottum up** approach (which generally takes the same time but may give memory savings because it can discard results of subproblems that won't be revisited), we fill the lookup table iteratively rather than recursively. 

There is an implicit [[dag|directed acyclic graph]] that sequences the problems.

# Approach

We have to find a [[recurrence relation]], usually this is something that encapsulates the decision we can make (e.g. do we include it or not?)

Common subproblems.

* The input is $x_1, x_2, \dots x_n$ and a subproblem is $x_1, \dots, x_i$. The number of subproblems is $\order{n}$.
* The input is $x_1, \dots, x_n$ and $y_1, \dots, y_m$. The subproblem is $x_1, \dots, x_i$ and $y_1, \dots, y_j$. The number of subproblems is $\order{mn}$.


# Examples

* [[Knapsack problem]]

## Longest increasing [[subsequence]]

We have a sequence $\\{a\_i\\}_{i=1}^n$. Find the max length of any increasing [[subsequence]]. Let $L(j)$ be the length of the longest path ending at $j$. We'll return $\max_j L(j)$, but

$$
L(i) = \begin{cases} 1 + \max_{ \substack{ 0 < j < i \\\\ a_j < a_i } } L(j) \\\\ 1 & \not\exists j \end{cases}
$$

This will take $\order{n^2}$ time.

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