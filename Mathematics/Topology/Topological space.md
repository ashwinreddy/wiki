A **topological space** is a [[set]] of points $X$ along with chosen neighborhoods $N(x)$ for subsets $x \in X$ that satisfy:

* Every element $x \in X$ is in its own neighborhood
* Every superset of a neighborhood of a point is also a neighborhood
* The intersection of two neighborhoods of a point is itself a neighborhood of the point
* Any neighborhood $N$ for a point $x$ includes a neighborhood $M$ such that $N$ is a neighborhood of each point of $M$.

Formally, a **topology** on $X$ is $\tau \subseteq \mathscr{P}(X)$ whose elements are called **open sets** with
1. $\emptyset \in \tau, X \in \tau$
2. $U, V \in \tau \implies U \cap V \in \tau$
3. $U_\alpha \in \tau \implies \bigcup_{\alpha} U_\alpha \in \tau$