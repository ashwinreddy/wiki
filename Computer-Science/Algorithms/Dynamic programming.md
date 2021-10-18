**Dynamic programming** is an algorithmic paradigm in which a problem is solved by identifying a collection of subproblems and tackling them one by one, smallest first, using the answers to small problems to help figure out larger ones. There is an implicit [[dag|directed acyclic graph]] that sequences the problems.

_Example_. The longest increasing subsequence gives a sequence $\\{a\_i\\}_{i=1}^n$. We want to find the maximum length of an increasing [[subsequence]]. If $L(j)$ is the length of the longest path ending at $j$, then

$$
L(j) = 1 + \max \\{ L(i): (i, j) \in E\\}.
$$