A **topological sort** takes a [[DAG|directed acyclic graph]] and outputs an ordering of edges $(u, v)$ such that $u$ must come before $v$ in ordering.

[[https://assets.leetcode.com/users/images/63bd7ad6-403c-42f1-b8bb-2ea41e42af9a_1613794080.8115625.png]]

# Algorithms

## Brute Force Search

Try all permutations of $V$ and return the first that is a topological sort. This takes $\order{n! \cdot m \cdot n}$